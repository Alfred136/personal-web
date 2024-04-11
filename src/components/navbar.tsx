'use client';

import React, { useState, useEffect, useRef, createRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import marioFront from '/public/mario_front.png';
import marioIdle from '/public/mario_idle.gif';
import marioRunningLeft from '/public/mario_running_left.gif';
import marioRunningRight from '/public/mario_running_right.gif';
import coinSpinning from '/public/coin_spinning.gif';

// global constants
const CHARACTER_ALT = 'mario';
const CHARACTER_WIDTH = 28;
const CHARACTER_HEIGHT = 28;
const CHARACTER_ANIMATION_DURATION_MULTIPLIER = 7;

const COIN_ALT = 'gold coin';
const COIN_WIDTH = 20;
const COIN_HEIGHT = 20;
const COIN_ANIMATION_DURATION = 300;
const COIN_BOUNCE_ANIMATION_DURATION = 300;
const COIN_BOUNCE_START_POSITION_Y = -50;
const COIN_BOUNCE_END_POSITION_Y = 0;

const SCROLL_Y_THRESHOLD = 90;
const PROGRESS_BAR_ANIMATION_DURATION = 300;
const ERROR_MESSAGE_TABS_NOT_FOUND = '💣 Error: tabs not found.';

enum CharacterAnimation {
  Idle,
  LookLeft,
  LookRight,
  RunningLeft,
  RunningRight
}

interface TabItem {
  id: string;
  label: string;
  link: string;
}

interface TabItemProps {
  item: TabItem;
  index: number;
  tabsRefs: React.MutableRefObject<Array<React.RefObject<HTMLAnchorElement>>>;
  handleTabClick: (index: number) => void;
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: (index: number) => void;
  children?: React.ReactNode;
}

interface CoinProps {
  tabIndex: number;
  activeTabIndex: number;
  activeCoinIndex: number;
  coinPositionY: number;
  characterAnimation: CharacterAnimation;
  handleCoinTransitionEnd: () => void;
}

interface CharacterProps {
  characterRef: React.RefObject<HTMLImageElement>;
  characterAnimation: CharacterAnimation;
  characterAnimationDuration: number;
  characterPositionX: number;
  handleCharacterTransitionEnd: () => void;
}

const characterAnimationSource: Record<CharacterAnimation, StaticImageData> = {
  [CharacterAnimation.Idle]: marioIdle,
  [CharacterAnimation.LookLeft]: marioRunningLeft,
  [CharacterAnimation.LookRight]: marioRunningRight,
  [CharacterAnimation.RunningLeft]: marioRunningLeft,
  [CharacterAnimation.RunningRight]: marioRunningRight
};

const tabs: Array<TabItem> = [
  {
    id: 'home',
    label: 'Home',
    link: '/home'
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
    characterRef,
    characterAnimation,
    characterAnimationDuration,
    characterPositionX,
    handleCharacterTransitionEnd
  } = props;
  return (
    <Image
      ref={characterRef}
      src={characterAnimationSource[characterAnimation]}
      alt={CHARACTER_ALT}
      width={CHARACTER_WIDTH}
      height={CHARACTER_HEIGHT}
      unoptimized={true}
      className={`absolute left-0 bottom-0 ease-out`}
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
  // && coinPositionY !== COIN_BOUNCE_END_POSITION_Y;

  return (
    <Image
      src={coinSpinning}
      alt={COIN_ALT}
      width={COIN_WIDTH}
      height={COIN_HEIGHT}
      className={`ease-out 
        ${activeCoinIndex !== tabIndex && 'opacity-0'} 
        ${isCharacterStoppedOnCoin() ? `duration-${COIN_BOUNCE_ANIMATION_DURATION}` : `duration-${COIN_ANIMATION_DURATION}`}`}
      style={{
        transform: `${isCharacterStoppedOnCoin() ? `translateY(${coinPositionY}px)` : 'none'}`
      }}
      onTransitionEnd={() => handleCoinTransitionEnd()}
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
const TabItem = (props: TabItemProps) => {
  const { item, index, tabsRefs, handleTabClick, handleMouseEnter, handleMouseLeave, children } =
    props;
  return (
    <Link
      ref={tabsRefs.current[index]}
      key={`tab-${item.id}`}
      href={item.link}
      className={`relative flex items-center 
        pl-2 pr-1 text-[14px] text-night font-pixel xs:pr-4 xs:text-[16px]
        hover:text-midnight`}
      onClick={() => handleTabClick(index)}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
    >
      {children}
      {item.label}
    </Link>
  );
};

export function Navbar() {
  const pathName = usePathname();
  const tabsRefs = useRef(
    Array.from({ length: tabs.length }, () => createRef<HTMLAnchorElement>())
  );
  const characterRef = useRef<HTMLImageElement>(null);
  const [isShowingShadow, setIsShowingShadow] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [characterPositionX, setCharacterPositionX] = useState(0);
  const [characterAnimation, setCharacterAnimation] = useState(CharacterAnimation.Idle);
  const [characterAnimationDuration, setCharacterAnimationDuartion] = useState(0);
  const [activeCoinIndex, setActiveCoinIndex] = useState(-1);
  const [coinPositionY, setCoinPositionY] = useState(0);
  const [coinAnimationTimeout, setCoinAnimationTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleShadow = () => setIsShowingShadow(window.scrollY >= SCROLL_Y_THRESHOLD);
    window.addEventListener('scroll', handleShadow);
  }, []);

  useEffect(() => {
    // set active tab, character position and coin appearance based on url changes
    const tabIndex = tabs.findIndex((tab) => tab.link === pathName);
    if (tabIndex === activeTabIndex) return;
    setActiveCoinIndex(tabIndex);
    handleTabChange(tabIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  const handleTabChange = (index: number) => {
    if (index !== activeTabIndex) {
      const firstTabElement = tabsRefs.current[0].current;
      const targetTabElement = tabsRefs.current[index].current;
      const activeTabElement = tabsRefs.current[activeTabIndex].current;

      if (!firstTabElement || !targetTabElement || !activeTabElement) {
        console.log(ERROR_MESSAGE_TABS_NOT_FOUND);
        return;
      }

      const newCharacterPositionX = targetTabElement.offsetLeft - firstTabElement.offsetLeft;
      const xPositionDifference = targetTabElement.offsetLeft - activeTabElement.offsetLeft;
      const distance = Math.abs(xPositionDifference);
      const newCharacterAnimationDuration = distance * CHARACTER_ANIMATION_DURATION_MULTIPLIER;

      setActiveTabIndex(index);
      setCharacterPositionX(newCharacterPositionX);
      setCharacterAnimationDuartion(newCharacterAnimationDuration);
      setCharacterAnimation(
        xPositionDifference > 0 ? CharacterAnimation.RunningRight : CharacterAnimation.RunningLeft
      );
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
      setCoinPositionY(COIN_BOUNCE_START_POSITION_Y);
    }
  };

  const handleCoinTransitionEnd = () => {
    if (
      activeCoinIndex === activeTabIndex &&
      coinPositionY !== COIN_BOUNCE_END_POSITION_Y &&
      characterAnimation === CharacterAnimation.Idle
    ) {
      setActiveCoinIndex(-1);
      setCoinPositionY(COIN_BOUNCE_END_POSITION_Y);
    }
  };

  const isCharacterRunning = () =>
    characterAnimation === CharacterAnimation.RunningLeft ||
    characterAnimation === CharacterAnimation.RunningRight;

  return (
    <div id='navbar' className={'fixed top-0 z-50 w-full bg-afternoon'}>
      <div id='navbar-content' className='max-w-[1100px] w-full m-auto py-4 px-6 xs:px-10'>
        <div id='navbar-tabs' className='relative flex items-center'>
          {tabs.map((item, index) => (
            <TabItem
              key={item.id}
              item={item}
              index={index}
              tabsRefs={tabsRefs}
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
            </TabItem>
          ))}
          <Character
            characterRef={characterRef}
            characterAnimation={characterAnimation}
            characterPositionX={characterPositionX}
            characterAnimationDuration={characterAnimationDuration}
            handleCharacterTransitionEnd={handleCharacterTransitionEnd}
          />
        </div>
        {/* NOTE: Add a platform? (glass ground) */}
      </div>
      {/* TODO: Implement a progress bar */}
      <div
        className={`w-full bg-evening ease-in-out duration-${PROGRESS_BAR_ANIMATION_DURATION} 
          ${isShowingShadow ? 'h-1' : 'h-0'}`}
      />
    </div>
  );
}
