'use server';

import nodemailer from 'nodemailer';
import { EMAIL_SUBJECT } from './constants';
import { contactFormSchema } from './schema';
import { FormSubmitStatus, type FormSubmitOutput } from './types';

const submitForm = async (data: FormData): Promise<FormSubmitOutput> => {
  const formData = Object.fromEntries(data.entries());
  const parsedData = contactFormSchema.safeParse(formData);

  if (!parsedData.success) {
    return {
      isSuccessful: false,
      status: FormSubmitStatus.Invalid
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
    status: info.rejected.length > 0 ? FormSubmitStatus.Failed : FormSubmitStatus.Succeeded
  };
};

export { submitForm };
