import { StaticImageData } from 'next/image';
import { ImageHeight, ImageWidth } from '@/shared/types';
import { coinSpinningGif } from '#/images/mario';

const COIN_IMAGE_SRC: StaticImageData = coinSpinningGif;
const COIN_IMAGE_ALT: string = 'pixel-art gold coin';
const COIN_IMAGE_WIDTH: ImageWidth = 20;
const COIN_IMAGE_HEIGHT: ImageHeight = 20;
const COIN_ANIMATION_DURATION_MS: number = 300;
const COIN_BOUNCE_ANIMATION_DURATION_MS: number = 300;
const COIN_BOUNCE_UP_POSITION_Y: number = -50;
const COIN_BOUNCE_DOWN_POSITION_Y: number = 0;

export {
  COIN_IMAGE_SRC,
  COIN_IMAGE_ALT,
  COIN_IMAGE_WIDTH,
  COIN_IMAGE_HEIGHT,
  COIN_ANIMATION_DURATION_MS,
  COIN_BOUNCE_ANIMATION_DURATION_MS,
  COIN_BOUNCE_UP_POSITION_Y,
  COIN_BOUNCE_DOWN_POSITION_Y
};
