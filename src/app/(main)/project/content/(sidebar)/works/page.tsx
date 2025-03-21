'use client';
import React, { useState, useMemo, useCallback } from 'react';
import { experienceData } from '@/data/experienceData';

import Category from '@/app/(main)/project/component/Category';
import Link from 'next/link';
import CompanyLink from '@/components/ui/icon/CompanyLink';
import Calendar from '@/components/ui/icon/Calendar';
import Clock from '@/components/ui/icon/Clock';
import { symbolData } from '@/data/symbol/SymbolData';
import { findSymbolItem } from '@/utils/symbolUtils';
import CheckCircle from '@/components/ui/icon/CheckCircle';
import Right from '@/components/ui/icon/Right';

export default function WorksPage() {
  const [selectedTitle, setSelectedTitle] = useState<string>(
    experienceData.length > 0 ? experienceData[0].title : '',
  );

  // 카테고리 항목 목록 생성
  const items = useMemo(() => experienceData.map((item) => item.title), []);

  // 선택 핸들러
  const handleSelect = useCallback((title: string) => {
    setSelectedTitle(title);
  }, []);

  // 선택된 항목의 데이터 찾기
  const selectedItem = useMemo(() => {
    return experienceData.find((item) => item.title === selectedTitle);
  }, [selectedTitle]);

  return (
    <>
      <Category items={items} onSelect={handleSelect} initialSelected={selectedTitle} />
      <div className="col-span-10 overflow-y-auto">
        {selectedItem && (
          <div className={`mx-auto w-3/4 space-y-12 p-6`}>
            <section className="bg-bgColor font-noto dark:bg-darkBgColor relative rounded-md p-8">
              <div className="mb-4 flex items-center gap-2">
                <h2 className="text-textColor dark:text-darkTextColor text-3xl font-bold">
                  {selectedItem.title}
                </h2>
                {selectedItem.companyUrl ? (
                  <Link
                    className="text-Blue hover:dark:text-defaultColor hover:text-darkDefaultColor text-2xl"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={selectedItem.companyUrl}
                  >
                    <i>
                      <CompanyLink />
                    </i>
                  </Link>
                ) : null}
              </div>
              <div className="text-subColor dark:text-darkSubColor mb-1">{selectedItem.work}</div>
              <div className="text-subColor font-rajdhani dark:text-darkSubColor flex items-center gap-3 text-lg">
                <div className="flex items-center gap-2">
                  <i>
                    <Calendar />
                  </i>
                  <span>
                    {selectedItem.date[0].start} ~ {selectedItem.date[0].end}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <i>
                    <Clock />
                  </i>
                  <span>{selectedItem.companyTime}</span>
                </div>
              </div>
            </section>
            <section className={`text-textColor dark:text-darkTextColor`}>
              <h3 className="font-roboto mb-3 text-2xl uppercase">overview</h3>
              {selectedItem.info[0].overview.map((item, index) => (
                <div className={`font-noto`} key={index}>
                  {item}
                </div>
              ))}
            </section>
            <section className={`text-textColor dark:text-darkTextColor`}>
              <h3 className="font-roboto mb-3 text-2xl uppercase">key achievements</h3>
              <ul className="space-y-2">
                {selectedItem.info[0].achievements.map((item, index) => (
                  <li
                    className={`font-noto border-bgColor4 dark:border-darkBgColor4 flex items-center gap-2 rounded-sm border p-4 shadow-sm`}
                    key={index}
                  >
                    <i className="text-Green">
                      <CheckCircle />
                    </i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="text-textColor dark:text-darkTextColor grid grid-cols-2 gap-2">
              <div>
                <h3 className="font-roboto mb-3 text-2xl uppercase">technologies</h3>
                <ul className="font-rajdhani mb-2 flex flex-wrap items-center gap-1">
                  {selectedItem.skill.map((techKey) => {
                    const tech = findSymbolItem(symbolData, techKey);
                    if (tech) {
                      const Icon = tech.icon;
                      return (
                        <li
                          key={techKey}
                          className="bg-defaultColor dark:bg-darkDefaultColor flex gap-1 rounded-sm px-2 py-2"
                        >
                          <i className={`w-6`}>
                            <Icon />
                          </i>
                          <span className="">{tech.title}</span>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
                <ul className={`font-rajdhani mb-2 flex flex-wrap items-center gap-1`}>
                  {selectedItem.info[0].technologies.map((techKey) => (
                    <li
                      key={techKey}
                      className="bg-defaultColor dark:bg-darkDefaultColor flex gap-1 rounded-sm px-2 py-2"
                    >
                      {techKey}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-roboto mb-3 text-2xl uppercase">responsibilities</h3>
                <ul className={`font-noto flex flex-col flex-wrap gap-3 text-base`}>
                  {selectedItem.info[0].responsibilities.map((techKey) => (
                    <li key={techKey} className="flex items-center gap-1">
                      <i className="text-Green">
                        <Right />
                      </i>
                      {techKey}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <section className={`text-textColor dark:text-darkTextColor`}>
              <h3 className="font-roboto mb-3 text-2xl uppercase">project highlights</h3>
              <ul className="grid gap-6 md:grid-cols-2">
                {selectedItem.project.map((item, index) => {
                  const Icon = item.icon;
                  const colors = [
                    'bg-customOrange text-Orange',
                    'bg-customBlue text-Blue',
                    'bg-customIndigo text-Indigo',
                    'bg-customPurple text-Purple',
                  ];
                  const iconBackgroundClass = colors[index % colors.length];
                  return (
                    <li
                      key={index}
                      className="border-bgColor4 dark:border-darkBgColor4 font-noto flex flex-col rounded-sm border px-4 py-6 shadow-sm"
                    >
                      <i
                        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-sm border text-2xl ${iconBackgroundClass}`}
                      >
                        {Icon && <Icon />}
                      </i>
                      <h4 className="mb-2 text-lg font-semibold">{item.title}</h4>
                      <p className="text-subColor dark:text-darkSubColor text-sm break-keep">
                        {item.content}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        )}
      </div>
    </>
  );
}
