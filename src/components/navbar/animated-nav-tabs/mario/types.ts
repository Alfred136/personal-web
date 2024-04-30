enum MarioAnimation {
  Idle,
  LookLeft,
  LookRight,
  RunningLeft,
  RunningRight
}

interface MarioProps {
  showMario: boolean;
  marioRef: React.RefObject<HTMLImageElement>;
  marioAnimation: MarioAnimation;
  marioAnimationDuration: number;
  marioPositionX: number;
  isMarioIdle: boolean;
  handleMarioTransitionEnd: () => void;
}

export { MarioAnimation };

export type { MarioProps };
