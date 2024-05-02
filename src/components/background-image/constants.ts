import { StaticImageData } from 'next/image';
import { ImageHeight, ImageWidth } from '@/shared/types';
import { backgroundChillMarioJpeg } from '#/images/backgrounds';

const BACKGROUND_IMAGE_SRC: StaticImageData = backgroundChillMarioJpeg;
const BACKGROUND_IMAGE_ALT: string = 'chill mario background';
const BACKGROUND_IMAGE_WIDTH: ImageWidth = 1920;
const BACKGROUND_IMAGE_HEIGHT: ImageHeight = 1080;

export {
  BACKGROUND_IMAGE_SRC,
  BACKGROUND_IMAGE_ALT,
  BACKGROUND_IMAGE_WIDTH,
  BACKGROUND_IMAGE_HEIGHT
};
