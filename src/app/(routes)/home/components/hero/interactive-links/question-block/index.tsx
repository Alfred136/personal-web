'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as Constants from './constants';
import { type QuestionBlockProps, QuestionBlockAnimation } from './types';
import './index.css';

/**
 * A clickable, animated link (questipon block)
 *
 * @component
 * @behaviours
 * * onMouseVisit: shows spinning animation and dialogue text.
 * * onMouseLeave: cancel spinning animation and dialogue text.
 * * onClick: shows bounce animation, coin bounce animation, and reveals block item (social link).
 */
const QuestionBlock = (props: QuestionBlockProps) => {
  const {
    blockItemImage,
    blockItemAlt,
    blockItemName,
    blockItemLink,
    showBlockItem,
    dropAnimationDuration,
    handleBlockClick,
    setDialogueText
  } = props;
  const [blockAnimation, setBlockAnimation] = useState(QuestionBlockAnimation.Drop);

  const isBlockAnimationIdle = () => blockAnimation === QuestionBlockAnimation.Idle;
  const isBlockAnimationDrop = () => blockAnimation === QuestionBlockAnimation.Drop;
  const isBlockAnimationSpin = () => blockAnimation === QuestionBlockAnimation.Spin;
  const isBlockAnimationBounce = () => blockAnimation === QuestionBlockAnimation.Bounce;

  const handleMouseEnter = () => {
    if (!isBlockAnimationIdle()) return;
    setBlockAnimation(QuestionBlockAnimation.Spin);
    setDialogueText(showBlockItem ? `Check out my ${blockItemName}!` : 'Click me!');
  };

  const handleMouseLeave = () => {
    if (isBlockAnimationIdle() || isBlockAnimationBounce()) return;
    setBlockAnimation(QuestionBlockAnimation.Idle);
    setDialogueText('');
  };

  const handleClick = () => {
    if (showBlockItem || isBlockAnimationDrop() || isBlockAnimationBounce()) return;
    setBlockAnimation(QuestionBlockAnimation.Bounce);
    setDialogueText(`${blockItemName}!`);
    handleBlockClick();
  };

  const handleBlockAnimationEnd = () => {
    setBlockAnimation(QuestionBlockAnimation.Idle);
  };

  return (
    <div
      className={'relative w-[80px] ss:w-[88px] md:w-[96px]'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={
          showBlockItem
            ? blockItemImage
            : isBlockAnimationSpin()
              ? Constants.QUESTION_BLOCK_IMAGE_SRC_GIF
              : Constants.QUESTION_BLOCK_IMAGE_SRC_PNG
        }
        alt={showBlockItem ? blockItemAlt : Constants.QUESTION_BLOCK_IMAGE_ALT}
        width={Constants.QUESTION_BLOCK_IMAGE_WIDTH}
        height={Constants.QUESTION_BLOCK_IMAGE_HEIGHT}
        priority={true}
        unoptimized={true}
        className={`relative z-10 w-auto h-auto cursor-pointer ease-in-out 
          ${Constants.QUESTION_BLOCK_ANIMATION_CLASSNAME[blockAnimation]}`}
        style={{
          animationDuration: `${isBlockAnimationDrop() ? dropAnimationDuration : 200}ms`
        }}
        onClick={handleClick}
        onAnimationEnd={handleBlockAnimationEnd}
      />

      <Image
        src={Constants.COIN_IMAGE_SRC}
        alt={Constants.COIN_IMAGE_ALT}
        width={Constants.COIN_IMAGE_WIDTH}
        height={Constants.COIN_IMAGE_HEIGHT}
        unoptimized={true}
        className={`absolute z-0 top-0 left-[50%] translate-x-[-50%] w-[48px] h-[48px] 
          ss:w-[56px] ss:h-[56px] md:w-[64px] md:h-[64px] duration-200 ease-out
          ${isBlockAnimationBounce() ? 'translate-y-[-200%]' : 'opacity-0 '}`}
      />

      {showBlockItem ? (
        <Link
          href={blockItemLink}
          target='_blank'
          className='absolute z-20 top-0 left-0 w-full h-full bg-transparent'
        />
      ) : null}
    </div>
  );
};

export { QuestionBlock };
