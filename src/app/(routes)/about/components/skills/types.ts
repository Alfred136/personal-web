import { StaticImageData } from 'next/image';

type SkillCategoryName = 'frontend' | 'backend' | 'others';

interface Skill {
  name: string;
  imageSource: StaticImageData;
}

interface SkillCategory {
  id: string;
  name: SkillCategoryName;
  skills: Skill[];
}

interface SkillCategoryBoardProps {
  name: SkillCategoryName;
  skills: Skill[];
}

export type { Skill, SkillCategory, SkillCategoryName, SkillCategoryBoardProps };
