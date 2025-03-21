import CheckCircle from '@/components/ui/icon/CheckCircle';
import ArrowRight from '@/components/ui/icon/ArrowRight';
import Book from '@/components/ui/icon/Book';
import Smiley from '@/components/ui/icon/Smiley';

interface ChallengeAndExcellenceProps {
  challenges: string[];
  learnings: string[];
}

export default function ChallengeAndExcellence({
  challenges,
  learnings,
}: ChallengeAndExcellenceProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <section className="border-borderColor dark:border-darkBorderColor bg-bgColor dark:bg-darkBgColor rounded-xl border p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="bg-Green flex h-10 w-10 items-center justify-center rounded-lg">
            <i className="text-White text-2xl">
              <Smiley />
            </i>
          </div>
          <h2 className="text-textColor dark:text-darkTextColor text-xl font-semibold">
            도전 과제
          </h2>
        </div>
        <ol className="space-y-2">
          {challenges.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <i className="text-Green mt-1">
                <CheckCircle />
              </i>
              <span className="dark:text-darkSubColor text-subColor flex">{item}</span>
            </li>
          ))}
        </ol>
      </section>
      <section className="border-borderColor dark:border-darkBorderColor bg-bgColor dark:bg-darkBgColor rounded-xl border p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="bg-Blue flex h-10 w-10 items-center justify-center rounded-lg">
            <i className="text-White text-2xl">
              <Book />
            </i>
          </div>
          <h2 className="text-textColor dark:text-darkTextColor text-xl font-semibold">배운 점</h2>
        </div>
        <ol className="space-y-2">
          {learnings.map((item, i) => (
            <li key={i} className="flex items-start gap-1">
              <i className="text-Blue mt-1">
                <ArrowRight />
              </i>
              <span className="dark:text-darkSubColor text-subColor flex">{item}</span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
