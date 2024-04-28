'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as Constants from './constants';
import type { QuestionBlockProps } from './types';

/**
 * A clickable, animated link (questipon block)
 *
 * @component
 * @behaviours
 * * websiteFirstLoad: shows one-time drop animation.
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
    dropAnimationDelay,
    handleBlockClick,
    setDialogueText
  } = props;

  const [showCoin, setShowCoin] = useState(false);
  const [showBlock, setShowBlock] = useState(false);
  const [showDropAnimation, setShowDropAnimation] = useState(false); // one-time animation on first page load
  const [showSpinningAnimation, setShowSpinningAnimation] = useState(false);
  const [blockAnimationDuration, setBlockAnimationDuration] = useState(100);
  const [blockPositionY, setBlockPositionY] = useState(0);

  const handleMouseEnter = () => {
    setShowSpinningAnimation(true);
    setDialogueText(showBlockItem ? `Check out my ${blockItemName}!` : 'Click me!');
  };

  const handleMouseLeave = () => {
    setShowSpinningAnimation(false);
    setDialogueText('');
  };

  const handleClick = () => {
    if (showBlockItem) return;
    setShowCoin(true);
    setBlockPositionY(Constants.QUESTION_BLOCK_BOUNCE_START_POSITION_Y);
    setDialogueText(`${blockItemName}!`);
    handleBlockClick();
  };

  const handleBlockTransitionEnd = () => {
    setBlockPositionY(Constants.QUESTION_BLOCK_BOUNCE_END_POSITION_Y);
    // reset animation duration after one-time drop animation is complete.
    if (
      !showDropAnimation &&
      blockAnimationDuration !== Constants.QUESTION_BLOCK_BOUNCE_ANIMATION_DURATION_MS
    ) {
      setBlockAnimationDuration(Constants.QUESTION_BLOCK_BOUNCE_ANIMATION_DURATION_MS);
    }
  };

  const handleCoinTransitionEnd = () => {
    setShowCoin(false);
  };

  // if website is loaded for the first time, change the initial position and animation settings of the blocks.
  useEffect(() => {
    if (!localStorage.getItem('isWebsiteFirstLoad')) {
      setBlockAnimationDuration(0);
      setBlockPositionY(Constants.QUESTION_BLOCK_DROP_START_POSITION_Y);
      setShowDropAnimation(true);
    } else {
      setShowBlock(true);
    }
  }, []);

  // called after 1st useEffect, wait for delay then start the one-time drop animation.
  useEffect(() => {
    if (showDropAnimation) {
      setTimeout(() => {
        setBlockAnimationDuration(Constants.QUESTION_BLOCK_DROP_ANIMATION_DURATION_MS);
        setBlockPositionY(Constants.QUESTION_BLOCK_DROP_END_POSITION_Y);
        setShowDropAnimation(false);
      }, dropAnimationDelay);
    }
  }, [showDropAnimation, dropAnimationDelay]);

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
            : showSpinningAnimation
              ? Constants.QUESTION_BLOCK_IMAGE_SRC_GIF
              : Constants.QUESTION_BLOCK_IMAGE_SRC_PNG
        }
        alt={showBlockItem ? blockItemAlt : Constants.QUESTION_BLOCK_IMAGE_ALT}
        width={Constants.QUESTION_BLOCK_IMAGE_WIDTH}
        height={Constants.QUESTION_BLOCK_IMAGE_HEIGHT}
        priority={true}
        unoptimized={true}
        className={`relative z-10 w-auto h-auto cursor-pointer ease-in-out ${showBlock ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: `translateY(${blockPositionY}px)`,
          transitionDuration: `${blockAnimationDuration}ms`
        }}
        onClick={handleClick}
        onTransitionEnd={handleBlockTransitionEnd}
      />

      <Image
        src={Constants.COIN_IMAGE_SRC}
        alt={Constants.COIN_IMAGE_ALT}
        width={Constants.COIN_IMAGE_WIDTH}
        height={Constants.COIN_IMAGE_HEIGHT}
        unoptimized={true}
        className={`absolute z-0 top-0 left-[50%] translate-x-[-50%] w-[48px] h-[48px] ss:w-[56px] ss:h-[56px] md:w-[64px] md:h-[64px] 
          duration-200 ease-out ${showCoin ? 'translate-y-[-200%]' : 'opacity-0 '}`}
        onTransitionEnd={handleCoinTransitionEnd}
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
