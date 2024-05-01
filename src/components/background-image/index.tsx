import Image from 'next/image';
import * as Constants from './constant';

const BackgroundImage = () => {
  return (
    <Image
      src={Constants.BACKGROUND_IMAGE_SRC}
      alt={Constants.BACKGROUND_IMAGE_ALT}
      width={Constants.BACKGROUND_IMAGE_WIDTH}
      height={Constants.BACKGROUND_IMAGE_HEIGHT}
      className='absolute top-0 z-[0] w-full h-full object-cover object-right-bottom brightness-[0.1] opacity-70'
    />
  );
};

export { BackgroundImage };
