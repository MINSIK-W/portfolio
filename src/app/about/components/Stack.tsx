'use client';
import {
  BaseSymbolItem,
  SymbolItems,
  StackSymbolItems,
  StudySymbolItems,
  SymbolData,
} from '@/types/symbol';
import { symbolData } from '@/data/symbol/SymbolData';
import { useState } from 'react';

// 스택 타입 가드
function isStackCategory(category: SymbolItems): category is StackSymbolItems {
  return category.type === 'stack';
}
// 학습 타입 가드
function isStudyCategory(category: SymbolItems): category is StudySymbolItems {
  return category.type === 'study';
}
// 카테고리 아이템 찾기
function findSymbolItem(data: SymbolData, skillId: string): BaseSymbolItem | null {
  // 모든 스택 카테고리에서 검색
  const stackCategories: Array<keyof SymbolData> = [
    'frontend',
    'backend',
    'database',
    'devops',
    'tools',
  ];
  for (const categoryKey of stackCategories) {
    const category = data[categoryKey];
    if (isStackCategory(category) && category.items[skillId]) {
      return category.items[skillId];
    }
  }
  return null;
}

export default function Stack() {
  const categories = Object.values(symbolData);
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].label);
  // 선택된 데이터 찾기
  const activeData =
    categories.find((category) => category.label === activeCategory) || categories[0];

  // 렌더링
  const renderItem = (key: string, item: BaseSymbolItem) => {
    const { title, icon: Icon, show } = item;
    if (!show) return null;
    return (
      <li
        key={key}
        className="bg-bgColor3 dark:bg-darkBgColor3 mt-2 mr-1.5 flex items-center rounded-sm p-2"
      >
        <i className="flex w-6 items-center justify-center">
          <Icon />
        </i>
        <span className="text-textColor dark:text-darkTextColor px-1.5 text-center text-sm">
          {title}
        </span>
      </li>
    );
  };

  const learningMessage = () => (
    <li className="text-textColor dark:text-darkTextColor font-noto px-1.5 text-center text-sm font-bold">
      학습 중입니다.
    </li>
  );

  return (
    <div className="box-border flex flex-col items-stretch justify-start self-auto pb-8">
      {/* 헤더 섹션 */}
      <div className="mb-2 flex w-full items-center justify-between">
        <h3 className="font-roboto text-textColor dark:text-darkTextColor text-2xl">STACK</h3>

        {/* 카테고리 탭 */}
        <ol className="font-rajdhani bg-bgColor3 dark:bg-darkBgColor3 border-bgColor3 dark:border-darkBgColor3 relative m-0 flex h-fit flex-row items-center rounded-sm border p-0.5">
          {categories.map((item) => (
            <li
              key={item.label}
              className="after:inset-shadow-l1 dark:after:inset-shadow-d1 flex items-center after:relative after:inline-block after:h-[16px] after:w-[1px] last:after:content-none"
            >
              <button
                className={`text-subColor dark:text-darkSubColor h-full w-full cursor-pointer px-2 py-1 text-sm ${
                  activeCategory === item.label
                    ? 'text-textColor bg-bgColor2 dark:text-darkTextColor inset-shadow-l2 dark:inset-shadow-d2 dark:bg-darkBgColor2 rounded-sm'
                    : 'hover:text-textColor hover:dark:text-darkTextColor'
                }`}
                onClick={() => setActiveCategory(item.label)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ol>
      </div>

      {/* 아이템 목록 */}
      <div className="font-rajdhani">
        <ol className="mt-2 mr-1.5 flex flex-wrap p-0 text-sm">
          {isStackCategory(activeData)
            ? // 스택
              Object.entries(activeData.items).some(([, item]) => item.show)
              ? Object.entries(activeData.items)
                  .filter(([, item]) => item.show)
                  .map(([key, item]) => renderItem(key, item))
              : learningMessage()
            : isStudyCategory(activeData)
              ? // 학습
                activeData.skills.length === 0 // 빈 배열 체크
                ? learningMessage()
                : activeData.skills
                    .map((skillId) => {
                      const item = findSymbolItem(symbolData, skillId);
                      return item ? renderItem(skillId, item) : null;
                    })
                    .filter(Boolean) // null 제거
              : null}
        </ol>
      </div>
    </div>
  );
}
