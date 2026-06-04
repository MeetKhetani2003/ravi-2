import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase, getGridFSBucket } from '@/utils/mongodb';
import { GALLERY } from '@/legacyData';

// Helper to extract Youtube Video ID
function extractYoutubeId(urlOrId: string): string {
  if (!urlOrId) return '';
  const trimmed = urlOrId.trim();
  if (trimmed.length === 11 && !trimmed.includes('/') && !trimmed.includes('.')) {
    return trimmed;
  }
  try {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = trimmed.match(regExp);
    if (match && match[2].length === 11) {
      return match[2];
    }
  } catch (e) {
    // Ignore and fallback
  }
  return trimmed;
}

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    
    // Check if gallery_items collection exists and has documents
    const count = await db.collection('gallery_items').countDocuments();
    
    if (count === 0) {
      // Seed initial items from legacyData
      const seedItems = [
        ...GALLERY.photos.map((p, idx) => ({
          type: 'photo',
          // Seeded photos use external static URLs
          url: p.url,
          title: p.title,
          category: p.category,
          createdAt: new Date(Date.now() - idx * 1000)
        })),
        ...GALLERY.videos.map((v, idx) => ({
          type: 'video',
          youtubeId: v.youtubeId,
          title: v.title,
          category: v.category,
          createdAt: new Date(Date.now() - (idx + GALLERY.photos.length) * 1000)
        }))
      ];
      await db.collection('gallery_items').insertMany(seedItems);
    }

    const items = await db
      .collection('gallery_items')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ items });
  } catch (error: any) {
    console.error('Error fetching gallery items:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';
    const { db } = await connectToDatabase();

    if (contentType.includes('multipart/form-data')) {
      // It's a file upload (Photo)
      const formData = await req.formData();
      const file = formData.get('file') as File | null;
      const title = formData.get('title') as string || 'Untitled Photo';
      const category = formData.get('category') as string || 'General';

      if (!file) {
        return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
      }

      // Upload file to GridFS
      const bucket = await getGridFSBucket();
      const buffer = Buffer.from(await file.arrayBuffer());

      const uploadStream = bucket.openUploadStream(file.name, {
        contentType: file.type || 'image/jpeg',
        metadata: { title, category }
      } as any);

      await new Promise<void>((resolve, reject) => {
        uploadStream.write(buffer, (err) => {
          if (err) return reject(err);
          uploadStream.end(() => resolve());
        });
      });

      const fileId = uploadStream.id;

      const newItem = {
        type: 'photo',
        fileId: fileId,
        title,
        category,
        createdAt: new Date()
      };

      const result = await db.collection('gallery_items').insertOne(newItem);
      const insertedItem = { ...newItem, _id: result.insertedId };

      return NextResponse.json({ success: true, item: insertedItem });

    } else {
      // It's a JSON payload (Video)
      const body = await req.json();
      const { type, title, category, videoUrl } = body;

      if (type !== 'video') {
        return NextResponse.json({ error: 'Invalid item type' }, { status: 400 });
      }

      if (!videoUrl) {
        return NextResponse.json({ error: 'Video URL or YouTube ID is required' }, { status: 400 });
      }

      const youtubeId = extractYoutubeId(videoUrl);
      if (!youtubeId || youtubeId.length !== 11) {
        return NextResponse.json({ error: 'Invalid YouTube Video ID or URL' }, { status: 400 });
      }

      const newItem = {
        type: 'video',
        youtubeId,
        title: title || 'Untitled Video',
        category: category || 'General',
        createdAt: new Date()
      };

      const result = await db.collection('gallery_items').insertOne(newItem);
      const insertedItem = { ...newItem, _id: result.insertedId };

      return NextResponse.json({ success: true, item: insertedItem });
    }
  } catch (error: any) {
    console.error('Error adding gallery item:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
