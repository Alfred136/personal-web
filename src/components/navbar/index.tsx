'use client';

import React, { useState, useEffect, useRef, createRef } from 'react';
import { usePathname } from 'next/navigation';
import * as Constants from './constants';
import { MarioAnimation } from './types';
import { useScrollProgress } from './hooks';
import { ProgressBar } from './progress-bar';
import { Mario } from './mario';
import { Coin } from './coin';
import { Tab } from './tab';

/**
 * An animated nabvar
 *
 * @components
 * * Tabs - (4)
 * * Mario - (1)
 * * Coins - (1 per Tab)
 * * Progress bar - (1)
 * ----------------------------------------
 * @behaviours
 * * onTabMouseEnter
 *   - (Mario) - shows running animation.
 *   - (Coin) - appears and stays on the tab. (only one coin can be active at a time).
 * * onTabMouseLeave
 *   - (Mario) - shows idle animation.
 * * onTabClick: runs to the target tab.
 *   - (Mario) - runs to the target tab.
 *   - (Mario) - when Mario arrives, shows idle animation.
 *   - (Coin) - when Mario arrives, bounces and dispears.
 *
 */
const NavBar = () => {
  const pathName = usePathname();
  const tabsRefs = useRef(
    Array.from({ length: Constants.TABS.length }, () => createRef<HTMLAnchorElement>())
  );
  const marioRef = useRef<HTMLImageElement>(null);
  const [showMario, setShowMario] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeCoinIndex, setActiveCoinIndex] = useState(-1);
  const [marioPositionX, setMarioPositionX] = useState(0);
  const [marioAnimation, setMarioAnimation] = useState(MarioAnimation.Idle);
  const [marioAnimationDuration, setMarioAnimationDuartion] = useState(0);
  const [coinPositionY, setCoinPositionY] = useState(0);
  const { scrollProgress, showProgressBar } = useScrollProgress(false);

  // when url changes, update active tab, mario position and coin appearance
  useEffect(() => {
    const tabIndex = Constants.TABS.findIndex((tab) => tab.link === pathName);
    if (tabIndex === -1) {
      return;
    }
    // when url changes via browser, update active tab and mario position while hiding mario animation
    if (activeTabIndex === 0 && !showMario) {
      handleTabChange(tabIndex, false);
      setShowMario(true);
      return;
    }
    setShowMario(true);
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

      const newMarioPositionX = targetTabElement.offsetLeft - firstTabElement.offsetLeft;
      const xPositionDifference = targetTabElement.offsetLeft - activeTabElement.offsetLeft;
      const distance = Math.abs(xPositionDifference);
      const newMarioAnimationDuration = distance * Constants.MARIO_ANIMATION_DURATION_MULTIPLIER;

      setActiveTabIndex(index);
      setMarioPositionX(newMarioPositionX);

      if (showAnimation) {
        setMarioAnimationDuartion(newMarioAnimationDuration);
        setMarioAnimation(
          xPositionDifference > 0 ? MarioAnimation.RunningRight : MarioAnimation.RunningLeft
        );
      }
    }
  };

  const handleTabMouseEnter = (index: number) => {
    if (isMarioRunning() || index === activeTabIndex) {
      return;
    }
    setMarioAnimation(index < activeTabIndex ? MarioAnimation.LookLeft : MarioAnimation.LookRight);
    setActiveCoinIndex(index);
  };

  const handleTabMouseLeave = (index: number) => {
    if (isMarioRunning()) {
      return;
    }
    setMarioAnimation(MarioAnimation.Idle);
  };

  const handleMarioTransitionEnd = () => {
    setMarioAnimation(MarioAnimation.Idle);
    if (activeCoinIndex === activeTabIndex) {
      setCoinPositionY(Constants.COIN_BOUNCE_UP_POSITION_Y);
    }
  };

  const handleCoinTransitionEnd = () => {
    if (isCoinBounceEnded()) {
      setActiveCoinIndex(-1);
      setCoinPositionY(Constants.COIN_BOUNCE_DOWN_POSITION_Y);
    }
  };

  const isMarioRunning = () =>
    marioAnimation === MarioAnimation.RunningLeft || marioAnimation === MarioAnimation.RunningRight;

  const isMarioStoppedOnCoin = (tabIndex: number) =>
    activeCoinIndex === activeTabIndex &&
    activeCoinIndex === tabIndex &&
    marioAnimation === MarioAnimation.Idle;

  const isCoinBounceEnded = () =>
    activeCoinIndex === activeTabIndex &&
    coinPositionY !== Constants.COIN_BOUNCE_DOWN_POSITION_Y &&
    marioAnimation === MarioAnimation.Idle;

  const isCoinShown = (tabIndex: number) => activeCoinIndex === tabIndex;

  return (
    <nav id='navbar' className={'fixed top-0 z-50 w-full h-[50px]'}>
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
              isActive={activeTabIndex === index && showMario}
              handleTabClick={handleTabChange}
              handleMouseEnter={handleTabMouseEnter}
              handleMouseLeave={handleTabMouseLeave}
            >
              <Coin
                showCoin={isCoinShown(index)}
                showCoinBounce={isMarioStoppedOnCoin(index)}
                coinPositionY={coinPositionY}
                handleCoinTransitionEnd={handleCoinTransitionEnd}
              />
            </Tab>
          ))}
          <Mario
            showMario={showMario}
            marioRef={marioRef}
            marioAnimation={marioAnimation}
            marioPositionX={marioPositionX}
            marioAnimationDuration={marioAnimationDuration}
            handleMarioTransitionEnd={handleMarioTransitionEnd}
          />
        </div>
      </div>
      <ProgressBar scrollProgress={scrollProgress} showProgressBar={showProgressBar} />
    </nav>
  );
};

export { NavBar };
