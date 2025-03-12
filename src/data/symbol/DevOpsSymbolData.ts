import { StackSymbolItems } from '@/types/symbol';
import Git from '@/components/ui/symbol/Git';
import Github from '@/components/ui/symbol/Github';
import Slack from '@/components/ui/symbol/Slack';

export const DevOpsSymbolData: StackSymbolItems = {
  type: 'stack',
  label: 'DevOps',
  items: {
    git: {
      show: true,
      title: 'Git',
      icon: Git,
    },
    slack: {
      show: true,
      title: 'Slack',
      icon: Slack,
    },
    github: {
      show: true,
      title: 'GitHub',
      icon: Github,
    },
  },
};
