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

export type { NavTab };

export { MarioAnimation };
