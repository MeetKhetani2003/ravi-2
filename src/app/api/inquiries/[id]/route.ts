import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/utils/mongodb';
import { ObjectId } from 'mongodb';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { db } = await connectToDatabase();
    const objectId = new ObjectId(id);

    const inquiry = await db.collection('inquiries').findOne({ _id: objectId });
    if (!inquiry) {
      return NextResponse.json({ error: 'Inquiry not found' }, { status: 404 });
    }

    await db.collection('inquiries').deleteOne({ _id: objectId });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error deleting inquiry:', error);
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

    const body = await request.json();
    const { status } = body;

    const inquiry = await db.collection('inquiries').findOne({ _id: objectId });
    if (!inquiry) {
      return NextResponse.json({ error: 'Inquiry not found' }, { status: 404 });
    }

    await db.collection('inquiries').updateOne(
      { _id: objectId },
      { $set: { status } }
    );

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error updating inquiry status:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
