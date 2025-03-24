import React from 'react';
import Header from '@/app/(main)/project/component/Header';
import Navigation from '@/app/(main)/project/component/Navigation';

interface AboutLayoutProps {
  children: React.ReactNode;
}
export default function ProjectLayout({ children }: AboutLayoutProps) {
  return (
    <section className="bg-bgColor2 dark:bg-darkBgColor2 relative h-full">
      <Header />

      <div className="flex h-[calc(100vh-125px)]">
        <div className="border-bgColor4 dark:border-darkBgColor4 bg-bgColor dark:bg-darkBgColor w-20 border-r">
          <Navigation />
        </div>
        {children}
      </div>
    </section>
  );
}
