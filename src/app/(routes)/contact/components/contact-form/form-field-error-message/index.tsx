import type { FormFieldErrorMessageProps } from '@/app/(routes)/contact/components/contact-form/types';

const FormFieldErrorMessage = (props: FormFieldErrorMessageProps) => {
  const { message } = props;
  return <span className='text-[13px] text-red-400'>{message ?? 'Invalid input'}</span>;
};

export { FormFieldErrorMessage };
