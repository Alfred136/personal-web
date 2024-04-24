import Image from 'next/image';
import { backgroundChillMarioGif } from '#/images/background';

const HERO_IMAGE_ALT = 'pixel-art chill mario backround gif';
const HERO_IMAGE_WIDTH = 1920;
const HERO_IMAGE_HEIGHT = 1080;

export const BackgroundImage = () => {
  return (
    <Image
      src={backgroundChillMarioGif}
      alt={HERO_IMAGE_ALT}
      width={HERO_IMAGE_WIDTH}
      height={HERO_IMAGE_HEIGHT}
      unoptimized={true}
      className='absolute top-0 left-0 z-[0] w-full h-full 
        object-cover object-bottom brightness-50 opacity-50'
    />
  );
};
