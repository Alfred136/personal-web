'use client';

import '@/app/(routes)/home/styles.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { handPng } from '#/images/others';

// global constants
const TYPEWRITER_TYPING_DELAY_MS = 100;
const TYPEWRITER_TYPING_PAUSE_MS = 0;

const HAND_IMAGE_ALT = 'pixel-art hand';
const HAND_IMAGE_WIDTH = 64;
const HAND_IMAGE_HEIGHT = 64;

const GREETING_TEXT_1 = 'Hi, I am ';
const GREETING_TEXT_2 = 'Alfred ';

export const AnimatedGreeting = () => {
  const [displayText1, setDisplayText1] = useState('');
  const [displayText2, setDisplayText2] = useState('');
  const [currentIndexText1, setCurrentIndexText1] = useState(0);
  const [currentIndexText2, setCurrentIndexText2] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const writerTimerDelayMs =
    TYPEWRITER_TYPING_DELAY_MS - 10 * (displayText1.length / GREETING_TEXT_1.length);

  useEffect(() => {
    const writerTimer = setTimeout(async () => {
      // display text 1
      if (currentIndexText1 < GREETING_TEXT_1.length) {
        setDisplayText1((prev) => prev + GREETING_TEXT_1[currentIndexText1]);
        setCurrentIndexText1((prev) => prev + 1);
        return;
      }
      if (currentIndexText2 < GREETING_TEXT_2.length) {
        if (currentIndexText2 === 0) {
          await new Promise((resolve) => setTimeout(resolve, TYPEWRITER_TYPING_PAUSE_MS));
        } else if (currentIndexText2 === GREETING_TEXT_2.length - 1) {
          setShowCursor(false);
        }
        setDisplayText2((prev) => prev + GREETING_TEXT_2[currentIndexText2]);
        setCurrentIndexText2((prev) => prev + 1);
        return;
      }
      clearTimeout(writerTimer);
      setShowCursor(false);
    }, writerTimerDelayMs);

    return () => {
      clearTimeout(writerTimer);
    };
  }, [currentIndexText1, currentIndexText2, writerTimerDelayMs]);

  return (
    <h1
      id='home-hero-animated-greeting'
      className={`${displayText2 === GREETING_TEXT_2 ? 'wave' : ''}`}
    >
      <Image
        src={handPng}
        width={HAND_IMAGE_WIDTH}
        height={HAND_IMAGE_HEIGHT}
        alt={HAND_IMAGE_ALT}
        className='inline w-[48px] align-text-bottom rotate-[-45deg]'
      />
      {displayText1}
      <span className='text-afternoon'>{displayText2}</span>
      {showCursor ? <span className='text-afternoon'>_</span> : null}
    </h1>
  );
};
