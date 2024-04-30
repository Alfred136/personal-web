import type { FormFieldContainerProps } from './types';

const FormFieldContainer = (props: FormFieldContainerProps) => {
  const { labelName, children } = props;
  return (
    <div className='w-full flex flex-col ss:flex-row'>
      <label className='w-full ss:w-1/6 text-[16px]'>{labelName}</label>
      <div className='w-full ss:w-5/6 text-[16px]'>{children}</div>
    </div>
  );
};

export { FormFieldContainer };
