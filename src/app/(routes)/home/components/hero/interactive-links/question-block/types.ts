import { StaticImageData } from 'next/image';

interface QuestionBlockProps {
  blockItemImage: StaticImageData;
  blockItemAlt: string;
  blockItemName: string;
  blockItemLink: string;
  showBlockItem: boolean;
  dropAnimationDuration: number;
  handleBlockClick: () => void;
  setDialogueText: (text: string) => void;
}

enum QuestionBlockAnimation {
  Idle,
  Drop,
  Bounce,
  Spin
}

export type { QuestionBlockProps };

export { QuestionBlockAnimation };
