'use client';

import { useEffect, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { coinSpinningGif, questionBlockGif, questionBlockPng } from '#/images/mario';
import Link from 'next/link';

// global constants
const COIN_IMAGE_WIDTH = 64;
const COIN_IMAGE_HEIGHT = 64;
const COIN_IMAGE_ALT = 'gold coin';

const QUESTION_BLOCK_IMAGE_WIDTH = 128;
const QUESTION_BLOCK_IMAGE_HEIGHT = 128;
const QUESTION_BLOCK_IMAGE_ALT = 'pixel-art question block';

const QUESTION_BLOCK_DROP_START_POSITION_Y = 600;
const QUESTION_BLOCK_DROP_END_POSITION_Y = 0;
const QUESTION_BLOCK_DROP_ANIMATION_DURATION_MS = 1000;
const QUESTION_BLOCK_BOUNCE_START_POSITION_Y = -10;
const QUESTION_BLOCK_BOUNCE_END_POSITION_Y = 0;
const QUESTION_BLOCK_BOUNCE_ANIMATION_DURATION_MS = 100;

interface QuestionBlockProps {
  blockItemImage: StaticImageData;
  blockItemAlt: string;
  blockItemName: string;
  blockItemLink: string;
  showBlockItem: boolean;
  dropAnimationDelay: number;
  handleBlockClick: () => void;
  setDialogueText: (text: string) => void;
}

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
export const QuestionBlock = (props: QuestionBlockProps) => {
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
    setBlockPositionY(QUESTION_BLOCK_BOUNCE_START_POSITION_Y);
    setDialogueText(`${blockItemName}!`);
    handleBlockClick();
  };

  const handleBlockTransitionEnd = () => {
    setBlockPositionY(QUESTION_BLOCK_BOUNCE_END_POSITION_Y);
    // reset animation duration after one-time drop animation is complete.
    if (
      !showDropAnimation &&
      blockAnimationDuration !== QUESTION_BLOCK_BOUNCE_ANIMATION_DURATION_MS
    ) {
      setBlockAnimationDuration(QUESTION_BLOCK_BOUNCE_ANIMATION_DURATION_MS);
    }
  };

  const handleCoinTransitionEnd = () => {
    setShowCoin(false);
  };

  // if website is loaded for the first time, change the initial position and animation settings of the blocks.
  useEffect(() => {
    if (!localStorage.getItem('isWebsiteFirstLoad')) {
      setBlockAnimationDuration(0);
      setBlockPositionY(QUESTION_BLOCK_DROP_START_POSITION_Y);
      setShowDropAnimation(true);
    } else {
      setShowBlock(true);
    }
  }, []);

  // called after 1st useEffect, wait for delay then start the one-time drop animation.
  useEffect(() => {
    if (showDropAnimation) {
      setTimeout(() => {
        setBlockAnimationDuration(QUESTION_BLOCK_DROP_ANIMATION_DURATION_MS);
        setBlockPositionY(QUESTION_BLOCK_DROP_END_POSITION_Y);
        setShowDropAnimation(false);
      }, dropAnimationDelay);
    }
  }, [showDropAnimation, dropAnimationDelay]);

  return (
    <div
      className={'relative w-[80px] ss:w-[88px] md:w-[96px]'}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <Image
        src={
          showBlockItem
            ? blockItemImage
            : showSpinningAnimation
              ? questionBlockGif
              : questionBlockPng
        }
        alt={showBlockItem ? blockItemAlt : QUESTION_BLOCK_IMAGE_ALT}
        width={QUESTION_BLOCK_IMAGE_WIDTH}
        height={QUESTION_BLOCK_IMAGE_HEIGHT}
        priority={true}
        unoptimized={true}
        className={`relative z-10 w-auto h-auto cursor-pointer ease-in-out ${showBlock ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: `translateY(${blockPositionY}px)`,
          transitionDuration: `${blockAnimationDuration}ms`
        }}
        onClick={() => handleClick()}
        onTransitionEnd={() => handleBlockTransitionEnd()}
      />

      <Image
        src={coinSpinningGif}
        alt={COIN_IMAGE_ALT}
        width={COIN_IMAGE_WIDTH}
        height={COIN_IMAGE_HEIGHT}
        unoptimized={true}
        className={`absolute z-0 top-0 left-[50%] translate-x-[-50%] w-[48px] h-[48px] ss:w-[56px] ss:h-[56px] md:w-[64px] md:h-[64px] 
          duration-200 ease-out ${showCoin ? 'translate-y-[-200%]' : 'opacity-0 '}`}
        onTransitionEnd={() => handleCoinTransitionEnd()}
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
