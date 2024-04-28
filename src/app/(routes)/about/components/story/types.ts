interface StoryEvent {
  id: string;
  year: string;
  description: string;
  keywords?: string[];
}

interface StoryEventProps extends StoryEvent {}

interface StoryEventKeywordTagProps {
  keyword: string;
}

export type { StoryEvent, StoryEventProps, StoryEventKeywordTagProps };
