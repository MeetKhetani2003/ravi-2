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

    if (!concern || !doctorId || !date || !time || !patient?.name || !patient?.phone || !patient?.email) {
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
        const path = require('path');
        const logoPath = path.join(process.cwd(), 'public', 'logo.png');
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        // 1. Email to self (admin/hospital)
        const adminMailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: `New Booking Notification: ${patient.name} - ${new Date(date).toLocaleDateString()}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background-color: #fffaf5; color: #0f1729;">
              <div style="text-align: center; margin-bottom: 20px;">
                <img src="cid:logo" alt="Fateh Hospital Logo" style="max-height: 80px;" />
              </div>
              <h2 style="color: #e8356b; border-bottom: 2px solid #fff5f7; padding-bottom: 10px; text-align: center;">New Appointment Booking Received</h2>
              <p>Hello Admin,</p>
              <p>A new appointment has been scheduled through the online booking system. Here are the details:</p>
              <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Patient Name:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${patient.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${patient.email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${patient.phone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Age:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${patient.age || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Concern:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${concern}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Doctor:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${doctorId}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Date:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${new Date(date).toLocaleDateString()}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Time:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${time}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Notes:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-style: italic;">"${patient.notes || 'None'}"</td>
                </tr>
              </table>
              <div style="margin-top: 25px; text-align: center;">
                <a href="${req.nextUrl.origin}/admin" style="background-color: #e8356b; color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">Manage Bookings</a>
              </div>
            </div>
          `,
          attachments: [
            {
              filename: 'logo.png',
              path: logoPath,
              cid: 'logo',
            },
          ],
        };

        // 2. Email to patient (user confirmation)
        const patientMailOptions = {
          from: process.env.EMAIL_USER,
          to: patient.email,
          subject: `Appointment Booking Confirmed - Fateh Hospital`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background-color: #fffaf5; color: #0f1729;">
              <div style="text-align: center; border-bottom: 2px solid #fff5f7; padding-bottom: 20px; margin-bottom: 20px;">
                <img src="cid:logo" alt="Fateh Hospital Logo" style="max-height: 80px; margin-bottom: 10px;" />
                
                <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 14px;">Your Health is Our Priority</p>
              </div>
              
              <h2 style="color: #0f1729; margin-top: 0;">Appointment Confirmation</h2>
              <p>Dear <strong>${patient.name}</strong>,</p>
              <p>Thank you for choosing Fateh Hospital. Your appointment request has been successfully received. Here is your summary details:</p>
              
              <div style="background-color: white; border: 1px solid #eee; border-radius: 8px; padding: 15px; margin: 20px 0;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 5px 0; color: #64748b; font-size: 14px; width: 120px;">Doctor:</td>
                    <td style="padding: 5px 0; color: #0f1729; font-weight: bold; font-size: 14px;">${doctorId}</td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0; color: #64748b; font-size: 14px;">Date:</td>
                    <td style="padding: 5px 0; color: #0f1729; font-weight: bold; font-size: 14px;">${new Date(date).toLocaleDateString()}</td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0; color: #64748b; font-size: 14px;">Time:</td>
                    <td style="padding: 5px 0; color: #0f1729; font-weight: bold; font-size: 14px;">${time}</td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0; color: #64748b; font-size: 14px;">Concern:</td>
                    <td style="padding: 5px 0; color: #0f1729; font-size: 14px;">${concern}</td>
                  </tr>
                </table>
              </div>
              
              <div style="background-color: #fff5f7; border-left: 4px solid #e8356b; padding: 12px; margin: 20px 0; font-size: 14px; color: #0f1729;">
                <strong>What happens next:</strong><br/>
                Our care coordinator will call you within 2 hours to confirm your schedule and provide any preparation instructions.
              </div>
              
              <p style="font-size: 13px; color: #6b7280; line-height: 1.5;">If you need to change or cancel this appointment, please contact our help desk at +91 78887-41037 as soon as possible.</p>
              
              <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0 20px 0;" />
              <p style="font-size: 12px; text-align: center; color: #9ca3af; margin: 0;">Fateh Hospital · Dholan Majra Chowk, Morinda · Punjab, India</p>
            </div>
          `,
          attachments: [
            {
              filename: 'logo.png',
              path: logoPath,
              cid: 'logo',
            },
          ],
        };

        await Promise.all([
          transporter.sendMail(adminMailOptions),
          transporter.sendMail(patientMailOptions)
        ]);
      }
    } catch (emailError) {
      console.error('Error sending email notifications:', emailError);
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
