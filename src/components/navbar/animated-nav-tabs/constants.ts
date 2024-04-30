import type { NavTab } from './types';
const MARIO_ANIMATION_DURATION_MULTIPLIER: number = 7;

const COIN_BOUNCE_ANIMATION_DURATION_MS: number = 300;
const COIN_BOUNCE_UP_POSITION_Y: number = -50;
const COIN_BOUNCE_DOWN_POSITION_Y: number = 0;

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
  MARIO_ANIMATION_DURATION_MULTIPLIER,
  COIN_BOUNCE_ANIMATION_DURATION_MS,
  COIN_BOUNCE_UP_POSITION_Y,
  COIN_BOUNCE_DOWN_POSITION_Y,
  TABS
};
