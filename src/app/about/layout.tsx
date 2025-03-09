import React from 'react';
import Hero from '@/app/about/components/Hero';

interface AboutLayoutProps {
  children: React.ReactNode;
}
export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <section className="relative grid grid-cols-12 gap-4">
      <div className="bg-bgColor dark:bg-darkBgColor sticky col-span-2">
        <Hero />
      </div>
      <div className="col-span-10">{children}</div>
    </section>
  );
}
