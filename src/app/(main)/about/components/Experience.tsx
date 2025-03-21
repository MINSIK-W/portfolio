import { findSymbolItem } from '@/utils/symbolUtils';
import { symbolData } from '@/data/symbol/SymbolData';
import { experienceData } from '@/data/experienceData';

export default function Experience() {
  return (
    <div className="box-border flex flex-col items-stretch justify-start self-auto pb-8">
      <h3 className="font-roboto text-textColor dark:text-darkTextColor mb-2 text-2xl">
        EXPERIENCE
      </h3>
      <ul>
        {experienceData.map((experience, index) => (
          <li
            key={index}
            className="border-borderColor dark:border-darkBorderColor flex h-auto w-full flex-col border-t py-2"
          >
            <div className="font-noto text-textColor dark:text-darkTextColor flex w-full items-center justify-between px-3 py-2">
              <h3 className="overflow-hidden text-xl font-bold text-nowrap break-normal text-ellipsis">
                {experience.title}
              </h3>
              {experience.date.map((period, i) => (
                <span
                  key={i}
                  className="overflow-hidden text-sm text-nowrap break-normal text-ellipsis"
                >
                  {period.start} - {period.end}
                </span>
              ))}
            </div>
            <p className="text-textColor font-noto dark:text-darkTextColor overflow-hidden px-3 text-sm break-words">
              {experience.job}
            </p>
            <ol className="relative flex flex-wrap px-3 py-2 select-none">
              {experience.skill.map((name) => {
                const skill = findSymbolItem(symbolData, name);
                if (skill) {
                  const Icon = skill.icon;
                  return (
                    <li
                      key={name}
                      className="bg-bgColor3 dark:bg-darkBgColor3 mt-2 mr-1.5 flex items-center rounded-sm p-2"
                    >
                      <i className="flex w-6 items-center justify-center">
                        <Icon />
                      </i>
                      <span className="text-textColor dark:text-darkTextColor px-1.5 text-center text-sm">
                        {skill.title}
                      </span>
                    </li>
                  );
                }
              })}
            </ol>
          </li>
        ))}
      </ul>
    </div>
  );
}
