'use client';

import React, { useState } from 'react';
import type { CodeSnippetProps, ExpandIconProps, TagProps } from './types';

const CodeSnippetOpenTag = (props: TagProps) => {
  return <h3>{`<${props.label}>`}</h3>;
};

const CodeSnippetCloseTag = (props: TagProps) => {
  return <h3>{`</${props.label}>`}</h3>;
};

const CodeSnippetExpandIcon = (props: ExpandIconProps) => {
  const { showContent } = props;
  return (
    <h3
      className={`font-heading text-afternoon duration-300 ${showContent ? 'rotate-[135deg]' : ''}`}
    >
      {'+'}
    </h3>
  );
};

const CodeSnippetContentVerticalLine = () => {
  return <div className='w-[1px] ml-1 mr-4 bg-white' />;
};

const CodeSnippet = (props: CodeSnippetProps) => {
  const { tagName, children } = props;
  const [showContent, setShowContent] = useState(true);

  const handleExpandBtnClick = () => {
    setShowContent((prev) => !prev);
  };

  return (
    <div className={`relative z-10 max-w-[600px] flex flex-col gap-1 m-auto`}>
      <div
        className='w-full pr-5 flex items-center justify-between gap-4 cursor-pointer bg-[#6266ae] hover:bg-night'
        onClick={handleExpandBtnClick}
      >
        <CodeSnippetOpenTag label={tagName} />
        <CodeSnippetExpandIcon showContent={showContent} />
      </div>

      {showContent ? (
        <div className='w-full flex'>
          <CodeSnippetContentVerticalLine />
          {children}
        </div>
      ) : null}

      <CodeSnippetCloseTag label={tagName} />
    </div>
  );
};

export { CodeSnippet };
