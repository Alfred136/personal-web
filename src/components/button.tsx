import Link from 'next/link';

type Target = '_self' | '_blank' | '_parent' | '_top';

interface ButtonProps {
  title: string;
  link: string;
  target?: Target;
}

export function Button(props: ButtonProps) {
  const { title, link, target } = props;

  return (
    <Link href={link} target={target ?? '_self'} className='relative'>
      <button
        className='relative z-20 min-w-[100px] px-4 py-2 bg-sunset text-center
       hover:bg-evening hover:translate-x-[-2px] hover:translate-y-[2px]'
      >
        {title}
      </button>
      <div className='absolute left-[-4px] bottom-[-4px] z-10 w-full h-full bg-night' />
    </Link>
  );
}
