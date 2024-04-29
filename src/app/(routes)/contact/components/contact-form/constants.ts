import type { DefaultValues } from 'react-hook-form';
import { type ContactFormSchema, FormSubmitStatus } from './types';

const HEADING: string = 'Send me a message!';
const CONFIRM_MESSAGE: string = 'Confirm sending this message?';
const SENT_MESSAGE: string = 'Message sent!';
const EMAIL_SUBJECT: string = '!! New message from my website !!';

const CONTACT_FORM_DEFAULT_VALUES: DefaultValues<ContactFormSchema> = {
  name: '',
  email: '',
  message: ''
};
const FORM_SUBMIT_MESSGAE: Record<FormSubmitStatus, string> = {
  [FormSubmitStatus.Invalid]: 'Invalid form input. Please try again.',
  [FormSubmitStatus.Failed]: 'Failed to send message :(',
  [FormSubmitStatus.Succeeded]: "Thank you for your message! I'll get back to you soon."
};

export {
  HEADING,
  CONFIRM_MESSAGE,
  SENT_MESSAGE,
  EMAIL_SUBJECT,
  CONTACT_FORM_DEFAULT_VALUES,
  FORM_SUBMIT_MESSGAE
};
