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

export type { NavTabProps };
