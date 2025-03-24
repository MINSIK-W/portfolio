'use client';
import { usePathname } from 'next/navigation';
import { getBreadcrumbItems } from '@/utils/navigationUtils';
import { navigationData } from '@/data/index/navigationData';
import Home from '@/components/ui/icon/Home';
import Link from 'next/link';
import ArrowRight from '@/components/ui/icon/ArrowRight';

interface BreadcrumbProps {
  className?: string;
  showHomeIcon?: boolean;
  maxItems?: number;
}
export default function Header({
  className = '',
  showHomeIcon = true,
  maxItems = 4,
}: BreadcrumbProps) {
  const pathname = usePathname();
  const breadcrumbItems = getBreadcrumbItems(navigationData, pathname);

  if (breadcrumbItems.length <= 1) {
    return null;
  }

  // 항목이 많을 경우 처리 (처음, 마지막, 중간 몇개만 표시)
  let displayedItems = breadcrumbItems;
  if (breadcrumbItems.length > maxItems) {
    // 첫번째 항목, 마지막 두 항목, 그리고 생략 표시를 위한 가상 항목
    displayedItems = [
      breadcrumbItems[0],
      { title: '...', path: '' }, // 생략 표시
      ...breadcrumbItems.slice(-2), // 마지막 두 항목
    ];
  }
  return (
    <div className="bg-bgColor dark:bg-darkBgColor dark:inset-shadow-d inset-shadow-l text-textColor dark:text-darkTextColor py-2">
      <nav className={` ${className}`} aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center justify-end pr-5">
          {displayedItems.map((item, index) => {
            const isLast = index === displayedItems.length - 1;
            const isEllipsis = item.title === '...';

            return (
              <li key={index} className="font-noto flex items-center text-sm">
                {index > 0 && (
                  <i className="text-subColor dark:text-darkSubColor">
                    <ArrowRight />
                  </i>
                )}

                {isEllipsis ? (
                  <span className="text-subColor dark:text-darkSubColor">...</span>
                ) : isLast ? (
                  <span
                    className="text-textColor dark:text-darkTextColor font-medium"
                    aria-current="page"
                  >
                    {index === 0 && showHomeIcon ? (
                      <span className="flex items-center">
                        <i className="pr-1">
                          <Home />
                        </i>
                        <span className="sr-only md:not-sr-only">{item.title}</span>
                      </span>
                    ) : (
                      item.title
                    )}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="text-subColor dark:text-darkSubColor hover:text-textColor hover:dark:text-darkTextColor"
                  >
                    {index === 0 && showHomeIcon ? (
                      <span className="flex items-center">
                        <i className="pr-1">
                          <Home />
                        </i>
                        <span className="sr-only md:not-sr-only">{item.title}</span>
                      </span>
                    ) : (
                      item.title
                    )}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
