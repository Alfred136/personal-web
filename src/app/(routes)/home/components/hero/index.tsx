import { AnimatedBackground } from './animated-background';
import { AnimatedGreeting } from './animated-greeting';
import { Headline } from './headline';
import { InteractiveLinks } from './interactive-links';

const Hero = () => {
  return (
    <>
      <div
        className='absolute z-10 top-60 left-[50%] translate-x-[-50%] 
          max-w-[800px] w-full px-[calc(8px+2vw)] 
          flex flex-col gap-6 items-center text-center'
      >
        <AnimatedGreeting />
        <Headline />
        <InteractiveLinks />
      </div>
      <AnimatedBackground />
    </>
  );
};

export { Hero };
