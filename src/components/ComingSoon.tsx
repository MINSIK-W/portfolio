import Flame from '@/components/ui/icon/Flame';

export default function ComingSoon() {
  return (
    <div className="mx-auto my-0 flex h-full items-center justify-center text-center">
      <div>
        <div className="mb-4 flex justify-center">
          <i className="text-Red flex h-12 w-12 items-center justify-center text-9xl">
            <Flame />
          </i>
        </div>
        <h2 className="text-Red mb-2 text-xl font-semibold">COMING SOON</h2>
        <p className="text-subColor dark:text-darkSubColor">개발 진행 중 입니다. :)</p>
      </div>
    </div>
  );
}
