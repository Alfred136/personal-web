import { StaticImageData } from 'next/image';
import { ImageHeight, ImageWidth } from '@/shared/types';
import { handPng } from '#/images/common';

const GREETING_TEXT_1: string = 'Hi, I am ';
const GREETING_TEXT_2: string = 'Alfred ';

const TYPEWRITER_CURSOR: string = '_';
const TYPEWRITER_TYPING_DELAY_MS: number = 100;
const TYPEWRITER_TYPING_PAUSE_MS: number = 0;

const HAND_IMAGE_SRC: StaticImageData = handPng;
const HAND_IMAGE_ALT: string = 'pixel-art hand';
const HAND_IMAGE_WIDTH: ImageWidth = 64;
const HAND_IMAGE_HEIGHT: ImageHeight = 64;

export {
  GREETING_TEXT_1,
  GREETING_TEXT_2,
  TYPEWRITER_CURSOR,
  TYPEWRITER_TYPING_DELAY_MS,
  TYPEWRITER_TYPING_PAUSE_MS,
  HAND_IMAGE_SRC,
  HAND_IMAGE_ALT,
  HAND_IMAGE_WIDTH,
  HAND_IMAGE_HEIGHT
};
