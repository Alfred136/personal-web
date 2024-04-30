import type { FieldValues } from 'react-hook-form';
import type { FormFieldTextAreaProps } from './types';

const FormFieldTextArea = <T extends FieldValues>(props: FormFieldTextAreaProps<T>) => {
  const { register, name } = props;
  return (
    <textarea
      {...register(name)}
      className='w-full h-[300px] py-2 px-1 bg-night border-[1px] border-sunset rounded-lg'
    />
  );
};

export { FormFieldTextArea };
