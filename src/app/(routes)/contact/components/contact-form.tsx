'use client';

import { z } from 'zod';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { HTMLInputTypeAttribute, useEffect, useState } from 'react';
import type { SubmitHandler, UseFormRegister, FieldValues, Path } from 'react-hook-form';
import { Button } from '@/components';
import { submitContactForm } from '../api/submit-contact-form';

// global constants
const HEADING = 'Send me a message!';

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z
    .string()
    .min(1, { message: 'Email address is required' })
    .email({ message: 'Invalid email address' }),
  message: z.string().min(1, { message: 'Message is required' })
});

type ContactFormSchema = z.output<typeof contactFormSchema>;

interface FormFieldMessageProps {
  message?: string;
}

const FormFieldMessage = (props: FormFieldMessageProps) => {
  const { message } = props;
  return <span className='text-[13px] text-red-400'>{message ?? 'Invalid input'}</span>;
};

interface FormFieldProps {
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

const FormFieldInput = <T extends FieldValues>(props: FormFieldInputProps<T>) => {
  const { register, name, type } = props;
  return (
    <input
      id={name}
      type={type}
      {...register(name)}
      className='w-full py-2 px-1 bg-night border-[1px] border-sunset rounded-lg'
    />
  );
};

const FormFieldTextArea = <T extends FieldValues>(props: FormFieldTextAreaProps<T>) => {
  const { register, name } = props;
  return (
    <textarea
      id={name}
      {...register(name)}
      className='w-full h-[300px] py-2 px-1 bg-night border-[1px] border-sunset rounded-lg'
    />
  );
};

const FormField = (props: FormFieldProps) => {
  const { labelName, children } = props;
  return (
    <div className='w-full flex flex-col ss:flex-row'>
      <label className='w-full ss:w-1/6 text-[16px]'>{labelName}</label>
      <div className='w-full ss:w-5/6 text-[16px]'>{children}</div>
    </div>
  );
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data: ContactFormSchema) => {
    console.log(data);
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);

    if (confirm('Confirm sending this message?')) {
      const { isSuccessful, message } = await submitContactForm(formData);
      alert(message);
      setIsSubmitSuccessful(isSuccessful);
    }
  };

  return (
    <div className='w-full flex flex-col gap-4 overflow-hidden'>
      <h2>{HEADING}</h2>

      <form className='w-full px-1 pb-4 flex flex-col gap-10' onSubmit={handleSubmit(onSubmit)}>
        <FormField labelName='Name'>
          <FormFieldInput type='text' name='name' register={register} />
          {errors.name && <FormFieldMessage message={errors.name?.message} />}
        </FormField>

        <FormField labelName='Email'>
          <FormFieldInput type='text' name='email' register={register} />
          {errors.email && <FormFieldMessage message={errors.email?.message} />}
        </FormField>

        <FormField labelName='Message'>
          <FormFieldTextArea name='message' register={register} />
          {errors.message && <FormFieldMessage message={errors.message?.message} />}
        </FormField>

        <Button title='Send' type='submit' wrapperClassName='w-full ss:w-5/6 ml-auto' />

        {isSubmitSuccessful && <p>Message sent!</p>}
      </form>
    </div>
  );
};
