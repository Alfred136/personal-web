import type { IntroPointForm } from './types';

const TAG_NAME: string = 'intro';
const INTRO_SLOGAN: string = 'Boring long text ❌ | Short point forms ✅';
const INTRO_POINT_FORMS: IntroPointForm[] = [
  {
    id: 'intro-degree',
    emoji: '🎓',
    statement: ' I got a CS degree',
    question: 'where?',
    answer: 'City University of Hong Kong'
  },
  {
    id: 'intro-laptop',
    emoji: '💻',
    statement: ' I use a macbook',
    question: 'which?',
    answer: 'air M1'
  },
  {
    id: 'intro-exp',
    emoji: '💼',
    statement: ' I have 2 years of dev exp',
    question: 'short?',
    answer: 'right, nowadays minimun 5+ yrs'
  },
  {
    id: 'intro-dev',
    emoji: '👨🏻‍💻',
    statement: ' I love web/mobile dev',
    question: 'and?',
    answer: 'game dev sounds exciting too'
  },
  {
    id: 'intro-workout',
    emoji: '🏋🏻',
    statement: ' I workout',
    question: 'a lot?',
    answer: '3 times a week'
  },
  {
    id: 'intro-book',
    emoji: '📚',
    statement: ' I read books',
    question: 'favourite?',
    answer: 'Rich Dad Poor Dad'
  },
  { id: 'intro-job', emoji: '👀', statement: ' I want a job', question: 'huh?', answer: '😭' }
];

export { TAG_NAME, INTRO_SLOGAN, INTRO_POINT_FORMS };
