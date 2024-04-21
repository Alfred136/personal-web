'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import roomImage from '/public/room.png';
import handImage from '/public/hand.png';
import pointingFingerDownGif from '/public/pointing_finger_down.gif';
import { Button } from '@/components/button';
import '@/app/(routes)/home/styles.css';

// global constants
const TYPEWRITER_TYPING_DELAY_MS = 100;
const TYPEWRITER_TYPING_PAUSE_MS = 500;
const TYPEWRITER_CURSOR_DELAY_MS = 500;

const HERO_IMAGE_ALT = 'hero';
const HERO_IMAGE_WIDTH = 512;
const HERO_IMAGE_HEIGHT = 512;

const HAND_IMAGE_ALT = 'hand';
const HAND_IMAGE_WIDTH = 64;
const HAND_IMAGE_HEIGHT = 64;

const RESUME = 'RESUME';
const CONTACT = 'CONTACT';
const RESUME_LINK = '/resume.pdf';
const CONTACT_LINK = '/contact';

const TypewriterGreeting = () => {
  const text1 = ' Hi, my name is ';
  const text2 = 'Alfred';
  const [displayText1, setDisplayText1] = useState('');
  const [displayText2, setDisplayText2] = useState('');
  const [currentIndexText1, setCurrentIndexText1] = useState(0);
  const [currentIndexText2, setCurrentIndexText2] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [cursorTimeout, setCursorTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const writerTimer = setTimeout(async () => {
      if (currentIndexText1 < text1.length) {
        setDisplayText1((prev) => prev + text1[currentIndexText1]);
        setCurrentIndexText1((prev) => prev + 1);
        return;
      }
      if (currentIndexText2 < text2.length) {
        if (currentIndexText2 === 0) {
          await new Promise((resolve) => setTimeout(resolve, TYPEWRITER_TYPING_PAUSE_MS));
        }
        setDisplayText2((prev) => prev + text2[currentIndexText2]);
        setCurrentIndexText2((prev) => prev + 1);
        return;
      }
      clearTimeout(writerTimer);
      clearInterval(cursorTimeout ?? 0);
      setCursorTimeout(null);
      setShowCursor(false);
    }, TYPEWRITER_TYPING_DELAY_MS);

    return () => {
      clearTimeout(writerTimer);
    };
  }, [text1, text2, currentIndexText1, currentIndexText2, cursorTimeout]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, TYPEWRITER_CURSOR_DELAY_MS);
    setCursorTimeout(cursorTimer);

    return () => {
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <>
      {displayText1}
      <span className='text-afternoon'>{displayText2}</span>
      {showCursor && <span className='text-afternoon'>_</span>}
    </>
  );
};

const GreetingHeadline = () => {
  return (
    <h1 className='wave'>
      <Image
        src={handImage}
        width={HAND_IMAGE_WIDTH}
        height={HAND_IMAGE_HEIGHT}
        alt={HAND_IMAGE_ALT}
        className='inline w-[48px] rotate-[-45deg] md:w-[64px]'
      />
      <TypewriterGreeting />
    </h1>
  );
};

const Introduction = () => {
  return (
    <h2>
      I am a passionate
      <span> Software Engineer </span> with a flair for{' '}
      <span className='highlight highlight-red'>creativity</span> and a deep appreciation for
      <span className='highlight highlight-yellow'> pixel art</span>.
    </h2>
  );
};

const ButtonGroup = () => {
  return (
    <div className='w-full flex flex-wrap gap-4 justify-center md:justify-start'>
      <Button title={RESUME} link={RESUME_LINK} />
      <Button title={CONTACT} link={CONTACT_LINK} target='_self' />
    </div>
  );
};

const HeroIntro = () => {
  return (
    <div
      className='max-w-[800px] w-full flex flex-col gap-6 items-center self-end text-center 
        md:w-5/12 md:items-start md:self-center md:text-left'
    >
      <GreetingHeadline />
      <Introduction />
      <ButtonGroup />
    </div>
  );
};

const HeroImage = () => {
  return (
    <Image
      src={roomImage}
      alt={HERO_IMAGE_ALT}
      width={HERO_IMAGE_WIDTH}
      height={HERO_IMAGE_HEIGHT}
      className='max-w-[512px] w-11/12 xs:w-10/12 md:w-5/12'
    />
  );
};

const ScrollDownButton = () => {
  return (
    <Link href='#home-skills'>
      <Image
        src={pointingFingerDownGif}
        alt='pointing finger down'
        className='absolute bottom-[5%] left-[50%] w-[32px] translate-x-[-50%] hidden
          md:bottom-[12%] md:w-[48px] md:block'
      />
    </Link>
  );
};

export const Hero = () => {
  return (
    <>
      <div className='w-full h-full flex flex-wrap-reverse items-center justify-center gap-0 md:gap-10'>
        <HeroIntro />
        <HeroImage />
      </div>
      <ScrollDownButton />
    </>
  );
};
