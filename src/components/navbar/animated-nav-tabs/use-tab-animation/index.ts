import { useState, useEffect, useRef, createRef } from 'react';
import { usePathname } from 'next/navigation';
import * as Constants from '@/components/navbar/animated-nav-tabs/constants';
import { MarioAnimation } from '@/components/navbar/animated-nav-tabs/types';

const useTabAnimation = () => {
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

  // when url changes, update states
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

  // event handlers
  const handleTabChange = (index: number, showAnimation: boolean = true) => {
    if (index !== activeTabIndex) {
      const firstTabElement = tabsRefs.current[0].current;
      const targetTabElement = tabsRefs.current[index].current;
      const activeTabElement = tabsRefs.current[activeTabIndex].current;

      if (!firstTabElement || !targetTabElement || !activeTabElement) {
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

  // helper functions
  const isMarioIdle = () => marioAnimation === MarioAnimation.Idle;

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

  const isTabActive = (tabIndex: number) => activeTabIndex === tabIndex && showMario;

  return {
    marioRef,
    marioPositionX,
    marioAnimation,
    marioAnimationDuration,
    coinPositionY,
    showMario,
    activeTabIndex,
    activeCoinIndex,
    tabsRefs,
    handleTabChange,
    handleTabMouseEnter,
    handleTabMouseLeave,
    handleMarioTransitionEnd,
    handleCoinTransitionEnd,
    isMarioIdle,
    isMarioRunning,
    isMarioStoppedOnCoin,
    isCoinBounceEnded,
    isCoinShown,
    isTabActive
  };
};

export { useTabAnimation };
