import { SymbolItems } from '@/types/symbol';
import Html from '@/components/ui/symbol/Html';
import Css from '@/components/ui/symbol/Css';
import Javascript from '@/components/ui/symbol/Javascript';
import Reacts from '@/components/ui/symbol/Reacts';
import Typescript from '@/components/ui/symbol/Typescript';
import Sass from '@/components/ui/symbol/Sass';
import TailwindCSS from '@/components/ui/symbol/TailwindCSS';
import Bootstrap from '@/components/ui/symbol/Bootstrap';
import Next from '@/components/ui/symbol/Next';
import Styledcomponents from '@/components/ui/symbol/Styledcomponents';
import Vue from '@/components/ui/symbol/Vue';
import Jquery from '@/components/ui/symbol/Jquery';
import Redux from '@/components/ui/symbol/Redux';

export const FrontEndSymbolData: SymbolItems = {
  label: 'Front-end',
  items: {
    html: {
      show: true,
      title: 'HTML5',
      icon: Html,
    },
    css: {
      show: true,
      title: 'CSS3',
      icon: Css,
    },
    javascript: {
      show: true,
      title: 'JavaScript',
      icon: Javascript,
    },
    typescript: {
      show: true,
      title: 'TypeScript',
      icon: Typescript,
    },
    react: {
      show: true,
      title: 'React',
      icon: Reacts,
    },
    sass: {
      show: true,
      title: 'Sass',
      icon: Sass,
    },
    tailwind: {
      show: true,
      title: 'TailwindCSS',
      icon: TailwindCSS,
    },
    bootstrap: {
      show: true,
      title: 'Bootstrap',
      icon: Bootstrap,
    },
    next: {
      show: true,
      title: 'Next.js',
      icon: Next,
    },
    styledcomponents: {
      show: true,
      title: 'Styled-Components',
      icon: Styledcomponents,
    },
    vue: {
      show: true,
      title: 'Vue',
      icon: Vue,
    },
    jquery: {
      show: true,
      title: 'jQuery',
      icon: Jquery,
    },
    redux: {
      show: false,
      title: 'Redux',
      icon: Redux,
    },
  },
};
