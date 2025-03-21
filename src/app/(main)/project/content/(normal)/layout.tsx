import React from 'react';

interface AboutLayoutProps {
  children: React.ReactNode;
}
export default function NormalLayout({ children }: AboutLayoutProps) {
  return (
    <div className="flex h-full w-full overflow-hidden">
      <div className={`w-full overflow-y-auto p-6`}>{children}</div>
    </div>
  );
}
