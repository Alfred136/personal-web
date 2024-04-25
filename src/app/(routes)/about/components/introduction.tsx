'use client';

import { useState } from 'react';
import { CodeSnippet } from '@/components/code-snippet';

interface IntroductionPointFormItem {
  id: string;
  emoji: string;
  statement: string;
  question: string;
  answer?: string;
}

interface PointFormItemProps {
  emoji: string;
  statement: string;
  question: string;
  answer?: string;
}

const INTRODUCTION_POINT_FORMS: IntroductionPointFormItem[] = [
  {
    id: 'intro-degree',
    emoji: '🎓',
    statement: ' I got a CS degree',
    question: 'where?',
    answer: 'City University of Hong Kong'
  },
  {
    id: 'intro-laptop',
    emoji: '💻',
    statement: ' I use a macbook',
    question: 'which?',
    answer: 'air M1'
  },
  {
    id: 'intro-exp',
    emoji: '💼',
    statement: ' I have 2 years of dev exp',
    question: 'short?',
    answer: 'right, nowadays minimun 5+ yrs'
  },
  {
    id: 'intro-dev',
    emoji: '👨🏻‍💻',
    statement: ' I love web/mobile dev',
    question: 'and?',
    answer: 'game dev sounds exciting too'
  },
  {
    id: 'intro-workout',
    emoji: '🏋🏻',
    statement: ' I workout',
    question: 'a lot?',
    answer: '3 times a week'
  },
  {
    id: 'intro-book',
    emoji: '📚',
    statement: ' I read books',
    question: 'favourite?',
    answer: 'Rich Dad Poor Dad'
  },
  { id: 'intro-job', emoji: '👀', statement: ' I want a job', question: 'huh?', answer: '😭' }
];

const PointFormItem = (props: PointFormItemProps) => {
  const { emoji, statement, question, answer } = props;
  const [showanswer, setShowAnswer] = useState(false);

  const handleMouseEnter = () => {
    setShowAnswer(true);
  };

  const handleMouseLeave = () => {
    setShowAnswer(false);
  };

  return (
    <div
      className={`relative w-full flex gap-2 ${showanswer ? 'bg-midnight' : ''}`}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <span>{emoji}</span>
      <span>{statement}</span>
      <span
        className='min-w-[33%] w-1/3 ml-auto pr-1 content-center 
          text-[12px] text-afternoon text-right ss:w-2/5'
      >
        {showanswer ? answer : question}
      </span>
    </div>
  );
};

export const Introduction = () => {
  return (
    <CodeSnippet tagName='intro'>
      <div className='w-full pb-6 flex flex-col text-[15px] ss:text-[16px]'>
        <span className='mb-2'>Boring long text ❌ | Short point forms ✅</span>

        {INTRODUCTION_POINT_FORMS.map((item) => (
          <PointFormItem
            key={item.id}
            emoji={item.emoji}
            statement={item.statement}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </CodeSnippet>
  );
};
