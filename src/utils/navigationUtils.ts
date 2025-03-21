import { NavigationItems } from '@/types';

/**
 * 현재 경로가 메인 메뉴 아이템 또는 서브 메뉴 아이템과 일치하는지 확인
 * @param item 네비게이션 아이템
 * @param currentPath 현재 경로
 * @returns 활성화 여부
 */
export const isNavItemActive = (item: NavigationItems, currentPath: string): boolean => {
  // 직접 경로가 일치하는 경우
  if (currentPath === item.path) {
    return true;
  }

  // 서브 아이템이 있고, 그 중 하나가 현재 경로와 일치하는 경우
  if (item.subItems && item.subItems.some((subItem) => currentPath === subItem.path)) {
    return true;
  }

  return false;
};

/**
 * 특정 서브 아이템이 활성화되어 있는지 확인
 * @param path 서브 아이템 경로
 * @param currentPath 현재 경로
 * @returns 활성화 여부
 */
export const isSubItemActive = (path: string, currentPath: string): boolean => {
  return currentPath === path || currentPath.startsWith(`${path}/`);
};

/**
 * 홈 아이템을 반환
 */
const getHomeItem = (): { title: string; path: string } => {
  return { title: 'Home', path: '/' };
};

/**
 * 현재 경로에 해당하는 빵 부스러기 아이템들을 반환
 * @param navItems 네비게이션 아이템 배열
 * @param currentPath 현재 경로
 * @returns 빵 부스러기 아이템 배열
 */
export const getBreadcrumbItems = (
  navItems: NavigationItems[],
  currentPath: string,
): Array<{ title: string; path: string }> => {
  // 결과 배열 초기화 (항상 홈으로 시작)
  const result: Array<{ title: string; path: string }> = [getHomeItem()];

  // 홈 페이지인 경우 홈만 반환
  if (currentPath === '/') {
    return result;
  }

  // 메인 카테고리 찾기
  const mainCategory = navItems.find(
    (item) =>
      currentPath === item.path ||
      (item.subItems && item.subItems.some((subItem) => currentPath === subItem.path)),
  );

  if (!mainCategory) {
    return result;
  }

  // 메인 카테고리 추가
  result.push({ title: mainCategory.title, path: mainCategory.path });

  // 서브 카테고리 찾기 및 추가
  if (mainCategory.subItems) {
    const subCategory = mainCategory.subItems.find((subItem) => currentPath === subItem.path);
    if (subCategory) {
      result.push({ title: subCategory.title, path: subCategory.path });
    }
  }

  return result;
};
