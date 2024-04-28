'use client';

import React, { useState, useEffect, useRef, createRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import * as Constants from './constant';
import {
  CharacterAnimation,
  type NavTabProps,
  type CoinProps,
  type CharacterProps,
  type ProgressBarProps
} from './types';

/**
 * An animated character (mario)
 *
 * @component
 * @behaviours
 * * onTabHover: shows running animation.
 * * onTabClick: runs to the target tab.
 */
const Character = (props: CharacterProps) => {
  const {
    showCharacter,
    characterRef,
    characterAnimation,
    characterAnimationDuration,
    characterPositionX,
    handleCharacterTransitionEnd
  } = props;
  return (
    <Image
      ref={characterRef}
      src={Constants.CHARACTER_ANIMATION_SOURCE[characterAnimation]}
      alt={Constants.CHARACTER_IMAGE_ALT}
      width={Constants.CHARACTER_IMAGE_WIDTH}
      height={Constants.CHARACTER_IMAGE_HEIGHT}
      priority={true}
      unoptimized={true}
      className={`absolute left-1 ease-out ${!showCharacter ? 'hidden' : ''}`}
      style={{
        transform: `translateX(${characterPositionX}px)`,
        transitionDuration: `${characterAnimation === CharacterAnimation.Idle ? '0ms' : `${characterAnimationDuration}ms`}`
      }}
      onTransitionEnd={() => handleCharacterTransitionEnd()}
    />
  );
};

/**
 * An animated tool (gold coin)
 *
 * @component
 * @behaviours
 * * onTabVisit: appears and stays on the tab. (only one coin can be active at a time)
 * * onTabClick: when the character arrives the target tab, it bounces and dispears.
 */
const Coin = (props: CoinProps) => {
  const {
    activeCoinIndex,
    activeTabIndex,
    tabIndex,
    coinPositionY,
    characterAnimation,
    handleCoinTransitionEnd
  } = props;

  const isCharacterStoppedOnCoin = () =>
    activeCoinIndex === activeTabIndex &&
    activeCoinIndex === tabIndex &&
    characterAnimation === CharacterAnimation.Idle;

  return (
    <Image
      src={Constants.COIN_IMAGE_SRC}
      alt={Constants.COIN_IMAGE_ALT}
      width={Constants.COIN_IMAGE_WIDTH}
      height={Constants.COIN_IMAGE_HEIGHT}
      unoptimized={true}
      className={`ease-out ${activeCoinIndex !== tabIndex ? 'opacity-0' : ''}`}
      style={{
        transform: `${isCharacterStoppedOnCoin() ? `translateY(${coinPositionY}px)` : 'none'}`,
        transitionDuration: `${isCharacterStoppedOnCoin() ? `${Constants.COIN_BOUNCE_ANIMATION_DURATION_MS}ms` : `${Constants.COIN_ANIMATION_DURATION_MS}ms`}`
      }}
      onTransitionEnd={handleCoinTransitionEnd}
    />
  );
};

/**
 * A tab item in the navbar
 *
 * @component
 * @features
 * * handleTabClick: handle pages navigation and character moving logics.
 * * handleMouseEnter: handle coins and character states and animation effects.
 * * handleMouseLeave: handle coins and character states and animation effects.
 */
const Tab = (props: NavTabProps) => {
  const {
    tab,
    index,
    tabsRefs,
    isActive,
    handleTabClick,
    handleMouseEnter,
    handleMouseLeave,
    children
  } = props;
  return (
    <Link
      ref={tabsRefs.current[index]}
      href={tab.link}
      className={`relative flex items-center pt-4 pb-2 pl-2 pr-1
        font-subheading text-[18px] ${isActive ? 'text-afternoon' : 'text-morning'} 
        xs:pr-4 hover:text-afternoon`}
      onClick={() => handleTabClick(index)}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
    >
      {children}
      {tab.label}
    </Link>
  );
};

/**
 * A progress bar in the bottom of the NavBar
 *
 * @component
 * visible after some scrolling
 */
const ProgressBar = (props: ProgressBarProps) => {
  const { scrollProgress, showProgressBar } = props;
  return (
    <div
      className={'absolute z-40 left-0 bottom-[-1px] bg-evening ease-out'}
      style={{
        width: `${scrollProgress}%`,
        height: showProgressBar ? '2px' : '0',
        transitionDuration: `${showProgressBar ? `${Constants.PROGRESS_BAR_MOVE_ANIMATION_DURATION_MS}ms` : `${Constants.PROGRESS_BAR_SHOW_ANIMATION_DURATION_MS}ms`}`
      }}
    />
  );
};

const NavBar = () => {
  const pathName = usePathname();
  const tabsRefs = useRef(
    Array.from({ length: Constants.TABS.length }, () => createRef<HTMLAnchorElement>())
  );
  const characterRef = useRef<HTMLImageElement>(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [showCharacter, setShowCharacter] = useState(false);
  const [characterPositionX, setCharacterPositionX] = useState(0);
  const [characterAnimation, setCharacterAnimation] = useState(CharacterAnimation.Idle);
  const [characterAnimationDuration, setCharacterAnimationDuartion] = useState(0);
  const [activeCoinIndex, setActiveCoinIndex] = useState(-1);
  const [coinPositionY, setCoinPositionY] = useState(0);
  const [coinAnimationTimeout, setCoinAnimationTimeout] = useState<NodeJS.Timeout | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableDistance = documentHeight - windowHeight;
      const currentScrollPercentage = (scrollY / scrollableDistance) * 100;
      setScrollProgress(currentScrollPercentage);
      setShowProgressBar(window.scrollY >= Constants.SCROLL_Y_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // when url changes, update active tab, character position and coin appearance
  useEffect(() => {
    const tabIndex = Constants.TABS.findIndex((tab) => tab.link === pathName);
    if (tabIndex === -1) {
      return;
    }
    // handle cases of url changes with browser, update active tab and character position while hidding character animation
    if (activeTabIndex === 0 && !showCharacter) {
      handleTabChange(tabIndex, false);
      setShowCharacter(true);
      return;
    }
    setShowCharacter(true);
    setActiveCoinIndex(tabIndex);
    handleTabChange(tabIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  const handleTabChange = (index: number, showAnimation: boolean = true) => {
    if (index !== activeTabIndex) {
      const firstTabElement = tabsRefs.current[0].current;
      const targetTabElement = tabsRefs.current[index].current;
      const activeTabElement = tabsRefs.current[activeTabIndex].current;

      if (!firstTabElement || !targetTabElement || !activeTabElement) {
        console.log(Constants.ERROR_MESSAGE_TABS_NOT_FOUND);
        return;
      }

      const newCharacterPositionX = targetTabElement.offsetLeft - firstTabElement.offsetLeft;
      const xPositionDifference = targetTabElement.offsetLeft - activeTabElement.offsetLeft;
      const distance = Math.abs(xPositionDifference);
      const newCharacterAnimationDuration =
        distance * Constants.CHARACTER_ANIMATION_DURATION_MULTIPLIER;

      setActiveTabIndex(index);
      setCharacterPositionX(newCharacterPositionX);

      if (showAnimation) {
        setCharacterAnimationDuartion(newCharacterAnimationDuration);
        setCharacterAnimation(
          xPositionDifference > 0 ? CharacterAnimation.RunningRight : CharacterAnimation.RunningLeft
        );
      }
    }
  };

  const handleMouseEnter = (index: number) => {
    if (isCharacterRunning() || index === activeTabIndex) {
      return;
    }
    setCharacterAnimation(
      index < activeTabIndex ? CharacterAnimation.LookLeft : CharacterAnimation.LookRight
    );

    if (coinAnimationTimeout) {
      clearTimeout(coinAnimationTimeout);
      setCoinAnimationTimeout(null);
    }
    setActiveCoinIndex(index);
  };

  const handleMouseLeave = (index: number) => {
    if (isCharacterRunning()) {
      return;
    }
    setCharacterAnimation(CharacterAnimation.Idle);
  };

  const handleCharacterTransitionEnd = () => {
    setCharacterAnimation(CharacterAnimation.Idle);
    if (activeCoinIndex === activeTabIndex) {
      setCoinPositionY(Constants.COIN_BOUNCE_START_POSITION_Y);
    }
  };

  const handleCoinTransitionEnd = () => {
    if (
      activeCoinIndex === activeTabIndex &&
      coinPositionY !== Constants.COIN_BOUNCE_END_POSITION_Y &&
      characterAnimation === CharacterAnimation.Idle
    ) {
      setActiveCoinIndex(-1);
      setCoinPositionY(Constants.COIN_BOUNCE_END_POSITION_Y);
    }
  };

  const isCharacterRunning = () =>
    characterAnimation === CharacterAnimation.RunningLeft ||
    characterAnimation === CharacterAnimation.RunningRight;

  return (
    <div id='navbar' className={'fixed top-0 z-50 w-full h-[50px]'}>
      <div
        className={`absolute left-0 top-0 z-20 w-full h-full bg-midnight ${showProgressBar ? 'opacity-90' : 'opacity-80'}`}
      />
      <div className='relative z-30 max-w-[1100px] w-full m-auto px-1 xs:px-[calc(8px+2vw)]'>
        <div className='relative flex items-center'>
          {Constants.TABS.map((tab, index) => (
            <Tab
              key={`tab-${tab.id}`}
              tab={tab}
              index={index}
              tabsRefs={tabsRefs}
              isActive={activeTabIndex === index && showCharacter}
              handleTabClick={handleTabChange}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            >
              <Coin
                tabIndex={index}
                activeCoinIndex={activeCoinIndex}
                activeTabIndex={activeTabIndex}
                coinPositionY={coinPositionY}
                characterAnimation={characterAnimation}
                handleCoinTransitionEnd={handleCoinTransitionEnd}
              />
            </Tab>
          ))}
          <Character
            showCharacter={showCharacter}
            characterRef={characterRef}
            characterAnimation={characterAnimation}
            characterPositionX={characterPositionX}
            characterAnimationDuration={characterAnimationDuration}
            handleCharacterTransitionEnd={handleCharacterTransitionEnd}
          />
        </div>
        {/* NOTE: Add a platform? (glass ground) */}
      </div>
      <ProgressBar scrollProgress={scrollProgress} showProgressBar={showProgressBar} />
    </div>
  );
};

export { NavBar };
