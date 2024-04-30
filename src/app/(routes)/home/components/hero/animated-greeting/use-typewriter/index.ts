import { useEffect, useState } from 'react';

const useTypewriter = (
  greetingText1: string,
  greetingText2: string,
  typingDelayMs: number = 100,
  text2PauseMs: number = 0
) => {
  const [displayText1, setDisplayText1] = useState('');
  const [displayText2, setDisplayText2] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const writerTimerDelayMs = typingDelayMs - 10 * (displayText1.length / greetingText1.length);

  useEffect(() => {
    const writerTimer = setTimeout(async () => {
      if (displayText1.length < greetingText1.length) {
        setDisplayText1((prev) => prev + greetingText1[prev.length]);
        return;
      }
      if (displayText2.length < greetingText2.length) {
        if (displayText2.length === 0) {
          await new Promise((resolve) => setTimeout(resolve, text2PauseMs));
        } else if (displayText2.length === greetingText2.length - 1) {
          setShowCursor(false);
        }
        setDisplayText2((prev) => prev + greetingText2[prev.length]);
        return;
      }
      clearTimeout(writerTimer);
      setShowCursor(false);
    }, writerTimerDelayMs);

    return () => {
      clearTimeout(writerTimer);
    };
  }, [greetingText1, greetingText2, displayText1, displayText2, text2PauseMs, writerTimerDelayMs]);

  return {
    displayText1,
    displayText2,
    showCursor
  };
};

export { useTypewriter };
