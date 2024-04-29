import { StaticImageData } from 'next/image';
import { ImageHeight, ImageWidth } from '@/shared/types';
import { MarioAnimation, type NavTab } from './types';
import {
  coinSpinningGif,
  marioIdleGif,
  marioRunningLeftGif,
  marioRunningRightGif
} from '#/images/mario';

// image
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

const COIN_IMAGE_SRC: StaticImageData = coinSpinningGif;
const COIN_IMAGE_ALT: string = 'gold coin';
const COIN_IMAGE_WIDTH: ImageWidth = 20;
const COIN_IMAGE_HEIGHT: ImageHeight = 20;
const COIN_ANIMATION_DURATION_MS: number = 300;
const COIN_BOUNCE_ANIMATION_DURATION_MS: number = 300;
const COIN_BOUNCE_UP_POSITION_Y: number = -50;
const COIN_BOUNCE_DOWN_POSITION_Y: number = 0;

// progress bar
const SCROLL_Y_THRESHOLD: number = 50;
const PROGRESS_BAR_SHOW_ANIMATION_DURATION_MS: number = 300;
const PROGRESS_BAR_MOVE_ANIMATION_DURATION_MS: number = 500;

const ERROR_MESSAGE_TABS_NOT_FOUND: string = '💣 Error: tabs not found.';
const TABS: NavTab[] = [
  {
    id: 'home',
    label: 'Home',
    link: '/'
  },
  {
    id: 'about',
    label: 'About',
    link: '/about'
  },
  {
    id: 'projects',
    label: 'Projects',
    link: '/projects'
  },
  {
    id: 'contact',
    label: 'Contact',
    link: '/contact'
  }
];

export {
  MARIO_IMAGE_SRC,
  MARIO_IMAGE_ALT,
  MARIO_IMAGE_WIDTH,
  MARIO_IMAGE_HEIGHT,
  MARIO_ANIMATION_DURATION_MULTIPLIER,
  COIN_IMAGE_SRC,
  COIN_IMAGE_ALT,
  COIN_IMAGE_WIDTH,
  COIN_IMAGE_HEIGHT,
  COIN_ANIMATION_DURATION_MS,
  COIN_BOUNCE_ANIMATION_DURATION_MS,
  COIN_BOUNCE_UP_POSITION_Y,
  COIN_BOUNCE_DOWN_POSITION_Y,
  SCROLL_Y_THRESHOLD,
  PROGRESS_BAR_SHOW_ANIMATION_DURATION_MS,
  PROGRESS_BAR_MOVE_ANIMATION_DURATION_MS,
  ERROR_MESSAGE_TABS_NOT_FOUND,
  TABS
};
