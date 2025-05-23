import { SideProjectItem } from '@/types/sideProject';
import Clock from '@/components/ui/icon/Clock';
import Person from '@/components/ui/icon/Person';
import Stack from '@/components/ui/icon/Stack';
import Number1 from '@/components/ui/icon/project/Number1';
import Number2 from '@/components/ui/icon/project/Number2';
import Number3 from '@/components/ui/icon/project/Number3';
import CircleNumber1 from '@/components/ui/icon/project/CircleNumber1';
import CircleNumber2 from '@/components/ui/icon/project/CircleNumber2';
import CircleNumber3 from '@/components/ui/icon/project/CircleNumber3';

export const sideProjectsData: SideProjectItem[] = [
  {
    exposure: true,
    toggle: [{ switch: true, date: 2025 }],
    path: 'NextJS_Portfolio',
    pathLive: '',
    githubUrl: 'https://github.com/MINSIK-W/portfolio',
    title: 'Next.js Portfolio',
    note: [
      'NextJS, React, TypeScript로 구축된 포트폴리오 애플리케이션으로, 제 업무 경험과 학습한 프로젝트 및 구성 요소를 보여줍니다.',
    ],
    intro: [
      {
        details: [
          { title: '기간', icon: Clock, detail: '2주' },
          { title: '팀 규모', icon: Person, detail: '개인 프로젝트' },
          { title: '유형', icon: Stack, detail: '포트폴리오' },
        ],
        description: [
          '이 포트폴리오 애플리케이션은 저의 직무 경험, 사이드 프로젝트, 재사용 가능한 컴포넌트, 그리고 블로그 글을 인터랙티브하고 시각적으로 매력적인 방식으로 보여주기 위해 제작되었습니다.',
          '단순히 작업물을 나열하는 것뿐만 아니라, React, TypeScript 등 최신 UI 디자인을 활용한 제 역량을 효과적으로 전달할 수 있는 프로젝트를 만들고 싶었습니다.',
          '애플리케이션은 다양한 카테고리를 탐색할 수 있는 내비게이션 시스템을 갖추고 있어 방문자가 여러 유형의 콘텐츠를 쉽게 둘러볼 수 있습니다. 또한',
          '각 카테고리는 특정 콘텐츠 유형에 최적화된 개별 레이아웃과 프레젠테이션 스타일을 적용하여 보다 효과적으로 내용을 전달할 수 있도록 구성되었습니다.',
        ],
      },
    ],
    technologies: ['html', 'css', 'typescript', 'react', 'tailwind', 'next'],
    features: [
      {
        title: '카테고리 네비게이션',
        icon: Number1,
        detail: 'Works, Side Projects, Components, Blog 등 게시물을 손쉽게 탐색할 수 있습니다.',
      },
      {
        title: '라이트 모드 지원',
        icon: Number2,
        detail: '라이트 모드와 다크 모드 간 전환을 위한 테마 스위처를 추가합니다.',
      },
      {
        title: '컴포넌트 모음',
        icon: Number3,
        detail: '코드 예제가 포함된 인터랙티브 컴포넌트 라이브러리',
      },
    ],

    challenges: [
      '유연하고 재사용 가능한 컴포넌트 시스템 만들기',
      '직관적인 네비게이션 시스템 구현하기',
      '일관된 시각적 언어 디자인하기',
    ],
    learnings: [
      '고급 React 컴포넌트 구성 패턴',
      '복잡한 UI 상호작용을 위한 상태 관리',
      '포트폴리오 발표를 위한 반응형 디자인 기법',
    ],
    improvement: [
      {
        title: '반응형 디자인',
        icon: CircleNumber1,
        detail: '모든 장치에서 최적화된 보기 경험을 제공합니다.',
      },
      {
        title: '필터링 및 검색',
        icon: CircleNumber2,
        detail: '모든 콘텐츠 유형에 대해 고급 필터링 및 검색 기능을 구현합니다',
      },
      {
        title: '애니메이션 개선',
        icon: CircleNumber3,
        detail: '사용자 경험을 향상시키기 위해 더 섬세한 애니메이션과 전환 효과를 추가합니다.',
      },
    ],
  },
  {
    exposure: true,
    toggle: [{ switch: true, date: 2025 }],
    path: 'SemanticMarkup',
    pathLive: 'https://minsik-w.github.io/Semantic-Markup_1/',
    githubUrl: 'https://github.com/MINSIK-W/Semantic-Markup_1',
    title: 'Semantic Markup',
    note: ['순수 HTML5 와 CSS3 로만 만들어진 시멘틱 마크업 페이지입니다.'],
    intro: [
      {
        details: [
          { title: '기간', icon: Clock, detail: '1일' },
          { title: '팀 규모', icon: Person, detail: '개인 프로젝트' },
          { title: '유형', icon: Stack, detail: '포트폴리오' },
        ],
        description: [
          '이 프로젝트는 HTML5와 CSS3의 기초부터 구성 원칙까지 철저히 반영한 시멘틱 구조를 구현한 작업입니다.',
          'CSS는 모듈화 방식으로 reset, colors, typography, layout, style, animation, responsive 등 총 7개의 파일로 분리하여 main.css 에 import 하였습니다.',
          '접근성과 유지보수성을 높이기 위한 시멘틱 태그와 구조적 설계, 그리고 반응형 웹 구현까지 고려하여 작업하였습니다.',
        ],
      },
    ],
    technologies: ['html', 'css'],
    features: [
      {
        title: '시멘틱 구조',
        icon: Number1,
        detail:
          'header, main, section, footer 등 HTML5 시멘틱 태그 기반으로 구성되어 의미 있는 마크업 구조를 제공합니다.',
      },
      {
        title: '모듈형 CSS 설계',
        icon: Number2,
        detail:
          'CSS를 기능별로 나누어 reset, layout, colors, typography, animations 등으로 분리하여 유지보수와 확장성을 확보했습니다.',
      },
      {
        title: '반응형 레이아웃',
        icon: Number3,
        detail:
          'responsive.css를 통해 다양한 해상도(480px, 768px, 1024px, 1280px 이상)에 대응하도록 설계되었습니다.',
      },
    ],
  },
];
