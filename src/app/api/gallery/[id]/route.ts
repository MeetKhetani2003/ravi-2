import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase, getGridFSBucket } from '@/utils/mongodb';
import { ObjectId } from 'mongodb';

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

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { db } = await connectToDatabase();
    const objectId = new ObjectId(id);

    const item = await db.collection('gallery_items').findOne({ _id: objectId });
    if (!item) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    // If it's a photo and has a GridFS fileId, delete the file from GridFS
    if (item.type === 'photo' && item.fileId) {
      try {
        const bucket = await getGridFSBucket();
        await bucket.delete(new ObjectId(item.fileId));
      } catch (err: any) {
        console.warn('GridFS file deletion warning (file might have been deleted already):', err.message);
      }
    }

    // Delete the reference from database
    await db.collection('gallery_items').deleteOne({ _id: objectId });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error deleting gallery item:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { db } = await connectToDatabase();
    const objectId = new ObjectId(id);

    const item = await db.collection('gallery_items').findOne({ _id: objectId });
    if (!item) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    const contentType = request.headers.get('content-type') || '';

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      const file = formData.get('file') as File | null;
      const title = formData.get('title') as string;
      const category = formData.get('category') as string;

      const updateData: any = {};
      if (title !== null && title !== undefined) updateData.title = title || 'Untitled Photo';
      if (category !== null && category !== undefined) updateData.category = category || 'General';

      if (file) {
        // Upload new file to GridFS
        const bucket = await getGridFSBucket();
        const buffer = Buffer.from(await file.arrayBuffer());

        const uploadStream = bucket.openUploadStream(file.name, {
          contentType: file.type || 'image/jpeg',
          metadata: { title: updateData.title || item.title, category: updateData.category || item.category }
        } as any);

        await new Promise<void>((resolve, reject) => {
          uploadStream.write(buffer, (err) => {
            if (err) return reject(err);
            uploadStream.end(() => resolve());
          });
        });

        const newFileId = uploadStream.id;

        // If the item had an existing fileId, delete the old file
        if (item.type === 'photo' && item.fileId) {
          try {
            await bucket.delete(new ObjectId(item.fileId));
          } catch (err: any) {
            console.warn('GridFS old file deletion warning:', err.message);
          }
        }

        updateData.fileId = newFileId;
        // If it was a static photo, remove the url field since now it uses fileId
        updateData.url = null;
      }

      const updateQuery: any = { $set: updateData };
      if (updateData.url === null) {
        delete updateData.url;
        updateQuery.$unset = { url: '' };
      }

      await db.collection('gallery_items').updateOne(
        { _id: objectId },
        updateQuery
      );

      const updatedItem = await db.collection('gallery_items').findOne({ _id: objectId });
      return NextResponse.json({ success: true, item: updatedItem });

    } else {
      const body = await request.json();
      const { title, category, videoUrl } = body;

      const updateData: any = {};
      if (title !== undefined) updateData.title = title || 'Untitled';
      if (category !== undefined) updateData.category = category || 'General';

      if (item.type === 'video' && videoUrl !== undefined) {
        if (!videoUrl) {
          return NextResponse.json({ error: 'Video URL or YouTube ID is required' }, { status: 400 });
        }
        const youtubeId = extractYoutubeId(videoUrl);
        if (!youtubeId || youtubeId.length !== 11) {
          return NextResponse.json({ error: 'Invalid YouTube Video ID or URL' }, { status: 400 });
        }
        updateData.youtubeId = youtubeId;
      }

      await db.collection('gallery_items').updateOne(
        { _id: objectId },
        { $set: updateData }
      );

      const updatedItem = await db.collection('gallery_items').findOne({ _id: objectId });
      return NextResponse.json({ success: true, item: updatedItem });
    }
  } catch (error: any) {
    console.error('Error updating gallery item:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

