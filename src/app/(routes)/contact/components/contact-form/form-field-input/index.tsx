import type { FieldValues } from 'react-hook-form';
import type { FormFieldInputProps } from '@/app/(routes)/contact/components/contact-form/types';

const FormFieldInput = <T extends FieldValues>(props: FormFieldInputProps<T>) => {
  const { register, name, type } = props;
  return (
    <input
      type={type}
      {...register(name)}
      className='w-full py-2 px-1 bg-night border-[1px] border-sunset rounded-lg'
    />
  );
};

export { FormFieldInput };
