import { StackSymbolItems } from '@/types/symbol';
import Mysql from '@/components/ui/symbol/Mysql';
import Postgresql from '@/components/ui/symbol/Postgresql';
import Mongodb from '@/components/ui/symbol/Mongodb';

export const DataBaseSymbolData: StackSymbolItems = {
  type: 'stack',
  label: 'DataBase',
  items: {
    mysql: {
      show: false,
      title: 'MySQL',
      icon: Mysql,
    },
    postgresql: {
      show: false,
      title: 'PostgreSQL',
      icon: Postgresql,
    },
    mongodb: {
      show: false,
      title: 'MongoDB',
      icon: Mongodb,
    },
  },
};
