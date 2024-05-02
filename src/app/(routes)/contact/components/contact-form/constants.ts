import type { DefaultValues } from 'react-hook-form';
import type { ContactFormSchema } from './types';

const HEADING: string = 'Send me a message!';
const CONFIRM_MESSAGE: string = 'Confirm sending this message?';
const SENT_MESSAGE: string = 'Message sent!';
const EMAIL_SUBJECT: string = '!! New message from my website !!';

const CONTACT_FORM_DEFAULT_VALUES: DefaultValues<ContactFormSchema> = {
  name: '',
  email: '',
  message: ''
};

const CONTACT_FORM_SUBMIT_MESSAGE: Record<number, string> = {
  200: "Thank you for your message! I'll get back to you soon.",
  400: 'Invalid form input. Please try again.',
  500: 'Internal server error. Failed to send message.'
};

export {
  HEADING,
  CONFIRM_MESSAGE,
  SENT_MESSAGE,
  EMAIL_SUBJECT,
  CONTACT_FORM_DEFAULT_VALUES,
  CONTACT_FORM_SUBMIT_MESSAGE
};
