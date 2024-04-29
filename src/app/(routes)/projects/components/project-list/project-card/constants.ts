import { ImageHeight, ImageWidth } from '@/shared/types';
import { pointingFingerDownGif } from '#/images/common';

const HEADING: string = 'All Projects';
const PROJECT_CARD_IMAGE_WIDTH: ImageWidth = 1920;
const PROJECT_CARD_IMAGE_HEIGHT: ImageHeight = 1080;
const PROJECT_CARD_BUTTON_LABEL_DEMO: string = 'Live Demo';
const PROJECT_CARD_BUTTON_LABEL_CODE: string = 'View Code';

const FINGER_IMAGE_SRC = pointingFingerDownGif;
const FINGER_IMAGE_ALT: string = 'pixel-art pointing finger';
const FINGER_IMAGE_WIDTH: ImageWidth = 40;
const FINGER_IMAGE_HEIGHT: ImageHeight = 35;

export {
  HEADING,
  FINGER_IMAGE_SRC,
  FINGER_IMAGE_ALT,
  FINGER_IMAGE_WIDTH,
  FINGER_IMAGE_HEIGHT,
  PROJECT_CARD_IMAGE_WIDTH,
  PROJECT_CARD_IMAGE_HEIGHT,
  PROJECT_CARD_BUTTON_LABEL_DEMO,
  PROJECT_CARD_BUTTON_LABEL_CODE
};
