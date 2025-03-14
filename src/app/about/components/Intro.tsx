import { heroData } from '@/data/about/heroData';

export default function Intro() {
  return (
    <div className="box-border flex flex-col items-stretch justify-start self-auto pb-8">
      <h3 className="font-roboto text-textColor dark:text-darkTextColor mb-2 text-2xl">INTRO</h3>
      {heroData.map((item) =>
        item.intro.split('\n').map((txt, i) => (
          <p className="font-noto text-textColor dark:text-darkTextColor mx-0 my-1 text-sm" key={i}>
            {txt}
          </p>
        )),
      )}
    </div>
  );
}
