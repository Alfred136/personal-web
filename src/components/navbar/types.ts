enum CharacterAnimation {
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
  tabIndex: number;
  activeTabIndex: number;
  activeCoinIndex: number;
  coinPositionY: number;
  characterAnimation: CharacterAnimation;
  handleCoinTransitionEnd: () => void;
}

interface CharacterProps {
  showCharacter: boolean;
  characterRef: React.RefObject<HTMLImageElement>;
  characterAnimation: CharacterAnimation;
  characterAnimationDuration: number;
  characterPositionX: number;
  handleCharacterTransitionEnd: () => void;
}

interface ProgressBarProps {
  scrollProgress: number;
  showProgressBar: boolean;
}

export type { NavTab, NavTabProps, CoinProps, CharacterProps, ProgressBarProps };

export { CharacterAnimation };
