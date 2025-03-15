import { NavigationItems } from '@/types/index';
import Calendar from '@/components/ui/icon/Calendar';
import Home from '@/components/ui/icon/Home';
import Moon from '@/components/ui/icon/Moon';
import Sun from '@/components/ui/icon/Sun';
import Book from '@/components/ui/icon/Book';
import Works from '@/components/ui/icon/Works';
import Components from '@/components/ui/icon/Components';
import Stack from '@/components/ui/icon/Stack';

export const navigationData: NavigationItems[] = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  {
    title: 'Project',
    path: '/project',
    subItems: [
      { icon: Works, title: 'Works', path: '/project/content/works' },
      { icon: Stack, title: 'Side Project', path: '/project/sideProject' },
      { icon: Components, title: 'Components', path: '/project/components' },
      { icon: Book, title: 'Blog', path: '/project/blog' },
    ],
  },
  { title: 'Contact', path: '/contact' },
];
