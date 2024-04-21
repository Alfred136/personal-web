'use client';

import React, { useState } from 'react';

interface CodeSnippetProps {
  tagName: string;
  className?: string;
  children?: React.ReactNode;
}

interface TagProps {
  tagName: string;
}

interface CodeSnippetExpandButtonProps {
  showContent: boolean;
  handleClick: () => void;
}

const CodeSnippetOpenTag = (props: TagProps) => {
  return <h2>{`<${props.tagName}>`}</h2>;
};

const CodeSnippetCloseTag = (props: TagProps) => {
  return <h2>{`</${props.tagName}>`}</h2>;
};

const CodeSnippetExpandButton = (props: CodeSnippetExpandButtonProps) => {
  const { showContent, handleClick } = props;
  return <button onClick={handleClick}>{showContent ? 'v' : '>'}</button>;
};

const CodeSnippetContentVerticalLine = () => {
  return <div className='w-[1px] ml-1 mr-4 bg-white' />;
};

export const CodeSnippet = (props: CodeSnippetProps) => {
  const { tagName, className, children } = props;
  const [showContent, setShowContent] = useState(true);

  const handleExpandBtnClick = () => {
    setShowContent((prev) => !prev);
  };

  return (
    <div className={`max-w-[600px] m-auto ${className}`}>
      <div className='flex gap-2'>
        <CodeSnippetOpenTag tagName={tagName} />
        <CodeSnippetExpandButton showContent={showContent} handleClick={handleExpandBtnClick} />
      </div>

      {showContent && (
        <div className='flex'>
          <CodeSnippetContentVerticalLine />
          {children}
        </div>
      )}

      <CodeSnippetCloseTag tagName={tagName} />
    </div>
  );
};
