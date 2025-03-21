import { SideProjectDetail } from '@/types/sideProject';
import Components from '@/components/ui/icon/Components';

interface FutureImprovementProps {
  improvement: SideProjectDetail[]; // ✅ 배열로 정의
}

export default function FutureImprovement({ improvement }: FutureImprovementProps) {
  return (
    <section className="border-borderColor dark:border-darkBorderColor bg-bgColor dark:bg-darkBgColor rounded-xl border p-8 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="bg-Indigo flex h-10 w-10 items-center justify-center rounded-lg">
          <i className="text-White text-2xl">
            <Components />
          </i>
        </div>
        <h2 className="text-textColor dark:text-darkTextColor text-2xl font-semibold">
          향후 개선 사항
        </h2>
      </div>
      <ul className="space-y-3">
        {improvement.map((item, index) => (
          <li key={index} className="flex gap-2">
            <i className="text-Indigo mt-1.5 text-xl">
              <item.icon />
            </i>
            <div className="flex flex-col items-start gap-1">
              <h3 className="text-textColor dark:text-darkTextColor text-lg font-medium">
                {item.title}
              </h3>
              <p className="text-subColor dark:text-darkSubColor">{item.detail} </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
