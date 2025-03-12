import { StackSymbolItems } from '@/types/symbol';
import Eslint from '@/components/ui/symbol/Eslint';
import Figma from '@/components/ui/symbol/Figma';
import Illustrator from '@/components/ui/symbol/Illustrator';
import Intellij from '@/components/ui/symbol/Intellij';
import Vite from '@/components/ui/symbol/Vite';
import Postman from '@/components/ui/symbol/Postman';
import Npm from '@/components/ui/symbol/Npm';
import Webpack from '@/components/ui/symbol/Webpack';
import Yarn from '@/components/ui/symbol/Yarn';
import Webstorm from '@/components/ui/symbol/Webstorm';
import Photoshop from '@/components/ui/symbol/Photoshop';
import Xd from '@/components/ui/symbol/Xd';

export const ToolsSymbolData: StackSymbolItems = {
  type: 'stack',
  label: 'Tools',
  items: {
    eslint: {
      show: true,
      title: 'ESLint',
      icon: Eslint,
    },
    vite: {
      show: true,
      title: 'Vite',
      icon: Vite,
    },
    postman: {
      show: true,
      title: 'Postman',
      icon: Postman,
    },
    npm: {
      show: true,
      title: 'npm',
      icon: Npm,
    },
    yarn: {
      show: true,
      title: 'Yarn',
      icon: Yarn,
    },
    webpack: {
      show: true,
      title: 'Webpack',
      icon: Webpack,
    },
    webstorm: {
      show: true,
      title: 'WebStorm',
      icon: Webstorm,
    },
    intellij: {
      show: true,
      title: 'IntelliJ IDEA',
      icon: Intellij,
    },
    figma: {
      show: true,
      title: 'Figma',
      icon: Figma,
    },
    photoshop: {
      show: true,
      title: 'Photoshop',
      icon: Photoshop,
    },
    illustrator: {
      show: true,
      title: 'Illustrator',
      icon: Illustrator,
    },
    xd: {
      show: true,
      title: 'Xd',
      icon: Xd,
    },
  },
};
