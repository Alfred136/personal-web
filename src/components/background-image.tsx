import Image from 'next/image';
import { backgroundChillMarioJpeg } from '#/images/background';

const BACKGROUND_IMAGE_ALT = 'chill mario background';
const BACKGROUND_IMAGE_WIDTH = 1920;
const BACKGROUND_IMAGE_HEIGHT = 1080;

export const BackgroundImage = () => {
  return (
    <Image
      src={backgroundChillMarioJpeg}
      alt={BACKGROUND_IMAGE_ALT}
      width={BACKGROUND_IMAGE_WIDTH}
      height={BACKGROUND_IMAGE_HEIGHT}
      className='absolute top-0 z-[0] h-full object-cover object-right-bottom opacity-[0.07]'
    />
  );
};
