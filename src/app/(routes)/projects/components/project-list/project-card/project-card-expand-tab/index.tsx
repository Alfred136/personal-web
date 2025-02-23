import Image from 'next/image';
import * as Constants from './constants';
import type { ProjectCardExpandTabProps } from './types';

const ProjectCardExpandTab = (props: ProjectCardExpandTabProps) => {
  const { handleExpandButtonClick } = props;
  return (
    <div
      className='absolute z-40 right-0 w-[7%] h-full flex items-center 
        cursor-pointer shadow-2xl bg-morning hover:bg-slate-300'
      onClick={handleExpandButtonClick}
    >
      <Image
        src={Constants.FINGER_IMAGE_SRC}
        alt={Constants.FINGER_IMAGE_ALT}
        width={Constants.FINGER_IMAGE_WIDTH}
        height={Constants.FINGER_IMAGE_HEIGHT}
        unoptimized={true}
        className={`m-auto rotate-90`}
      />
    </div>
  );
};

export { ProjectCardExpandTab };
