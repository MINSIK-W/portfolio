import Link from 'next/link';
import { sideProjectsData } from '@/data/sideProjectsData';
import { findSymbolItem } from '@/utils/symbolUtils';
import { symbolData } from '@/data/symbol/SymbolData';
import ComingSoon from '@/components/ComingSoon';

export default function SideProjectsNav() {
  return (
    <>
      {sideProjectsData.some((item) => item.exposure) ? (
        <ol className={`grid grid-cols-4 gap-6`}>
          {sideProjectsData.map(
            (item, index) =>
              item.exposure && (
                <li
                  key={index}
                  className={`border-defaultColor dark:border-darkDefaultColor hover:bg-bgColor dark:hover:bg-darkBgColor rounded-md border shadow duration-300 ease-in`}
                >
                  <Link
                    href={`/project/content/sideproject/${item.path}`}
                    className={`text-textColor dark:text-darkTextColor`}
                  >
                    <div className="font-noto aspect-video space-y-4 p-4">
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="text-subColor dark:text-darkSubColor text-start text-sm">
                        {item.note[0]}
                      </p>
                    </div>
                    <div className="border-defaultColor dark:border-darkDefaultColor border-t p-4">
                      <ol className={`font-rajdhani flex flex-wrap items-center gap-1 text-xs`}>
                        {item.technologies.map((tech) => {
                          const name = findSymbolItem(symbolData, tech);
                          if (name) {
                            return (
                              <li
                                key={tech}
                                className={`bg-defaultColor dark:bg-darkDefaultColor rounded-md p-1`}
                              >
                                <span>{name.title}</span>
                              </li>
                            );
                          }
                          return null;
                        })}
                      </ol>
                    </div>
                  </Link>
                </li>
              ),
          )}
        </ol>
      ) : (
        <ComingSoon />
      )}
    </>
  );
}
