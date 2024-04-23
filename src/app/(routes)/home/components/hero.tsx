'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/button';
import { handPng } from '#/images/others';
import '@/app/(routes)/home/styles.css';

// global constants
const TYPEWRITER_TYPING_DELAY_MS = 100;
const TYPEWRITER_TYPING_PAUSE_MS = 500;

const HAND_IMAGE_ALT = 'pixel-art hand';
const HAND_IMAGE_WIDTH = 64;
const HAND_IMAGE_HEIGHT = 64;

const GREETING_TEXT_1 = 'Hi, my name is ';
const GREETING_TEXT_2 = 'Alfred ';

const RESUME = 'RESUME';
const CONTACT = 'CONTACT';
const RESUME_LINK = '/resumes/resume.pdf';
const CONTACT_LINK = '/contact';

const AnimatedGreeting = () => {
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
      // add a delay then display text 2
      if (currentIndexText2 < GREETING_TEXT_2.length) {
        if (currentIndexText2 === 0) {
          await new Promise((resolve) => setTimeout(resolve, TYPEWRITER_TYPING_PAUSE_MS));
        }
        if (currentIndexText2 === GREETING_TEXT_2.length - 1) {
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
    <h1 className={`${displayText2 === GREETING_TEXT_2 ? 'wave' : ''}`}>
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

const Introduction = () => {
  return (
    <h2>
      <span> I am a passionate Software Engineer with a flair for </span>
      <span className='highlight highlight-red'>creativity</span>
      <span> and a deep appreciation for </span>
      <span className='highlight highlight-yellow'>interactive UI/UX</span>.
    </h2>
  );
};

const ButtonGroup = () => {
  return (
    <div className='w-full flex flex-wrap gap-4 justify-center'>
      <Button title={RESUME} link={RESUME_LINK} />
      <Button title={CONTACT} link={CONTACT_LINK} target='_self' />
    </div>
  );
};

export const Hero = () => {
  return (
    <div
      className='absolute top-40 left-[50%] translate-x-[-50%] z-10 
        max-w-[800px] w-full px-[calc(8px+2vw)] flex flex-col gap-6 items-center text-center'
    >
      <AnimatedGreeting />
      <Introduction />
      <ButtonGroup />
    </div>
  );
};
