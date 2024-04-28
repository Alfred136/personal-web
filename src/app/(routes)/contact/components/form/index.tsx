'use client';

import { useEffect, useState } from 'react';
import { useForm, type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components';
import { submitForm } from './submit';
import * as Constants from './constants';
import type {
  ContactFormSchema,
  FormFieldInputProps,
  FormFieldMessageProps,
  FormFieldProps,
  FormFieldTextAreaProps
} from './types';
import { contactFormSchema } from './schema';

const FormFieldMessage = (props: FormFieldMessageProps) => {
  const { message } = props;
  return <span className='text-[13px] text-red-400'>{message ?? 'Invalid input'}</span>;
};

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

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: Constants.CONTACT_FORM_DEFAULT_VALUES
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

    if (confirm(Constants.CONFIRM_MESSAGE)) {
      const { isSuccessful, status } = await submitForm(formData);
      alert(Constants.FORM_SUBMIT_MESSGAE[status]);
      setIsSubmitSuccessful(isSuccessful);
    }
  };

  return (
    <div className='w-full flex flex-col gap-4 overflow-hidden'>
      <h2>{Constants.HEADING}</h2>

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

        <Button label='Send' type='submit' wrapperClassName='w-full ss:w-5/6 ml-auto' />

        {isSubmitSuccessful && <p>{Constants.SENT_MESSAGE}</p>}
      </form>
    </div>
  );
};

export { Form };
