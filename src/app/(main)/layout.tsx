import type { Metadata } from 'next';
import '@/app/styles/globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';

export const metadata: Metadata = {
  title: 'WangMinsik Next.js Portfolio',
  description: 'Next.js로 만든 개인 포트폴리오 사이트입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body data-theme="dark" className={`absolute h-full w-full`}>
        <ThemeProvider>
          <div className={`flex min-w-[1530px] flex-col overflow-hidden`}>
            <Header />
            <main className={`relative h-[calc(100vh-88px)] w-full overflow-y-auto`}>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
