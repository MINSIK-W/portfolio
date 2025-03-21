'use client';
import { navigationData } from '@/data/index/navigationData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isSubItemActive } from '@/utils/navigationUtils';

export default function Navigation() {
  const pathName = usePathname();
  return (
    <ol className={`mx-1`}>
      {navigationData.map((value, valueIndex) =>
        value.subItems
          ? value.subItems.map((item, itemIndex) => {
              const Icon = item.icon;
              return (
                <li
                  className={`${
                    isSubItemActive(item.path, pathName)
                      ? 'bg-hovColor hover:bg-bgColor hover:inset-shadow-l2 dark:bg-darkHovColor dark:hover:bg-darkBgColor dark:hover:inset-shadow-d2'
                      : 'text-textColor dark:text-darkTextColor hover:bg-hovColor dark:hover:bg-darkHovColor'
                  } font-rajdhani text-textColor dark:text-darkTextColor mt-1 flex cursor-pointer items-center justify-center rounded-sm text-sm duration-300 ease-in`}
                  key={`${valueIndex}-${itemIndex}-${item.path}`}
                >
                  <Link className={`px-4 py-2`} href={item.path}>
                    {Icon && (
                      <i className={`flex justify-center`}>
                        <Icon />
                      </i>
                    )}
                    <span className={`flex text-center`}>{item.title}</span>
                  </Link>
                </li>
              );
            })
          : null,
      )}
    </ol>
  );
}
