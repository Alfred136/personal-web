'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components';
import * as Constants from './constants';
import type { ContactFormSchema } from './types';
import { contactFormSchema } from './schema';
import { FormFieldContainer } from './form-field-container';
import { FormFieldErrorMessage } from './form-field-error-message';
import { FormFieldInput } from './form-field-input';
import { FormFieldTextArea } from './form-field-textarea';
import { useFormSubmit } from './use-form-submit';
import { useEffect } from 'react';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: Constants.CONTACT_FORM_DEFAULT_VALUES
  });
  const { onSubmit, isSubmitSuccessful } = useFormSubmit(reset);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      confirm('Changes you made may not be saved.');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className='w-full flex flex-col gap-4 overflow-hidden'>
      <h2>{Constants.HEADING}</h2>

      <form className='w-full px-1 pb-4 flex flex-col gap-10' onSubmit={handleSubmit(onSubmit)}>
        <FormFieldContainer labelName='Name'>
          <FormFieldInput type='text' name='name' register={register} />
          {errors.name && <FormFieldErrorMessage message={errors.name?.message} />}
        </FormFieldContainer>
        <FormFieldContainer labelName='Email'>
          <FormFieldInput type='text' name='email' register={register} />
          {errors.email && <FormFieldErrorMessage message={errors.email?.message} />}
        </FormFieldContainer>
        <FormFieldContainer labelName='Message'>
          <FormFieldTextArea name='message' register={register} />
          {errors.message && <FormFieldErrorMessage message={errors.message?.message} />}
        </FormFieldContainer>

        <Button label='Send' type='submit' wrapperClassName='w-full ss:w-5/6 ml-auto' />

        {isSubmitSuccessful && <p>{Constants.SENT_MESSAGE}</p>}
      </form>
    </div>
  );
};

export { ContactForm };
