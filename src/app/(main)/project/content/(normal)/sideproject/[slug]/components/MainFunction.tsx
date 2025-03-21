import { SideProjectDetail } from '@/types/sideProject';
import UserCog from '@/components/ui/icon/project/UserCog';

interface MainFunctionProps {
  features: SideProjectDetail[];
}
export default function MainFunction({ features }: MainFunctionProps) {
  return (
    <section className="space-y-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="bg-Yellow flex h-10 w-10 items-center justify-center rounded-lg">
          <i className="text-White text-2xl">
            <UserCog />
          </i>
        </div>
        <h2 className="text-textColor dark:text-darkTextColor text-2xl font-semibold">주요 기능</h2>
      </div>
      <ol className="grid gap-6 md:grid-cols-3">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <li
              key={item.title}
              className="border-borderColor dark:border-darkBorderColor bg-bgColor dark:bg-darkBgColor rounded-xl border p-6 shadow-sm"
            >
              <div className="border-borderColor dark:border-darkBorderColor bg-bgColor2 dark:bg-darkBgColor2 mb-4 flex h-12 w-12 items-center justify-center rounded-lg border">
                <i className="text-subColor dark:text-darkSubColor text-2xl">
                  <Icon />
                </i>
              </div>
              <h3 className="text-textColor dark:text-darkTextColor mb-2 text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-subColor dark:text-darkSubColor text-base break-keep">
                {item.detail}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
