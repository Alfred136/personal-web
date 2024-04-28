interface CodeSnippetProps {
  tagName: string;
  children?: React.ReactNode;
}

interface ExpandIconProps {
  showContent: boolean;
}

interface TagProps {
  label: string;
}

export type { CodeSnippetProps, TagProps, ExpandIconProps };
