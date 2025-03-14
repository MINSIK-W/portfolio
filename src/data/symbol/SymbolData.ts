import { SymbolData } from '@/types/symbol';
import { FrontEndSymbolData } from '@/data/symbol/FrontEndSymbolData';
import { BackEndSymbolData } from '@/data/symbol/BackEndSymbolData';
import { DataBaseSymbolData } from '@/data/symbol/DataBaseSymbolData';
import { DevOpsSymbolData } from '@/data/symbol/DevOpsSymbolData';
import { ToolsSymbolData } from '@/data/symbol/ToolsSymbolData';
import { FavoritesData, LearningData } from '@/data/symbol/studyData';

export const symbolData: SymbolData = {
  frontend: FrontEndSymbolData,
  backend: BackEndSymbolData,
  database: DataBaseSymbolData,
  devops: DevOpsSymbolData,
  tools: ToolsSymbolData,
  learning: LearningData,
  favorites: FavoritesData,
};
