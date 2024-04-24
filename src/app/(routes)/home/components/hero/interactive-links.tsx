import { useState } from 'react';
import {
  questionBlockResumePng,
  questionBlockGithubPng,
  questionBlockLinkedinPng
} from '#/images/mario';
import { QuestionBlock } from './question-block';

// global constants
const QUESTION_BLOCK_RESUME_IMAGE_ALT = 'pixel-art question block resume';
const QUESTION_BLOCK_GITHUB_IMAGE_ALT = 'pixel-art question block github';
const QUESTION_BLOCK_LINKEDIN_IMAGE_ALT = 'pixel-art question block linkedin';

const QUESTION_BLOCK_1_DROP_ANIMATION_DELAY_MS = 1600;
const QUESTION_BLOCK_2_DROP_ANIMATION_DELAY_MS = 1800;
const QUESTION_BLOCK_3_DROP_ANIMATION_DELAY_MS = 2000;

export const InteractiveLinks = () => {
  const [showBlock1Item, setShowBlock1Item] = useState(false);
  const [showBlock2Item, setShowBlock2Item] = useState(false);
  const [showBlock3Item, setShowBlock3Item] = useState(false);
  const [block2HitCounter, setBlock2HitCounter] = useState(0);
  const [dialogueText, setDialogueText] = useState('');

  const handleBlock1Click = () => {
    if (!showBlock1Item) {
      setShowBlock1Item(true);
    }
  };

  const handleBlock2Click = () => {
    if (showBlock2Item) return;

    if (block2HitCounter === 0) {
      setDialogueText("What's inside?");
    } else if (block2HitCounter === 1) {
      setDialogueText('One more time!');
    } else if (block2HitCounter === 2) {
      setShowBlock2Item(true);
    }
    setBlock2HitCounter((prev) => prev + 1);
  };

  const handleBlock3Click = () => {
    if (!showBlock3Item) {
      setShowBlock3Item(true);
    }
  };

  return (
    <div id='home-hero-interactive-links' className='pt-10 flex flex-col gap-10'>
      <div className='flex gap-10 md:gap-14'>
        <QuestionBlock
          blockItemName='Github'
          blockItemLink='https://github.com/Alfred136'
          blockItemImage={questionBlockGithubPng}
          blockItemAlt={QUESTION_BLOCK_GITHUB_IMAGE_ALT}
          showBlockItem={showBlock1Item}
          dropAnimationDelay={QUESTION_BLOCK_1_DROP_ANIMATION_DELAY_MS}
          handleBlockClick={handleBlock1Click}
          setDialogueText={setDialogueText}
        />
        <QuestionBlock
          blockItemName='Resume'
          blockItemLink='/resumes/resume.pdf'
          blockItemImage={questionBlockResumePng}
          blockItemAlt={QUESTION_BLOCK_RESUME_IMAGE_ALT}
          showBlockItem={showBlock2Item}
          dropAnimationDelay={QUESTION_BLOCK_2_DROP_ANIMATION_DELAY_MS}
          handleBlockClick={handleBlock2Click}
          setDialogueText={setDialogueText}
        />
        <QuestionBlock
          blockItemName='LinkedIn'
          blockItemLink='https://www.linkedin.com/in/alfred-tse'
          blockItemImage={questionBlockLinkedinPng}
          blockItemAlt={QUESTION_BLOCK_LINKEDIN_IMAGE_ALT}
          showBlockItem={showBlock3Item}
          dropAnimationDelay={QUESTION_BLOCK_3_DROP_ANIMATION_DELAY_MS}
          handleBlockClick={handleBlock3Click}
          setDialogueText={setDialogueText}
        />
      </div>
      <span className='font-subheading text-[24px] text-afternoon'>{dialogueText}</span>
    </div>
  );
};
