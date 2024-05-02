import { contactFormSchema } from './schema';
import type { output } from 'zod';

type ContactFormSchema = output<typeof contactFormSchema>;

export type { ContactFormSchema };
