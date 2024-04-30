import { StaticImageData } from 'next/image';
import { ImageHeight, ImageWidth } from '@/shared/types';
import { MarioAnimation } from '../types';
import { marioIdleGif, marioRunningLeftGif, marioRunningRightGif } from '#/images/mario';

const MARIO_IMAGE_SRC: Record<MarioAnimation, StaticImageData> = {
  [MarioAnimation.Idle]: marioIdleGif,
  [MarioAnimation.LookLeft]: marioRunningLeftGif,
  [MarioAnimation.LookRight]: marioRunningRightGif,
  [MarioAnimation.RunningLeft]: marioRunningLeftGif,
  [MarioAnimation.RunningRight]: marioRunningRightGif
};
const MARIO_IMAGE_ALT: string = 'mario';
const MARIO_IMAGE_WIDTH: ImageWidth = 24;
const MARIO_IMAGE_HEIGHT: ImageHeight = 24;
const MARIO_ANIMATION_DURATION_MULTIPLIER: number = 7;

export {
  MARIO_IMAGE_SRC,
  MARIO_IMAGE_ALT,
  MARIO_IMAGE_WIDTH,
  MARIO_IMAGE_HEIGHT,
  MARIO_ANIMATION_DURATION_MULTIPLIER
};
