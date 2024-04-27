import Link from 'next/link';

type LinkTarget = '_self' | '_blank' | '_parent' | '_top';
type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  title: string;
  link?: string;
  type?: ButtonType;
  target?: LinkTarget;
  wrapperClassName?: string;
  handleClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const {
    title,
    link,
    type = 'button',
    target = '_blank',
    wrapperClassName = '',
    handleClick = () => {}
  } = props;

  return (
    <div className={`relative min-w-full xs:min-w-[100px] ${wrapperClassName}`}>
      {/* button content */}
      <button
        className='relative z-30 w-full py-1 bg-sunset 
          font-subheading text-center text-[16px] text-morning
        hover:bg-evening hover:translate-x-[-2px] hover:translate-y-[2px]
          xs:px-2 ss:px-4 ss:py-2'
        type={type}
        onClick={() => handleClick()}
      >
        {link ? (
          <Link href={link} target={target} className='absolute z-40 top-0 left-0 w-full h-full' />
        ) : null}
        {title}
      </button>

      {/* button background */}
      <div className='absolute left-[-4px] bottom-[-4px] z-20 w-full h-full bg-night' />
    </div>
  );
};
