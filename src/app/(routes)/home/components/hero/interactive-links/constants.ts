import { StaticImageData } from 'next/image';
import {
  questionBlockResumePng,
  questionBlockGithubPng,
  questionBlockLinkedinPng
} from '#/images/mario';

const GITHUB_NAME: string = 'GitHub';
const GITHUB_LINK: string = 'https://github.com/Alfred136';
const GITHUB_IMAGE_SRC: StaticImageData = questionBlockGithubPng;
const GITHUB_IMAGE_ALT: string = 'pixel-art question block github';

const RESUME_NAME: string = 'Resume';
const RESUME_LINK: string = '/resumes/resume.pdf';
const RESUME_IMAGE_SRC: StaticImageData = questionBlockResumePng;
const RESUME_IMAGE_ALT: string = 'pixel-art question block resume';

const LINKEDIN_NAME: string = 'LinkedIn';
const LINKEDIN_LINK: string = 'https://www.linkedin.com/in/alfred-tse';
const LINKEDIN_IMAGE_SRC: StaticImageData = questionBlockLinkedinPng;
const LINKEDIN_IMAGE_ALT: string = 'pixel-art question block linkedin';

const BLOCK_1_DROP_ANIMATION_DELAY_MS: number = 1600;
const BLOCK_2_DROP_ANIMATION_DELAY_MS: number = 1800;
const BLOCK_3_DROP_ANIMATION_DELAY_MS: number = 2000;

export {
  GITHUB_NAME,
  GITHUB_LINK,
  GITHUB_IMAGE_SRC,
  GITHUB_IMAGE_ALT,
  RESUME_NAME,
  RESUME_LINK,
  RESUME_IMAGE_SRC,
  RESUME_IMAGE_ALT,
  LINKEDIN_NAME,
  LINKEDIN_LINK,
  LINKEDIN_IMAGE_SRC,
  LINKEDIN_IMAGE_ALT,
  BLOCK_1_DROP_ANIMATION_DELAY_MS,
  BLOCK_2_DROP_ANIMATION_DELAY_MS,
  BLOCK_3_DROP_ANIMATION_DELAY_MS
};
