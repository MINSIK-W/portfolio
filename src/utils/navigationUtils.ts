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
  if (
    item.subItems &&
    item.subItems.some((subItem) => isSubItemActive(subItem.path, currentPath))
  ) {
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
 * 경로에서 세그먼트 추출
 * @param path 경로
 * @returns 세그먼트 배열
 */
export const getPathSegments = (path: string): string[] => {
  // 시작과 끝의 슬래시 제거 후 슬래시로 분할
  return path.replace(/^\/|\/$/g, '').split('/');
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

  // 경로 세그먼트 가져오기
  const segments = getPathSegments(currentPath);

  // 메인 카테고리 찾기
  const mainCategory = navItems.find((item) => isNavItemActive(item, currentPath));

  if (!mainCategory) {
    return result;
  }

  // 메인 카테고리 추가
  result.push({ title: mainCategory.title, path: mainCategory.path });

  // 메인 카테고리에 서브 아이템이 있는 경우
  if (mainCategory.subItems) {
    // 현재 경로와 관련된 모든 서브 아이템 찾기
    const subItems = mainCategory.subItems.filter(
      (subItem) => currentPath === subItem.path || currentPath.startsWith(`${subItem.path}/`),
    );

    // 가장 일치하는 서브 아이템 (경로 길이가 가장 긴 항목)
    if (subItems.length > 0) {
      // 경로 길이 기준으로 정렬하여 가장 긴 경로를 선택
      const mostSpecificSubItem = subItems.sort((a, b) => b.path.length - a.path.length)[0];

      result.push({ title: mostSpecificSubItem.title, path: mostSpecificSubItem.path });

      // 나머지 경로 처리 (추가 세그먼트가 있는 경우)
      const subItemSegments = getPathSegments(mostSpecificSubItem.path);
      const remainingSegments = segments.slice(subItemSegments.length);

      // 남은 세그먼트가 있으면 동적으로 빵부스러기 항목 추가
      if (remainingSegments.length > 0) {
        let currentPath = mostSpecificSubItem.path;

        remainingSegments.forEach((segment) => {
          currentPath = `${currentPath}/${segment}`;
          // 세그먼트를 보기 좋게 변환 (예: camelCase나 kebab-case를 공백으로 구분)
          const title = segment
            .replace(/-/g, ' ')
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            .replace(/\b\w/g, (c) => c.toUpperCase());

          result.push({ title, path: currentPath });
        });
      }
    }
  }

  return result;
};

/**
 * 현재 경로에 해당하는 활성 서브 카테고리 목록을 반환
 * @param navItems 네비게이션 아이템 배열
 * @param currentPath 현재 경로
 * @returns 활성 서브 카테고리 배열
 */
export const getActiveSubCategories = (
  navItems: NavigationItems[],
  currentPath: string,
): NavigationItems[] => {
  // 메인 카테고리 찾기
  const mainCategory = navItems.find((item) => isNavItemActive(item, currentPath));

  if (!mainCategory || !mainCategory.subItems) {
    return [];
  }

  return mainCategory.subItems;
};
