import '@/app/(routes)/home/styles.css';
import { AnimatedGreeting } from './animated-greeting';
import { Introduction } from './introduction';
import { InteractiveLinks } from './interactive-links';
import { BackgroundImage } from './background-image';

export const Hero = () => {
  return (
    <>
      <div
        id='home-hero-content'
        className='absolute z-10 top-60 left-[50%] translate-x-[-50%] 
        max-w-[800px] w-full px-[calc(8px+2vw)] 
        flex flex-col gap-6 items-center text-center'
      >
        <AnimatedGreeting />
        <Introduction />
        <InteractiveLinks />
      </div>
      <BackgroundImage />
    </>
  );
};
