import { contactFormSchema } from './schema';
import type { output } from 'zod';
import type { HTMLInputTypeAttribute } from 'react';
import type { UseFormRegister, FieldValues, Path } from 'react-hook-form';

type ContactFormSchema = output<typeof contactFormSchema>;

interface FormFieldContainerProps {
  labelName: string;
  children: React.ReactNode;
}

interface FormFieldElementProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
}

interface FormFieldInputProps<T extends FieldValues> extends FormFieldElementProps<T> {
  type: HTMLInputTypeAttribute;
}

interface FormFieldTextAreaProps<T extends FieldValues> extends FormFieldElementProps<T> {}

interface FormFieldErrorMessageProps {
  message?: string;
}

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

export type {
  ContactFormSchema,
  FormSubmitOutput,
  FormFieldContainerProps,
  FormFieldErrorMessageProps,
  FormFieldInputProps,
  FormFieldTextAreaProps
};

export { FormSubmitStatus };
