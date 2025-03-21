import LaptopCode from '@/components/ui/icon/project/LaptopCode';
import { findSymbolItem } from '@/utils/symbolUtils';
import { symbolData } from '@/data/symbol/SymbolData';

interface TechnologiesProps {
  technologies: string[];
}
export default function Technologies({ technologies }: TechnologiesProps) {
  return (
    <section className="border-borderColor dark:border-darkBorderColor bg-bgColor dark:bg-darkBgColor rounded-xl border p-8 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="bg-Red flex h-10 w-10 items-center justify-center rounded-lg">
          <i className="text-White text-2xl">
            <LaptopCode />
          </i>
        </div>
        <h2 className="text-textColor dark:text-darkTextColor text-2xl font-semibold">사용 기술</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        <ol className="relative flex flex-wrap select-none">
          {technologies.map((tech) => {
            const item = findSymbolItem(symbolData, tech);
            if (item) {
              const Icon = item.icon;
              return (
                <li
                  key={tech}
                  className="bg-bgColor3 dark:bg-darkBgColor3 mt-2 mr-1.5 flex items-center rounded-sm p-2"
                >
                  <i className="flex w-6 items-center justify-center">
                    <Icon />
                  </i>
                  <span className="text-textColor dark:text-darkTextColor px-1.5 text-center text-sm">
                    {item.title}
                  </span>
                </li>
              );
            }
            return null;
          })}
        </ol>
      </div>
    </section>
  );
}
