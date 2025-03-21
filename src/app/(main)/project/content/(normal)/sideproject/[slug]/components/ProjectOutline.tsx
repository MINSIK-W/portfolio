import { SideProjectIntro } from '@/types/sideProject';
import BrowserCheck from '@/components/ui/icon/project/BrowserCheck';
interface ProjectOutlineProps {
  intro: SideProjectIntro[];
}
export default function ProjectOutline({ intro }: ProjectOutlineProps) {
  return (
    <section className="border-borderColor dark:border-darkBorderColor bg-bgColor dark:bg-darkBgColor rounded-xl border p-8 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="bg-Purple flex h-10 w-10 items-center justify-center rounded-lg">
          <i className="text-White text-2xl">
            <BrowserCheck />
          </i>
        </div>
        <h2 className="text-textColor dark:text-darkTextColor text-2xl font-semibold">
          프로젝트 개요
        </h2>
      </div>
      <ol className="mb-8 grid gap-6 md:grid-cols-3">
        {intro.map((int) =>
          int.details.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="dark:border-darkBorderColor border-borderColor flex flex-col items-center space-y-1 rounded-lg border p-4"
              >
                <i className="text-textColor dark:text-darkTextColor text-3xl">
                  <Icon />
                </i>
                <span className="dark:text-darkSubColor text-subColor text-sm">{item.title}</span>
                <span className="text-textColor dark:text-darkTextColor font-medium">
                  {item.detail}
                </span>
              </li>
            );
          }),
        )}
      </ol>
      <p className="dark:text-darkSubColor text-subColor leading-relaxed break-keep">
        {intro[0].description.join('')}
      </p>
    </section>
  );
}
