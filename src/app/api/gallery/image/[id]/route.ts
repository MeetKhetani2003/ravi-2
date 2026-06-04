import { NextRequest, NextResponse } from 'next/server';
import { getGridFSBucket } from '@/utils/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const bucket = await getGridFSBucket();
    const objectId = new ObjectId(id);

    // Verify file exists and get content type
    const files = await bucket.find({ _id: objectId }).toArray();
    if (!files || files.length === 0) {
      return new NextResponse('Image not found', { status: 404 });
    }

    const file = files[0];
    const contentType = (file as any).contentType || 'image/jpeg';

    // Create a download stream from GridFS
    const downloadStream = bucket.openDownloadStream(objectId);

    // Convert the Node.js stream into a Web ReadableStream
    const readable = new ReadableStream({
      start(controller) {
        downloadStream.on('data', (chunk) => {
          controller.enqueue(chunk);
        });
        downloadStream.on('end', () => {
          controller.close();
        });
        downloadStream.on('error', (err) => {
          controller.error(err);
        });
      },
      cancel() {
        downloadStream.destroy();
      }
    });

    return new Response(readable, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error: any) {
    console.error('Error serving GridFS image:', error);
    return new NextResponse(error.message || 'Internal Server Error', { status: 500 });
  }
}
