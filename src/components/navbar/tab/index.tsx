import Link from 'next/link';
import type { NavTabProps } from '@/components/navbar/types';

const Tab = (props: NavTabProps) => {
  const {
    tab,
    index,
    tabsRefs,
    isActive,
    handleTabClick,
    handleMouseEnter,
    handleMouseLeave,
    children
  } = props;
  return (
    <Link
      ref={tabsRefs.current[index]}
      href={tab.link}
      className={`relative pt-4 pb-2 pl-2 pr-1 flex items-center 
        font-subheading text-[18px] ${isActive ? 'text-afternoon' : 'text-morning'} 
        xs:pr-4 hover:text-afternoon`}
      onClick={() => handleTabClick(index)}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
    >
      {children}
      {tab.label}
    </Link>
  );
};

export { Tab };
