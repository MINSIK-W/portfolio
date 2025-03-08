import React from 'react';

interface AboutLayoutProps {
  children: React.ReactNode;
}
export default function AboutLayout({children}:AboutLayoutProps){
  return <section className='grid relative gap-4 grid-cols-12'>
    <div className='col-span-3'>Hero</div>
    <div className='col-span-9'>{children}</div>
  </section>
};
