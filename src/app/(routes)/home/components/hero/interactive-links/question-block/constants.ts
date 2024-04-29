import { StaticImageData } from 'next/image';
import { ImageHeight, ImageWidth } from '@/shared/types';
import { QuestionBlockAnimation } from './types';
import { coinSpinningGif, questionBlockGif, questionBlockPng } from '#/images/mario';

// image
const COIN_IMAGE_SRC: StaticImageData = coinSpinningGif;
const COIN_IMAGE_ALT: string = 'gold coin';
const COIN_IMAGE_WIDTH: ImageWidth = 64;
const COIN_IMAGE_HEIGHT: ImageHeight = 64;

const QUESTION_BLOCK_IMAGE_SRC_GIF: StaticImageData = questionBlockGif;
const QUESTION_BLOCK_IMAGE_SRC_PNG: StaticImageData = questionBlockPng;
const QUESTION_BLOCK_IMAGE_ALT: string = 'pixel-art question block';
const QUESTION_BLOCK_IMAGE_WIDTH: ImageWidth = 128;
const QUESTION_BLOCK_IMAGE_HEIGHT: ImageHeight = 128;

// animation
const QUESTION_BLOCK_ANIMATION_CLASSNAME: Record<QuestionBlockAnimation, string> = {
  [QuestionBlockAnimation.Idle]: '',
  [QuestionBlockAnimation.Drop]: 'question-block-drop',
  [QuestionBlockAnimation.Bounce]: 'question-block-bounce',
  [QuestionBlockAnimation.Spin]: ''
};

export {
  COIN_IMAGE_SRC,
  COIN_IMAGE_ALT,
  COIN_IMAGE_WIDTH,
  COIN_IMAGE_HEIGHT,
  QUESTION_BLOCK_IMAGE_SRC_GIF,
  QUESTION_BLOCK_IMAGE_SRC_PNG,
  QUESTION_BLOCK_IMAGE_ALT,
  QUESTION_BLOCK_IMAGE_WIDTH,
  QUESTION_BLOCK_IMAGE_HEIGHT,
  QUESTION_BLOCK_ANIMATION_CLASSNAME
};
