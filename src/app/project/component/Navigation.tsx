'use client';
import { navigationData } from '@/data/index/navigationData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathName = usePathname();
  return (
    <ol>
      {navigationData.map((value) =>
        value.subItems
          ? value.subItems.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  className={`${
                    pathName === item.path
                      ? 'bg-hovColor hover:bg-bgColor hover:inset-shadow-l2 dark:bg-darkHovColor dark:hover:bg-darkBgColor dark:hover:inset-shadow-d2'
                      : 'text-textColor dark:text-darkTextColor hover:bg-hovColor dark:hover:bg-darkHovColor'
                  } ml-1 flex cursor-pointer items-center rounded-sm px-2 py-1 duration-300 ease-in`}
                  key={item.path}
                >
                  <Link href={item.path}>
                    {Icon && (
                      <i>
                        <Icon />
                      </i>
                    )}
                    {item.title}
                  </Link>
                </li>
              );
            })
          : null,
      )}
    </ol>
  );
}
