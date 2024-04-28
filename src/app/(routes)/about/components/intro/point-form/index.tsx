'use client';

import { useState } from 'react';
import type { PointFormProps } from './types';

const PointForm = (props: PointFormProps) => {
  const { emoji, statement, question, answer } = props;
  const [showAnswer, setShowAnswer] = useState(false);

  const handleMouseEnter = () => {
    setShowAnswer(true);
  };

  const handleMouseLeave = () => {
    setShowAnswer(false);
  };

  return (
    <div
      className={`relative w-full flex gap-2 ${showAnswer ? 'bg-midnight' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{emoji}</span>
      <span>{statement}</span>
      <span
        className='min-w-[33%] w-1/3 ml-auto pr-1 content-center 
          text-[12px] text-afternoon text-right ss:w-2/5'
      >
        {showAnswer ? answer : question}
      </span>
    </div>
  );
};

export { PointForm };
