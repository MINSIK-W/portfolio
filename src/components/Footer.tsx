'use client';
import { useTheme } from '@/hooks/useTheme';
import Moon from './ui/icon/Moon';
import Sun from './ui/icon/Sun';
import { footerInfoData } from '@/data/index/footerInfoData';

export default function Footer() {
  const { theme, toggleTheme } = useTheme();
  return (
    <footer className="bg-bgColor dark:bg-darkBgColor shadow-theme-a dark:shadow-darkTheme-a text-textColor dark:text-darkTextColor z-10 flex flex-row items-center px-3 py-0 text-xs select-none">
      {footerInfoData.map((item) => (
        <p key={item.title} className="text-center">
          {item.title}
        </p>
      ))}
      <button
        onClick={toggleTheme}
        className="before:bg-borderColor relative cursor-pointer"
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <i className={theme === 'dark' ? 'text-Yellow' : 'text-Red'}>
          {theme === 'dark' ? <Moon /> : <Sun />}
        </i>
      </button>
    </footer>
  );
}
