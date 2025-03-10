import { SymbolItems } from '@/types/symbol';
import Express from '@/components/ui/symbol/Express';
import Php from '@/components/ui/symbol/Php';
import Nodes from '@/components/ui/symbol/Nodes';

export const BackEndSymbolData: SymbolItems = {
  label: 'Back-end',
  items: {
    php: {
      show: true,
      title: 'PHP',
      icon: Php,
    },
    node: {
      show: true,
      title: 'Node.js',
      icon: Nodes,
    },
    express: {
      show: true,
      title: 'Express',
      icon: Express,
    },
  },
};
