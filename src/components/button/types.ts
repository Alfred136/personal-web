type Type = 'button' | 'submit' | 'reset';
type LinkTarget = '_self' | '_blank' | '_parent' | '_top';
type ClickHandler = (e?: React.MouseEvent<HTMLElement>) => void;

interface ButtonProps {
  label: string;
  link?: string;
  type?: Type;
  target?: LinkTarget;
  wrapperClassName?: string;
  handleClick?: ClickHandler;
}

export type { Type, LinkTarget, ClickHandler, ButtonProps };
