import MainEffectTyping from '@/components/MainEffectTyping';
import { mainEffectTypingData } from '@/data/index/mainEffectTypingData';
import BackgroundTyping from '@/components/BackgroundTyping';

export default function MainEffect() {
  return (
    <section className="bg-BgColor2 dark:bg-darkBgColor2 relative m-0 flex h-full w-full items-center justify-center overflow-hidden p-0 select-none">
      <BackgroundTyping />
      <div className="text-textColor dark:text-darkTextColor relative z-10 text-center">
        <h2 className="font-roboto text-9xl leading-normal -tracking-wide">
          {mainEffectTypingData[0].title}
        </h2>
        <MainEffectTyping />
      </div>
    </section>
  );
}
