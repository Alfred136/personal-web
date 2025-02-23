import Image from 'next/image';
import * as Constants from './constants';

const AnimatedBackground = () => {
  return (
    <Image
      src={Constants.HERO_BACKGROUND_IMAGE_SRC}
      alt={Constants.HERO_BACKGROUND_IMAGE_ALT}
      width={Constants.HERO_BACKGROUND_IMAGE_WIDTH}
      height={Constants.HERO_BACKGROUND_IMAGE_HEIGHT}
      priority={true}
      unoptimized={true}
      className='absolute top-0 left-0 z-[0] w-full h-full 
        object-cover object-bottom brightness-[0.35] opacity-80'
    />
  );
};

export { AnimatedBackground };
