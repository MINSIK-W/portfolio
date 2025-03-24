import React from 'react';

interface SideBarLayoutProps {
  children: React.ReactNode;
}
export default function SideBarLayout({ children }: SideBarLayoutProps) {
  return <div className="grid w-full grid-cols-12 overflow-hidden">{children}</div>;
}
