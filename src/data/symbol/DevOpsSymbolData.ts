import { SymbolType } from '@/types/symbol';
import Git from '@/components/ui/symbol/Git';
import Github from '@/components/ui/symbol/Github';
import Slack from '@/components/ui/symbol/Slack';

export const DevOpsSymbolData: SymbolType = {
  git: {
    switch: true,
    title: 'Git',
    label: 'DevOps',
    icon: Git,
  },
  slack: {
    switch: true,
    title: 'Slack',
    label: 'DevOps',
    icon: Slack,
  },
  github: {
    switch: true,
    title: 'GitHub',
    label: 'DevOps',
    icon: Github,
  },
};
