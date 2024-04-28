import { StaticImageData } from 'next/image';
import { ImageHeight, ImageWidth } from '@/shared/types';
import { CharacterAnimation, type NavTab } from './types';
import {
  coinSpinningGif,
  marioIdleGif,
  marioRunningLeftGif,
  marioRunningRightGif
} from '#/images/mario';

// image
const CHARACTER_ANIMATION_SOURCE: Record<CharacterAnimation, StaticImageData> = {
  [CharacterAnimation.Idle]: marioIdleGif,
  [CharacterAnimation.LookLeft]: marioRunningLeftGif,
  [CharacterAnimation.LookRight]: marioRunningRightGif,
  [CharacterAnimation.RunningLeft]: marioRunningLeftGif,
  [CharacterAnimation.RunningRight]: marioRunningRightGif
};
const CHARACTER_IMAGE_ALT: string = 'mario';
const CHARACTER_IMAGE_WIDTH: ImageWidth = 24;
const CHARACTER_IMAGE_HEIGHT: ImageHeight = 24;
const CHARACTER_ANIMATION_DURATION_MULTIPLIER: number = 7;

const COIN_IMAGE_SRC: StaticImageData = coinSpinningGif;
const COIN_IMAGE_ALT: string = 'gold coin';
const COIN_IMAGE_WIDTH: ImageWidth = 20;
const COIN_IMAGE_HEIGHT: ImageHeight = 20;
const COIN_ANIMATION_DURATION_MS: number = 300;
const COIN_BOUNCE_ANIMATION_DURATION_MS: number = 300;
const COIN_BOUNCE_START_POSITION_Y: number = -50;
const COIN_BOUNCE_END_POSITION_Y: number = 0;

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
  CHARACTER_ANIMATION_SOURCE,
  CHARACTER_IMAGE_ALT,
  CHARACTER_IMAGE_WIDTH,
  CHARACTER_IMAGE_HEIGHT,
  CHARACTER_ANIMATION_DURATION_MULTIPLIER,
  COIN_IMAGE_SRC,
  COIN_IMAGE_ALT,
  COIN_IMAGE_WIDTH,
  COIN_IMAGE_HEIGHT,
  COIN_ANIMATION_DURATION_MS,
  COIN_BOUNCE_ANIMATION_DURATION_MS,
  COIN_BOUNCE_START_POSITION_Y,
  COIN_BOUNCE_END_POSITION_Y,
  SCROLL_Y_THRESHOLD,
  PROGRESS_BAR_SHOW_ANIMATION_DURATION_MS,
  PROGRESS_BAR_MOVE_ANIMATION_DURATION_MS,
  ERROR_MESSAGE_TABS_NOT_FOUND,
  TABS
};
