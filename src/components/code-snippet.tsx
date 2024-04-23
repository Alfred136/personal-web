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

interface CodeSnippetExpandIconProps {
  showContent: boolean;
}

const CodeSnippetOpenTag = (props: TagProps) => {
  return <h3>{`<${props.tagName}>`}</h3>;
};

const CodeSnippetCloseTag = (props: TagProps) => {
  return <h3>{`</${props.tagName}>`}</h3>;
};

const CodeSnippetExpandIcon = (props: CodeSnippetExpandIconProps) => {
  const { showContent } = props;
  return (
    <h3 className={` text-afternoon duration-300 ${showContent ? 'rotate-[135deg]' : ''}`}>
      {'+'}
    </h3>
  );
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
    <div className={`relative z-10 max-w-[600px] flex flex-col gap-1 m-auto ${className}`}>
      <div
        className='w-full flex items-center gap-4 cursor-pointer bg-[#6266ae] hover:bg-night'
        onClick={() => handleExpandBtnClick()}
      >
        <CodeSnippetOpenTag tagName={tagName} />
        <CodeSnippetExpandIcon showContent={showContent} />
      </div>

      {showContent ? (
        <div className='w-full flex'>
          <CodeSnippetContentVerticalLine />
          {children}
        </div>
      ) : null}

      <CodeSnippetCloseTag tagName={tagName} />
    </div>
  );
};
