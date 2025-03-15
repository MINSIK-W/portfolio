import React from 'react';
import Header from '@/app/project/component/Header';
import Navigation from '@/app/project/component/Navigation';

interface AboutLayoutProps {
  children: React.ReactNode;
}
export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    // <section className="bg-bgColor2 dark:bg-darkBgColor2 relative grid grid-cols-12 grid-rows-2 gap-4">
    <section className="bg-bgColor2 dark:bg-darkBgColor2 relative">
      <Header />
      <div className="flex">
        <div className="">
          <Navigation />
        </div>
        <div className="grid grid-cols-12 gap-1 bg-amber-700">{children}</div>
      </div>
    </section>
  );
}
