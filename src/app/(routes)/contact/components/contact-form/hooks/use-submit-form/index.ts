import { useEffect, useState } from 'react';
import type { UseFormReset } from 'react-hook-form';
import * as Constants from '@/app/(routes)/contact/components/contact-form/constants';
import type { ContactFormSchema } from '@/app/(routes)/contact/components/contact-form/types';
import { submitForm } from '@/app/(routes)/contact/components/contact-form/submit';

const useSubmitForm = (reset: UseFormReset<ContactFormSchema>) => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      confirm('Leave?');
    });
  }, []);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(Constants.CONTACT_FORM_DEFAULT_VALUES);
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data: ContactFormSchema) => {
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

  return { onSubmit, isSubmitSuccessful };
};

export { useSubmitForm };
