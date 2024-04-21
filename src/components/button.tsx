import Link from 'next/link';

type Target = '_self' | '_blank' | '_parent' | '_top';

interface ButtonProps {
  title: string;
  link: string;
  target?: Target;
  className?: string;
}

export function Button(props: ButtonProps) {
  const { title, link, target, className } = props;

  return (
    <Link
      href={link}
      target={target ?? '_blank'}
      className={`relative min-w-full xs:min-w-[100px] ${className ?? ''}`}
    >
      <button
        className='relative z-20 w-full py-1 bg-sunset text-center text-morning
       hover:bg-evening hover:translate-x-[-2px] hover:translate-y-[2px]
        xs:px-2 ss:px-4 ss:py-2'
      >
        {title}
      </button>
      <div className='absolute left-[-4px] bottom-[-4px] z-10 w-full h-full bg-night' />
    </Link>
  );
}
