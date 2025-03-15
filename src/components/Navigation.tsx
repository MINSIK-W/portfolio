import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationData } from '@/data/index/navigationData';

export default function Navigation() {
  const pathName = usePathname();
  return (
    <nav className="font-rajdhani box-border flex min-w-auto shrink-0 basis-auto flex-row items-stretch justify-center self-auto p-0">
      <ul className="mr-0.5 flex h-full items-center">
        {navigationData.map((item) => (
          <li
            className={`${pathName === item.path ? 'bg-hovColor hover:bg-bgColor hover:inset-shadow-l2 dark:bg-darkHovColor dark:hover:bg-darkBgColor dark:hover:inset-shadow-d2' : 'text-textColor dark:text-darkTextColor hover:bg-hovColor dark:hover:bg-darkHovColor'} ml-1 flex cursor-pointer items-center rounded-sm px-2 py-1 duration-300 ease-in`}
            key={item.path}
          >
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
