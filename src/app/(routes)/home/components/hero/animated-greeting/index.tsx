'use client';

import Image from 'next/image';
import * as Constants from './constants';
import { useTypewriter } from './use-typewriter';
import './styles.css';

const AnimatedGreeting = () => {
  const { displayText1, displayText2, showCursor } = useTypewriter(
    Constants.GREETING_TEXT_1,
    Constants.GREETING_TEXT_2,
    Constants.TYPEWRITER_TYPING_DELAY_MS,
    Constants.TYPEWRITER_TYPING_PAUSE_MS
  );

  return (
    <h1 className={`${displayText2 === Constants.GREETING_TEXT_2 ? 'wave' : ''}`}>
      <Image
        src={Constants.HAND_IMAGE_SRC}
        width={Constants.HAND_IMAGE_WIDTH}
        height={Constants.HAND_IMAGE_HEIGHT}
        alt={Constants.HAND_IMAGE_ALT}
        className='inline w-[48px] align-text-bottom rotate-[-45deg]'
      />
      <span>{displayText1}</span>
      <span className='text-afternoon'>{displayText2}</span>
      {showCursor ? <span className='text-sunset'>{Constants.TYPEWRITER_CURSOR}</span> : null}
    </h1>
  );
};

export { AnimatedGreeting };
