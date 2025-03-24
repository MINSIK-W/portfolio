'use client';
import React from 'react';
import BackgroundTyping from '@/components/BackgroundTyping';

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-BgColor2 dark:bg-darkBgColor2 relative flex h-full w-full overflow-hidden select-none">
      {children}
      <BackgroundTyping />
    </div>
  );
}
