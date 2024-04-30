import Image from 'next/image';
import type { MarioProps } from './types';
import * as Constants from './constants';

const Mario = (props: MarioProps) => {
  const {
    showMario,
    marioRef,
    marioAnimation,
    marioAnimationDuration,
    marioPositionX,
    isMarioIdle,
    handleMarioTransitionEnd
  } = props;
  return (
    <Image
      ref={marioRef}
      src={Constants.MARIO_IMAGE_SRC[marioAnimation]}
      alt={Constants.MARIO_IMAGE_ALT}
      width={Constants.MARIO_IMAGE_WIDTH}
      height={Constants.MARIO_IMAGE_HEIGHT}
      priority={true}
      unoptimized={true}
      className={`absolute left-1 ease-out ${!showMario ? 'hidden' : ''}`}
      style={{
        transform: `translateX(${marioPositionX}px)`,
        transitionDuration: isMarioIdle ? '0ms' : `${marioAnimationDuration}ms`
      }}
      onTransitionEnd={handleMarioTransitionEnd}
    />
  );
};

export { Mario };
