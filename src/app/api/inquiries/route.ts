import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/utils/mongodb';

export async function GET() {
  try {
    const { db } = await connectToDatabase();

    const inquiries = await db
      .collection('inquiries')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ inquiries });
  } catch (error: any) {
    console.error('Error fetching inquiries:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, concern, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { db } = await connectToDatabase();

    const newInquiry = {
      name,
      phone,
      email: email || '',
      concern: concern || 'General enquiry',
      message,
      status: 'New', // New, Read, Resolved
      createdAt: new Date(),
    };

    const result = await db.collection('inquiries').insertOne(newInquiry);
    const insertedInquiry = { ...newInquiry, _id: result.insertedId };

    // Send Email Notification
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const nodemailer = require('nodemailer');
        const path = require('path');
        const logoPath = path.join(process.cwd(), 'public', 'logo.png');
        const origin = req.nextUrl.origin;
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
          subject: `New Inquiry Received: ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background-color: #fffaf5; color: #0f1729;">
              <div style="text-align: center; margin-bottom: 20px;">
                <img src="cid:logo" alt="Fateh Hospital Logo" style="max-height: 80px;" />
              </div>
              <h2 style="color: #e8356b; border-bottom: 2px solid #fff5f7; padding-bottom: 10px; text-align: center;">New Contact Form Inquiry</h2>
              <p>Hello Admin,</p>
              <p>A new inquiry has been received through the website contact form. Here are the details:</p>
              <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Name:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${email || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Concern:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${concern || 'General enquiry'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Message:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-style: italic;">"${message}"</td>
                </tr>
              </table>
              <div style="margin-top: 25px; text-align: center;">
                <a href="${origin}/admin" style="background-color: #e8356b; color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">View Inquiries</a>
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

        const promises = [transporter.sendMail(adminMailOptions)];

        // 2. Email to user (if email is provided)
        if (email) {
          const userHtml = [
            '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background-color: #fffaf5; color: #0f1729;">',
            '  <div style="text-align: center; border-bottom: 2px solid #fff5f7; padding-bottom: 20px; margin-bottom: 20px;">',
            '    <img src="cid:logo" alt="Fateh Hospital Logo" style="max-height: 80px; margin-bottom: 10px;" />',

            '    <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 14px;">Your Health is Our Priority</p>',
            '  </div>',
            '  <h2 style="color: #0f1729; margin-top: 0;">Inquiry Received</h2>',
            '  <p>Dear <strong>' + name + '</strong>,</p>',
            '  <p>Thank you for contacting Fateh Hospital. We have successfully received your inquiry regarding <strong>' + (concern || 'General enquiry') + '</strong>.</p>',
            '  <div style="background-color: white; border: 1px solid #eee; border-radius: 8px; padding: 15px; margin: 20px 0;">',
            '    <p style="margin: 0; color: #0f1729; font-style: italic;">"' + message + '"</p>',
            '  </div>',
            '  <div style="background-color: #fff5f7; border-left: 4px solid #e8356b; padding: 12px; margin: 20px 0; font-size: 14px; color: #0f1729;">',
            '    <strong>What happens next:</strong><br/>',
            '    Our team will review your message and get back to you as soon as possible, usually within 24 hours.',
            '  </div>',
            '  <p style="font-size: 13px; color: #6b7280; line-height: 1.5;">If your inquiry is urgent, please call our help desk directly at +91 78887-41037.</p>',
            '  <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0 20px 0;" />',
            '  <p style="font-size: 12px; text-align: center; color: #9ca3af; margin: 0;">Fateh Hospital &middot; Dholan Majra Chowk, Morinda &middot; Punjab, India</p>',
            '</div>',
          ].join('\n');

          const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank you for contacting Fateh Hospital',
            html: userHtml,
            attachments: [
              {
                filename: 'logo.png',
                path: logoPath,
                cid: 'logo',
              },
            ],
          };
          promises.push(transporter.sendMail(userMailOptions));
        }

        await Promise.all(promises);
      }
    } catch (emailError) {
      console.error('Error sending email notifications for inquiry:', emailError);
    }

    return NextResponse.json({ success: true, inquiry: insertedInquiry });
  } catch (error: any) {
    console.error('Error creating inquiry:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
