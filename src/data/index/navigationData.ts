import { NavigationItems } from '@/types';
import Book from '@/components/ui/icon/Book';
import Works from '@/components/ui/icon/Works';
import Components from '@/components/ui/icon/Components';
import Stack from '@/components/ui/icon/Stack';

export const navigationData: NavigationItems[] = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  {
    title: 'Project',
    path: '/project/content/works',
    subItems: [
      { icon: Works, title: 'Works', path: '/project/content/works' },
      { icon: Stack, title: 'Side Project', path: '/project/content/sideproject' },
      { icon: Components, title: 'Components', path: '/project/content/components' },
      { icon: Book, title: 'Blog', path: '/project/content/blog' },
    ],
  },
  { title: 'Contact', path: '/contact' },
];
