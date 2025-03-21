import React from 'react';

interface AboutLayoutProps {
  children: React.ReactNode;
}
export default function SideBarLayout({ children }: AboutLayoutProps) {
  return <div className="grid w-full grid-cols-12 overflow-hidden">{children}</div>;
}
