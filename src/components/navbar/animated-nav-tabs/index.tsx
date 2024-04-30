'use client';

import * as Constants from './constants';
import { Mario } from './mario';
import { Coin } from './coin';
import { Tab } from './tab';
import { useTabAnimation } from './use-tab-animation';

/**
 * An animated tabs area
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
const AnimatedNavTabs = () => {
  const {
    tabsRefs,
    marioRef,
    marioPositionX,
    marioAnimation,
    marioAnimationDuration,
    coinPositionY,
    showMario,
    handleTabChange,
    handleTabMouseEnter,
    handleTabMouseLeave,
    handleMarioTransitionEnd,
    handleCoinTransitionEnd,
    isMarioStoppedOnCoin,
    isMarioIdle,
    isCoinShown,
    isTabActive
  } = useTabAnimation();

  return (
    <div className='relative flex items-center'>
      {Constants.TABS.map((tab, index) => (
        <Tab
          key={`tab-${tab.id}`}
          tab={tab}
          index={index}
          tabsRefs={tabsRefs}
          isActive={isTabActive(index)}
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
        isMarioIdle={isMarioIdle()}
        handleMarioTransitionEnd={handleMarioTransitionEnd}
      />
    </div>
  );
};

export { AnimatedNavTabs };
