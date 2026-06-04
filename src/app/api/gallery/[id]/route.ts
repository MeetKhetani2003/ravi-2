import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase, getGridFSBucket } from '@/utils/mongodb';
import { ObjectId } from 'mongodb';

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
