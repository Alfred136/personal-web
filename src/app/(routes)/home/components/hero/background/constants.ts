import { StaticImageData } from 'next/image';
import { ImageHeight, ImageWidth } from '@/shared/types';
import { backgroundChillMarioGif } from '#/images/backgrounds';

const HERO_BACKGROUND_IMAGE_SRC: StaticImageData = backgroundChillMarioGif;
const HERO_BACKGROUND_IMAGE_ALT: string = 'pixel-art chill mario backround gif';
const HERO_BACKGROUND_IMAGE_WIDTH: ImageWidth = 1920;
const HERO_BACKGROUND_IMAGE_HEIGHT: ImageHeight = 1080;

export {
  HERO_BACKGROUND_IMAGE_SRC,
  HERO_BACKGROUND_IMAGE_ALT,
  HERO_BACKGROUND_IMAGE_WIDTH,
  HERO_BACKGROUND_IMAGE_HEIGHT
};
