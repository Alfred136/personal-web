'use server';

import nodemailer from 'nodemailer';
import { contactFormSchema } from '../components/form/schema';

const EMAIL_SUBJECT = '!! New message from my website !!';

enum ContactFormMessage {
  InvalidInput = 'Invalid form input. Please try again.',
  Failed = 'Failed to send message :(',
  Success = "Thank you for your message! I'll get back to you soon."
}

export interface ContactFormState {
  isSuccessful: boolean;
  message: ContactFormMessage;
}

export async function submitContactForm(data: FormData): Promise<ContactFormState> {
  const formData = Object.fromEntries(data.entries());
  const parsedData = contactFormSchema.safeParse(formData);

  if (!parsedData.success) {
    return {
      isSuccessful: false,
      message: ContactFormMessage.InvalidInput
    };
  }

  const { name, email, message } = parsedData.data;
  const messageText = `Name: ${name}\nEmail: ${email}\n\n ${message}`;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });

  const info = await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.MAIL_TO,
    subject: EMAIL_SUBJECT,
    text: messageText
  });

  return {
    isSuccessful: info.rejected.length > 0,
    message: info.rejected.length > 0 ? ContactFormMessage.Failed : ContactFormMessage.Success
  };
}
