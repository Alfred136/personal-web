enum MarioAnimation {
  Idle,
  LookLeft,
  LookRight,
  RunningLeft,
  RunningRight
}

interface NavTab {
  id: string;
  label: string;
  link: string;
}

interface NavTabProps {
  tab: NavTab;
  index: number;
  tabsRefs: React.MutableRefObject<Array<React.RefObject<HTMLAnchorElement>>>;
  isActive: boolean;
  handleTabClick: (index: number) => void;
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: (index: number) => void;
  children?: React.ReactNode;
}

interface CoinProps {
  showCoin: boolean;
  showCoinBounce: boolean;
  coinPositionY: number;
  handleCoinTransitionEnd: () => void;
}

interface MarioProps {
  showMario: boolean;
  marioRef: React.RefObject<HTMLImageElement>;
  marioAnimation: MarioAnimation;
  marioAnimationDuration: number;
  marioPositionX: number;
  handleMarioTransitionEnd: () => void;
}

interface ProgressBarProps {
  scrollProgress: number;
  showProgressBar: boolean;
}

export type { NavTab, NavTabProps, CoinProps, MarioProps, ProgressBarProps };

export { MarioAnimation };
