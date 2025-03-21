import React from 'react';
import Hero from '@/app/(main)/about/components/Hero';

interface AboutLayoutProps {
  children: React.ReactNode;
}
export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <section className="bg-bgColor2 dark:bg-darkBgColor2 relative grid grid-cols-12 gap-4">
      <div className="bg-bgColor dark:bg-darkBgColor col-span-2">
        <Hero />
      </div>
      <div className="col-span-10 mx-auto w-2/4 py-8">{children}</div>
    </section>
  );
}
