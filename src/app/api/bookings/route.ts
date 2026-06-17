import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/utils/mongodb';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    
    const bookings = await db
      .collection('bookings')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ bookings });
  } catch (error: any) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { concern, doctorId, date, time, patient } = body;

    if (!concern || !doctorId || !date || !time || !patient?.name || !patient?.phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { db } = await connectToDatabase();

    const newBooking = {
      concern,
      doctorId,
      date,
      time,
      patient,
      status: 'Pending', // Pending, Confirmed, Completed, Cancelled
      createdAt: new Date(),
    };

    const result = await db.collection('bookings').insertOne(newBooking);
    const insertedBooking = { ...newBooking, _id: result.insertedId };

    // Send Email Notification
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER, // Send to the admin/hospital
          subject: `New Booking: ${patient.name} - ${new Date(date).toLocaleDateString()}`,
          html: `
            <h2>New Appointment Booking</h2>
            <p><strong>Patient Name:</strong> ${patient.name}</p>
            <p><strong>Phone:</strong> ${patient.phone}</p>
            <p><strong>Age:</strong> ${patient.age || 'N/A'}</p>
            <p><strong>Concern:</strong> ${concern}</p>
            <p><strong>Doctor ID:</strong> ${doctorId}</p>
            <p><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</p>
            <p><strong>Time:</strong> ${time}</p>
            <p><strong>Notes:</strong> ${patient.notes || 'None'}</p>
            <br/>
            <p>Please log in to the admin dashboard to manage this booking.</p>
          `,
        };

        await transporter.sendMail(mailOptions);
      }
    } catch (emailError) {
      console.error('Error sending email notification:', emailError);
      // We don't fail the booking if the email fails
    }

    return NextResponse.json({ success: true, booking: insertedBooking });
  } catch (error: any) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
