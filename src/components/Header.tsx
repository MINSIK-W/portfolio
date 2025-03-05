'use client';
import React from 'react';
import Link from 'next/link';

import Navigation from '@/components/Navigation';

export default function Header() {
  return (
    <header className="inset-shadow-a dark:inset-darkShadow-a text-textColor dark:text-darkTextColor bg-bgColor dark:bg-darkBgColor relative z-10 flex h-[48px] flex-[0_0_48px] flex-row items-stretch p-3 py-0 select-none">
      <div className="relative flex grow-1 flex-row items-center justify-between">
        <Link onClick={() => window.location.reload()} href="/">
          <div className="font-noto group origin-bottom-left text-base font-black duration-300 ease-in hover:after:scale-x-100">
            <h1 className="flex flex-row items-center">
              &lt;
              <span className="mx-1 my-0">WangMinsik</span>
              <span className="text-Green ease-[cubic-bezier(0.4, 0, 0.2, 1)] m-0 max-w-0 overflow-hidden whitespace-nowrap opacity-0 duration-300 group-hover:mx-1 group-hover:my-0 group-hover:max-w-full group-hover:overflow-visible group-hover:opacity-100">
                onClick=&#123;reload&#125;
              </span>
              <span className="text-Red mx-1 my-0">/</span>
              &gt;
            </h1>
          </div>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
