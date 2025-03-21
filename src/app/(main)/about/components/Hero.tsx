import Image from 'next/image';
import HeroImages from '../../../../../public/images/HeroImages.png';
import Person from '@/components/ui/icon/Person';
import { heroData } from '@/data/about/heroData';
import Calendar from '@/components/ui/icon/Calendar';
import Home from '@/components/ui/icon/Home';
import Smiley from '@/components/ui/icon/Smiley';
import Mobile from '@/components/ui/icon/Mobile';
import Mail from '@/components/ui/icon/Mail';

export default function Hero() {
  return (
    <aside
      // bg-bgColor dark:bg-darkBgColor
      className={`sticky top-0 flex flex-col justify-between`}
    >
      <div className="flex flex-shrink basis-auto flex-col items-stretch justify-center self-auto p-0">
        <div className="mx-4">
          <div className="border-borderColor dark:border-darkBorderColor m-0 mt-8 ml-4 box-border flex w-40 overflow-hidden rounded border">
            <Image
              className="h-full w-full p-4 pb-0"
              src={HeroImages}
              alt="프로필 이미지"
              priority
            />
          </div>
        </div>
        <div className="mx-4">
          {heroData.map((item) => (
            <ol
              key={item.name}
              className="font-noto text-textColor dark:text-darkTextColor mx-4 my-0 flex shrink-0 basis-auto flex-col items-stretch justify-between self-auto pt-4 pb-6"
            >
              <li className="leading-8">
                <h2 className="flex items-center">
                  <i className="mr-2 inline-block">
                    <Person />
                  </i>
                  {item.name}
                </h2>
              </li>
              <li className="leading-8">
                <time className="flex items-center">
                  <i className="mr-2 inline-block">
                    <Calendar />
                  </i>
                  {item.birth}
                </time>
              </li>
              <li className="leading-8">
                <address className="flex items-center">
                  <i className="mr-2 inline-block">
                    <Home />
                  </i>
                  {item.address}
                </address>
              </li>
              <li className="leading-8">
                <p className="flex items-center">
                  <i className="mr-2 inline-block">
                    <Smiley />
                  </i>
                  {item.militaryService}
                </p>
              </li>
              <li className="leading-8">
                <p className="flex items-center">
                  <i className="mr-2 inline-block">
                    <Mobile />
                  </i>
                  {item.cellPhone}
                </p>
              </li>
              <li className="leading-8">
                <p className="flex items-center">
                  <i className="mr-2 inline-block">
                    <Mail />
                  </i>
                  {item.eMail}
                </p>
              </li>
            </ol>
          ))}
        </div>
      </div>
    </aside>
  );
}
