import Link from 'next/link';
import type { ButtonProps } from './types';
import { assignDefault } from '@/shared/utils';

const Button = (props: ButtonProps) => {
  const {
    label,
    link,
    type = assignDefault(props.type, 'button'),
    target = assignDefault(props.target, '_blank'),
    wrapperClassName = assignDefault(props.wrapperClassName, ''),
    handleClick = assignDefault(props.handleClick, () => {})
  } = props;

  return (
    <div className={`relative min-w-full xs:min-w-[100px] ${wrapperClassName}`}>
      <button
        className='relative z-30 w-full py-1 bg-sunset 
          font-subheading text-center text-[16px] text-morning
        hover:bg-evening hover:translate-x-[-2px] hover:translate-y-[2px]
          xs:px-2 ss:px-4 ss:py-2'
        type={type}
        onClick={handleClick}
      >
        {link ? (
          <Link href={link} target={target} className='absolute z-40 top-0 left-0 w-full h-full' />
        ) : null}
        {label}
      </button>

      {/* button background shadow */}
      <div className='absolute left-[-4px] bottom-[-4px] z-20 w-full h-full bg-night' />
    </div>
  );
};

export { Button };
