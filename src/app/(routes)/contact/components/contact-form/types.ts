import { contactFormSchema } from './schema';
import type { output } from 'zod';

type ContactFormSchema = output<typeof contactFormSchema>;

// server actions
enum FormSubmitStatus {
  Invalid = 'Invalid form input. Please try again.',
  Failed = 'Failed to send message :(',
  Succeeded = "Thank you for your message! I'll get back to you soon."
}

interface FormSubmitOutput {
  isSuccessful: boolean;
  status: FormSubmitStatus;
}

export type { ContactFormSchema, FormSubmitOutput };

export { FormSubmitStatus };
