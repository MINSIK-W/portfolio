import { SymbolType } from '@/types/symbol';
import Express from '@/components/ui/symbol/Express';
import Php from '@/components/ui/symbol/Php';
import Nodes from '@/components/ui/symbol/Nodes';

export const BackEndSymbolData: SymbolType = {
  php: {
    switch: true,
    title: 'PHP',
    label: 'Back-end',
    icon: Php,
  },
  node: {
    switch: true,
    title: 'Node.js',
    label: 'Back-end',
    icon: Nodes,
  },
  express: {
    switch: true,
    title: 'Express',
    label: 'Back-end',
    icon: Express,
  },
};
