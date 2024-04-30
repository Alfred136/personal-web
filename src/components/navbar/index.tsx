'use client';

import { useScrollProgress } from '@/hooks';
import { AnimatedNavTabs } from './animated-nav-tabs';
import { ProgressBar } from './progress-bar';

const NavBar = () => {
  const { scrollProgress, showProgressBar } = useScrollProgress(false);

  return (
    <nav id='navbar' className={'fixed top-0 z-50 w-full h-[50px]'}>
      {/* navbar background */}
      <div
        className={`absolute left-0 top-0 z-20 w-full h-full bg-midnight brightness-[0.8]
          ${showProgressBar ? 'opacity-90' : 'opacity-60'}`}
      />
      {/* navbar content */}
      <div className='relative z-30 max-w-[1100px] w-full m-auto px-1 xs:px-[calc(8px+2vw)]'>
        <AnimatedNavTabs />
      </div>

      <ProgressBar scrollProgress={scrollProgress} showProgressBar={showProgressBar} />
    </nav>
  );
};

export { NavBar };
