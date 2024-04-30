import * as Constants from './constants';
import type { ProgressBarProps } from './types';

const ProgressBar = (props: ProgressBarProps) => {
  const { scrollProgress, showProgressBar } = props;
  return (
    <div
      className={'absolute z-40 left-0 bottom-[-1px] bg-evening ease-out'}
      style={{
        width: `${scrollProgress}%`,
        height: showProgressBar ? '2px' : '0',
        transitionDuration: `${
          showProgressBar
            ? Constants.PROGRESS_BAR_MOVE_ANIMATION_DURATION_MS
            : Constants.PROGRESS_BAR_SHOW_ANIMATION_DURATION_MS
        }ms`
      }}
    />
  );
};

export { ProgressBar };
