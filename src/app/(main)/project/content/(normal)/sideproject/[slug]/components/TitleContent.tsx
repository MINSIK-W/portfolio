import Calendar from '@/components/ui/icon/Calendar';
import Link from 'next/link';
import CompanyLink from '@/components/ui/icon/CompanyLink';
import { findSymbolItem } from '@/utils/symbolUtils';
import { symbolData } from '@/data/symbol/SymbolData';

interface TitleContentProps {
  title: string;
  date: number;
  note: string[];
  githubUrl: string;
  pathLive: string;
}
export default function TitleContent({
  title,
  date,
  note,
  githubUrl,
  pathLive,
}: TitleContentProps) {
  const githubItem = findSymbolItem(symbolData, 'github');

  return (
    <div className="bg-bgColor dark:bg-darkBgColor relative overflow-hidden rounded-xl p-8">
      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="w-full space-y-4">
          <div className="text-Blue flex items-center gap-2">
            <i>
              <Calendar />
            </i>
            <span className="text-sm font-medium">{date}</span>
          </div>
          <h2 className="text-textColor dark:text-darkTextColor text-3xl font-bold">{title}</h2>
          <p className="dark:text-darkSubColor text-subColor break-keep">{note[0]}</p>
        </div>
        <div className="font-rajdhani absolute top-0 right-0 flex gap-3">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textColor hover:inset-shadow-l2 dark:hover:inset-shadow-d2 bg-bgColor4 flex items-center gap-2 rounded-sm px-4 py-2 transition-all"
          >
            <i className="w-5">{githubItem && <githubItem.icon />}</i>
            <span>{githubItem && githubItem.title}</span>
          </Link>
          <Link
            href={pathLive}
            target="_blank"
            rel="noopener noreferrer"
            className="text-White hover:inset-shadow-l2 dark:hover:inset-shadow-d2 bg-Red flex items-center gap-2 rounded-sm px-4 py-2 transition-all"
          >
            <i>
              <CompanyLink />
            </i>
            <span>Live Demo</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
