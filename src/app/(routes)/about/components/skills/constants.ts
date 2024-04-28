import { ImageHeight, ImageWidth } from '@/shared/types';
import type { SkillCategory } from './types';
import {
  iconCSharpPng,
  iconCssPng,
  iconDynamodbPng,
  iconGitPng,
  iconGitHubPng,
  iconGitLabPng,
  iconHtml5Png,
  iconJavaPng,
  iconJavaScriptPng,
  iconMySqlPng,
  iconMsPowerPlatformPng,
  iconNextJsPng,
  iconNodeJsPng,
  iconPhpPng,
  iconReactPng,
  iconSqlPng,
  iconTailwindcssPng,
  iconTypeScriptPng
} from '#/images/icons';

const TAG_NAME: string = 'skills';
const SKILL_ICON_WIDTH: ImageWidth = 24;
const SKILL_ICON_HEIGHT: ImageHeight = 24;
const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'sc-frontend',
    name: 'frontend',
    skills: [
      { name: 'HTML5', imageSource: iconHtml5Png },
      { name: 'CSS', imageSource: iconCssPng },
      { name: 'JavaScript', imageSource: iconJavaScriptPng },
      { name: 'TypeScript', imageSource: iconTypeScriptPng },
      { name: 'React', imageSource: iconReactPng },
      { name: 'Next.js', imageSource: iconNextJsPng },
      { name: 'TailwindCSS', imageSource: iconTailwindcssPng }
    ]
  },
  {
    id: 'sc-backend',
    name: 'backend',
    skills: [
      { name: 'Node.js', imageSource: iconNodeJsPng },
      { name: 'Java', imageSource: iconJavaPng },
      { name: 'PHP', imageSource: iconPhpPng },
      { name: 'C#', imageSource: iconCSharpPng },
      { name: 'SQL', imageSource: iconSqlPng },
      { name: 'MySQL', imageSource: iconMySqlPng },
      { name: 'DynamoDB', imageSource: iconDynamodbPng }
    ]
  },
  {
    id: 'sc-others',
    name: 'others',
    skills: [
      { name: 'Git', imageSource: iconGitPng },
      { name: 'GitHub', imageSource: iconGitHubPng },
      { name: 'GitLab', imageSource: iconGitLabPng },
      { name: 'Microsoft Power Platform', imageSource: iconMsPowerPlatformPng }
    ]
  }
];

export { TAG_NAME, SKILL_ICON_WIDTH, SKILL_ICON_HEIGHT, SKILL_CATEGORIES };
