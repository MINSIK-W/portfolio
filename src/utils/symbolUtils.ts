import { SymbolData, BaseSymbolItem, FindSymbolItem } from '@/types/symbol';

// 심볼 데이터에서 name 아이템 찾기
export const findSymbolItem: FindSymbolItem = (
  data: SymbolData,
  name: string,
): BaseSymbolItem | null => {
  // 모든 스택 카테고리 확인
  const stackCategories = ['frontend', 'backend', 'database', 'devops', 'tools'] as const;
  // 먼저 스택 카테고리에서 검색
  for (const category of stackCategories) {
    if (data[category]?.items && data[category].items[name]) {
      return data[category].items[name];
    }
  }
  // 스택에서 찾지 못한 경우 null 반환
  return null;
};
// 스터디/즐겨찾기 카테고리에 있는 모든 아이템 가져오기
export const getSymbolsFromStudyCategory = (
  data: SymbolData,
  categoryKey: 'learning' | 'favorites',
): BaseSymbolItem[] => {
  const category = data[categoryKey];
  if (!category || category.type !== 'study') return [];

  return category.stack
    .map((stack) => findSymbolItem(data, stack))
    .filter((item): item is BaseSymbolItem => item !== null);
};
