import { SymbolItems } from '@/types/symbol';
import Mysql from '@/components/ui/symbol/Mysql';
import Postgresql from '@/components/ui/symbol/Postgresql';
import Mongodb from '@/components/ui/symbol/Mongodb';

export const DataBaseSymbolData: SymbolItems = {
  label: 'DataBase',
  items: {
    mysql: {
      show: true,
      title: 'MySQL',
      icon: Mysql,
    },
    postgresql: {
      show: true,
      title: 'PostgreSQL',
      icon: Postgresql,
    },
    mongodb: {
      show: true,
      title: 'MongoDB',
      icon: Mongodb,
    },
  },
};
