'use client';

import { useState } from 'react';
import { QuestionBlock } from './question-block';
import * as Constants from './constants';

const InteractiveLinks = () => {
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
      setDialogueText('One more time!');
    } else if (block2HitCounter === 1) {
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
    <div className='pt-10 flex flex-col gap-20'>
      <div className='flex gap-10 md:gap-14'>
        <QuestionBlock
          blockItemName={Constants.GITHUB_NAME}
          blockItemLink={Constants.GITHUB_LINK}
          blockItemImage={Constants.GITHUB_IMAGE_SRC}
          blockItemAlt={Constants.GITHUB_IMAGE_ALT}
          showBlockItem={showBlock1Item}
          dropAnimationDuration={Constants.BLOCK_1_DROP_ANIMATION_DURATION_MS}
          handleBlockClick={handleBlock1Click}
          setDialogueText={setDialogueText}
        />
        <QuestionBlock
          blockItemName={Constants.RESUME_NAME}
          blockItemLink={Constants.RESUME_LINK}
          blockItemImage={Constants.RESUME_IMAGE_SRC}
          blockItemAlt={Constants.RESUME_IMAGE_ALT}
          showBlockItem={showBlock2Item}
          dropAnimationDuration={Constants.BLOCK_2_DROP_ANIMATION_DURATION_MS}
          handleBlockClick={handleBlock2Click}
          setDialogueText={setDialogueText}
        />
        <QuestionBlock
          blockItemName={Constants.LINKEDIN_NAME}
          blockItemLink={Constants.LINKEDIN_LINK}
          blockItemImage={Constants.LINKEDIN_IMAGE_SRC}
          blockItemAlt={Constants.LINKEDIN_IMAGE_ALT}
          showBlockItem={showBlock3Item}
          dropAnimationDuration={Constants.BLOCK_3_DROP_ANIMATION_DURATION_MS}
          handleBlockClick={handleBlock3Click}
          setDialogueText={setDialogueText}
        />
      </div>
      <span className='font-subheading text-[32px] text-afternoon'>{dialogueText}</span>
    </div>
  );
};

export { InteractiveLinks };
