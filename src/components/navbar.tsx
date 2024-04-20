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
const COIN_ANIMATION_DURATION_MS = 300;
const COIN_BOUNCE_ANIMATION_DURATION_MS = 300;
const COIN_BOUNCE_START_POSITION_Y = -50;
const COIN_BOUNCE_END_POSITION_Y = 0;

const SCROLL_Y_THRESHOLD = 90;
const PROGRESS_BAR_SHOW_ANIMATION_DURATION_MS = 300;
const PROGRESS_BAR_MOVE_ANIMATION_DURATION_MS = 500;
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

interface ProgressBarProps {
  scrollProgress: number;
  isProgressBarVisible: boolean;
}

const CHARACTER_ANIMATION_SOURCE: Record<CharacterAnimation, StaticImageData> = {
  [CharacterAnimation.Idle]: marioIdle,
  [CharacterAnimation.LookLeft]: marioRunningLeft,
  [CharacterAnimation.LookRight]: marioRunningRight,
  [CharacterAnimation.RunningLeft]: marioRunningLeft,
  [CharacterAnimation.RunningRight]: marioRunningRight
};

const TABS: Array<TabItem> = [
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
      src={CHARACTER_ANIMATION_SOURCE[characterAnimation]}
      alt={CHARACTER_ALT}
      width={CHARACTER_WIDTH}
      height={CHARACTER_HEIGHT}
      unoptimized={true}
      className={`absolute left-0 bottom-[13px] ease-out`}
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
      src={coinSpinning}
      alt={COIN_ALT}
      width={COIN_WIDTH}
      height={COIN_HEIGHT}
      unoptimized={true}
      className={`ease-out ${activeCoinIndex !== tabIndex && 'opacity-0'}`}
      style={{
        transform: `${isCharacterStoppedOnCoin() ? `translateY(${coinPositionY}px)` : 'none'}`,
        transitionDuration: `${isCharacterStoppedOnCoin() ? `${COIN_BOUNCE_ANIMATION_DURATION_MS}ms` : `${COIN_ANIMATION_DURATION_MS}ms`}`
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
        pt-4 pb-3 pl-2 pr-1 text-[14px] text-night font-pixel xs:pr-4 xs:text-[16px]
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

/**
 * A progress bar in the bottom of the NavBar
 *
 * @component
 * visible after some scrolling
 */
const ProgressBar = (props: ProgressBarProps) => {
  const { scrollProgress, isProgressBarVisible } = props;
  return (
    <div
      className={'absolute left-0 bottom-[-1px] bg-evening ease-out'}
      style={{
        width: `${scrollProgress}%`,
        height: isProgressBarVisible ? '4px' : '0',
        transitionDuration: `${isProgressBarVisible ? `${PROGRESS_BAR_MOVE_ANIMATION_DURATION_MS}ms` : `${PROGRESS_BAR_SHOW_ANIMATION_DURATION_MS}ms`}`
      }}
    />
  );
};

export function NavBar() {
  const pathName = usePathname();
  const tabsRefs = useRef(
    Array.from({ length: TABS.length }, () => createRef<HTMLAnchorElement>())
  );
  const characterRef = useRef<HTMLImageElement>(null);
  const [isProgressBarVisible, setIsProgressBarVisible] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [characterPositionX, setCharacterPositionX] = useState(0);
  const [characterAnimation, setCharacterAnimation] = useState(CharacterAnimation.Idle);
  const [characterAnimationDuration, setCharacterAnimationDuartion] = useState(0);
  const [activeCoinIndex, setActiveCoinIndex] = useState(-1);
  const [coinPositionY, setCoinPositionY] = useState(0);
  const [coinAnimationTimeout, setCoinAnimationTimeout] = useState<NodeJS.Timeout | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableDistance = documentHeight - windowHeight;
      const currentScrollPercentage = (scrollY / scrollableDistance) * 100;
      setScrollProgress(currentScrollPercentage);
      setIsProgressBarVisible(window.scrollY >= SCROLL_Y_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // when url changes, update active tab, character position and coin appearance
  useEffect(() => {
    const tabIndex = TABS.findIndex((tab) => tab.link === pathName);
    if (tabIndex === activeTabIndex || tabIndex === -1) return;
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
    <div id='navbar' className={'fixed top-0 z-50 w-full h-14 bg-afternoon'}>
      <div id='navbar-content' className='max-w-[1100px] w-full m-auto px-[calc(8px+2vw)]'>
        <div id='navbar-tabs' className='relative flex items-center'>
          {TABS.map((item, index) => (
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
      <ProgressBar scrollProgress={scrollProgress} isProgressBarVisible={isProgressBarVisible} />
    </div>
  );
}
