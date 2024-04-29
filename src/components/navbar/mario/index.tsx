import Image from 'next/image';
import { MarioAnimation, type MarioProps } from '@/components/navbar/types';
import * as Constants from '@/components/navbar/constants';

const Mario = (props: MarioProps) => {
  const {
    showMario,
    marioRef,
    marioAnimation,
    marioAnimationDuration,
    marioPositionX,
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
        transitionDuration:
          marioAnimation === MarioAnimation.Idle ? '0ms' : `${marioAnimationDuration}ms`
      }}
      onTransitionEnd={handleMarioTransitionEnd}
    />
  );
};

export { Mario };
