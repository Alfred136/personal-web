import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';
import { EMAIL_SUBJECT } from '@/app/(routes)/contact/components/contact-form/constants';
import { contactFormSchema } from '@/app/(routes)/contact/components/contact-form/schema';

const POST = async (request: NextRequest) => {
  try {
    const formData = await request.json();
    const parsed = contactFormSchema.safeParse(formData);

    if (!parsed.success) {
      return new NextResponse(JSON.stringify({}), { status: 400 });
    }
    const { name, email, message } = parsed.data;
    const messageText = `Name: ${name}\nEmail: ${email}\n\n ${message}`;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.MAIL_TO,
      subject: EMAIL_SUBJECT,
      text: messageText
    });

    return new NextResponse(JSON.stringify({}), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({}), { status: 500 });
  }
};

export { POST };
