'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import * as Constants from './constants';
import './index.css';

const AnimatedGreeting = () => {
  const [displayText1, setDisplayText1] = useState('');
  const [displayText2, setDisplayText2] = useState('');
  const [currentIndexText1, setCurrentIndexText1] = useState(0);
  const [currentIndexText2, setCurrentIndexText2] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const writerTimerDelayMs =
    Constants.TYPEWRITER_TYPING_DELAY_MS -
    10 * (displayText1.length / Constants.GREETING_TEXT_1.length);

  useEffect(() => {
    const writerTimer = setTimeout(async () => {
      // display text 1
      if (currentIndexText1 < Constants.GREETING_TEXT_1.length) {
        setDisplayText1((prev) => prev + Constants.GREETING_TEXT_1[currentIndexText1]);
        setCurrentIndexText1((prev) => prev + 1);
        return;
      }
      // display text 2
      if (currentIndexText2 < Constants.GREETING_TEXT_2.length) {
        if (currentIndexText2 === 0) {
          await new Promise((resolve) => setTimeout(resolve, Constants.TYPEWRITER_TYPING_PAUSE_MS));
        } else if (currentIndexText2 === Constants.GREETING_TEXT_2.length - 1) {
          setShowCursor(false);
        }
        setDisplayText2((prev) => prev + Constants.GREETING_TEXT_2[currentIndexText2]);
        setCurrentIndexText2((prev) => prev + 1);
        return;
      }
      clearTimeout(writerTimer);
      setShowCursor(false);
    }, writerTimerDelayMs);

    return () => {
      clearTimeout(writerTimer);
    };
  }, [currentIndexText1, currentIndexText2, writerTimerDelayMs]); //todo: make this a hook

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
      {showCursor ? <span className='text-afternoon'>{Constants.TYPEWRITER_CURSOR}</span> : null}
    </h1>
  );
};

export { AnimatedGreeting };
