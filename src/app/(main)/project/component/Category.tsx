'use client';
import React, { useState, useCallback, memo, useMemo } from 'react';
import { FixedSizeList as List } from 'react-window';
import ArrowDown from '@/components/ui/icon/ArrowDown';
import ArrowRight from '@/components/ui/icon/ArrowRight';

type CategoryProps = {
  items: string[];
  toggleGroups?: Record<string, string[]>;
  onSelect?: (item: string) => void; // 아이템 선택 호출 콜백
  initialSelected?: string;
};

const CategoryItem = memo(
  ({
    item,
    isSelected,
    onSelect,
  }: {
    item: string;
    isSelected: boolean;
    onSelect: (item: string) => void;
  }) => {
    return (
      <li className={`text-textColor dark:text-darkTextColor text-sm tracking-wider`}>
        <button
          className={`${isSelected ? 'inset-shadow-red bg-bgColor4 dark:bg-darkBgColor4' : ''} hover:dark:bg-darkDefaultColor font-noto box-border w-full cursor-pointer px-4 py-2 text-start`}
          onClick={() => onSelect(item)}
        >
          {item}
        </button>
      </li>
    );
  },
);

CategoryItem.displayName = 'CategoryItem';

const ToggleGroup = memo(
  ({
    group,
    items,
    expanded,
    onToggle,
    onItemSelect,
    selectedItem,
  }: {
    group: string;
    items: string[];
    expanded: boolean;
    onToggle: () => void;
    onItemSelect: (item: string) => void;
    selectedItem: string;
  }) => {
    return (
      <li className="">
        <div className="flex cursor-pointer items-center py-1 font-medium" onClick={onToggle}>
          <span className="mr-1">{expanded ? <ArrowDown /> : <ArrowRight />}</span>
          {group}
        </div>

        {expanded && items.length > 0 && (
          <ul className="mt-1">
            {items.length <= 20 ? (
              // 적은 수의 아이템은 일반 렌더링
              items.map((item) => (
                <CategoryItem
                  key={item}
                  item={item}
                  isSelected={selectedItem === item}
                  onSelect={onItemSelect}
                />
              ))
            ) : (
              <List
                height={Math.min(300, items.length * 28)} // 최대 높이 제한
                itemCount={items.length}
                itemSize={28}
                width="100%"
              >
                {({ index, style }: { index: number; style: React.CSSProperties }) => (
                  <div style={style}>
                    <CategoryItem
                      item={items[index]}
                      isSelected={selectedItem === items[index]}
                      onSelect={onItemSelect}
                    />
                  </div>
                )}
              </List>
            )}
          </ul>
        )}
      </li>
    );
  },
);

ToggleGroup.displayName = 'ToggleGroup';

// 메인 카테고리 컴포넌트
export default function Category({
  items,
  toggleGroups,
  onSelect,
  initialSelected,
}: CategoryProps) {
  const [selectedItem, setSelectedItem] = useState<string>(
    initialSelected || (items.length > 0 ? items[0] : ''),
  );
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

  // 아이템 선택 핸들러
  const handleSelect = useCallback(
    (item: string) => {
      setSelectedItem(item);
      if (onSelect) {
        onSelect(item);
      }
    },
    [onSelect],
  );

  // 그룹 토글 핸들러
  const getToggleHandler = useCallback((group: string) => {
    return () => {
      setExpandedGroups((prev) => ({
        ...prev,
        [group]: !prev[group],
      }));
    };
  }, []);

  // 그룹에 없는 아이템
  const ungroupedItems = useMemo(() => {
    if (!toggleGroups) return items;
    const groupedItems = Object.values(toggleGroups).flat();
    return items.filter((item) => !groupedItems.includes(item));
  }, [items, toggleGroups]);

  // 토글 그룹이 없는 경우, 일반 목록 렌더링
  if (!toggleGroups || Object.keys(toggleGroups).length === 0) {
    return (
      <div className="border-bgColor4 dark:border-darkBgColor4 bg-bgColor dark:bg-darkBgColor col-span-2 w-auto max-w-full overflow-y-auto border-r">
        <nav className="break-words">
          <ul className="relative space-y-1">
            {items.length <= 100 ? (
              items.map((item) => (
                <CategoryItem
                  key={item}
                  item={item}
                  isSelected={selectedItem === item}
                  onSelect={handleSelect}
                />
              ))
            ) : (
              <List height={400} itemCount={items.length} itemSize={28} width="100%">
                {({ index, style }: { index: number; style: React.CSSProperties }) => (
                  <div style={style}>
                    <CategoryItem
                      item={items[index]}
                      isSelected={selectedItem === items[index]}
                      onSelect={handleSelect}
                    />
                  </div>
                )}
              </List>
            )}
          </ul>
        </nav>
      </div>
    );
  }

  // 토글 그룹이 있는 경우, 그룹별로 렌더링
  return (
    <div className="border-bgColor4 dark:border-darkBgColor4 bg-bgColor dark:bg-darkBgColor col-span-2 w-auto max-w-full overflow-y-auto border-r">
      <nav className="break-words">
        <ul className="space-y-1">
          {Object.entries(toggleGroups).map(([group, groupItems]) => (
            <ToggleGroup
              key={group}
              group={group}
              items={groupItems}
              expanded={expandedGroups[group]}
              onToggle={getToggleHandler(group)}
              onItemSelect={handleSelect}
              selectedItem={selectedItem}
            />
          ))}

          {/* 그룹이 없는 아이템들 표시 */}
          {ungroupedItems.length > 0 && (
            <>
              {ungroupedItems.length <= 50 ? (
                ungroupedItems.map((item) => (
                  <CategoryItem
                    key={item}
                    item={item}
                    isSelected={selectedItem === item}
                    onSelect={handleSelect}
                  />
                ))
              ) : (
                <List
                  height={Math.min(300, ungroupedItems.length * 28)} // 최대 높이 제한
                  itemCount={ungroupedItems.length}
                  itemSize={28}
                  width="100%"
                >
                  {({ index, style }: { index: number; style: React.CSSProperties }) => (
                    <div style={style}>
                      <CategoryItem
                        item={ungroupedItems[index]}
                        isSelected={selectedItem === ungroupedItems[index]}
                        onSelect={handleSelect}
                      />
                    </div>
                  )}
                </List>
              )}
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
