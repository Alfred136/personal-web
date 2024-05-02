import { useEffect, useState } from 'react';
import type { UseFormReset } from 'react-hook-form';
import type { ContactFormSchema } from '@/app/(routes)/contact/components/contact-form/types';
import * as Constants from '@/app/(routes)/contact/components/contact-form/constants';

const useFormSubmit = (reset: UseFormReset<ContactFormSchema>) => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(Constants.CONTACT_FORM_DEFAULT_VALUES);
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data: ContactFormSchema) => {
    try {
      if (confirm(Constants.CONFIRM_MESSAGE)) {
        const response = await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (response.status === 200) {
          alert(Constants.CONTACT_FORM_SUBMIT_MESSAGE[200]);
          setIsSubmitSuccessful(true);
        } else {
          alert(Constants.CONTACT_FORM_SUBMIT_MESSAGE[response.status]);
          setIsSubmitSuccessful(false);
        }
      }
    } catch (error) {
      alert((error as Error).message);
      setIsSubmitSuccessful(false);
    }
  };

  return { onSubmit, isSubmitSuccessful };
};

export { useFormSubmit };
