import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z
    .string()
    .min(1, { message: 'Email address is required' })
    .email({ message: 'Invalid email address' }),
  message: z.string().min(1, { message: 'Message is required' })
});

type ContactFormSchema = z.output<typeof contactFormSchema>;

export { contactFormSchema, type ContactFormSchema };
