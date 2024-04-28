import { StaticImageData } from 'next/image';

interface QuestionBlockProps {
  blockItemImage: StaticImageData;
  blockItemAlt: string;
  blockItemName: string;
  blockItemLink: string;
  showBlockItem: boolean;
  dropAnimationDelay: number;
  handleBlockClick: () => void;
  setDialogueText: (text: string) => void;
}

export type { QuestionBlockProps };
