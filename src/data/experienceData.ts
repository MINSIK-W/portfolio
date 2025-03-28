import { ExperienceItem } from '@/types/experience';
import AppRegistration from '@/components/ui/icon/project/AppRegistration';
import UserCog from '@/components/ui/icon/project/UserCog';
import UserPlus from '@/components/ui/icon/project/UserPlus';
import Devices from '@/components/ui/icon/project/Devices';
import NotificationsActive from '@/components/ui/icon/project/NotificationsActive';
import LaptopCode from '@/components/ui/icon/project/LaptopCode';
import BrowserCheck from '@/components/ui/icon/project/BrowserCheck';
export const experienceData: ExperienceItem[] = [
  {
    title: '(주)씨엠엑스',
    date: [{ start: '2023.10', end: '2024.09' }],
    job: 'UX/UI팀 수석연구원 · Web Publisher · Front-end Developer · UI ENGINEER',
    work: '하이브리드 웹 유지보수/프론트 개발/퍼블리싱',
    skill: [
      'html',
      'css',
      'sass',
      'javascript',
      'bootstrap',
      'jquery',
      'jqueryui',
      'java',
      'intellij',
      'eclipse',
    ],
    companyUrl: 'https://www.conup.co.kr/',
    companyTime: '8 AM to 5 PM',
    info: [
      {
        overview: [
          '콘업, 아키엠, 콘보 등 다양한 건설 관련 앱 서비스의 웹 퍼블리싱과 프론트엔드 개발을 담당하였고,',
          'UX/UI 기획부터 개발까지 참여하여 크로스 브라우징 이슈 해결과 사용자 경험 개선에 주력하였습니다.',
        ],
        achievements: [
          '신규 앱 콘보 UX/UI 기획 및 개발 성공적 런칭',
          '사이트맵 페이지 추가로 고객 문의 대폭 감소',
          'IOS 크로스 브라우징 이슈 해결로 사용자 경험 개선',
          'jQuery UI Sortable을 활용한 메뉴 이동 기능 구현',
          '관리자 페이지 리뉴얼을 통한 운영 효율성 향상',
        ],
        technologies: [
          'Responsive Web',
          'Cross Browsing',
          'Web Standards',
          'Mobile Web',
          'UX/UI Planning',
        ],
        responsibilities: [
          'PC/Mobile 웹 퍼블리싱 및 프론트엔드 개발',
          'UX/UI 기획 및 디자인 제안',
          '크로스 브라우징 이슈 해결 및 최적화',
          '신규 기능 개발 및 페이지 제작',
          '웹 표준/접근성을 고려한 마크업 작성',
          '프로젝트 유지보수 및 성능 개선',
        ],
      },
    ],
    project: [
      {
        icon: AppRegistration,
        title: '신규 앱 콘보 제작',
        content: '기존 아키엠/콘업 기반으로 신규 앱 UX/UI 기획 및 개발',
      },
      {
        icon: Devices,
        title: '아키엠/콘업 리뉴얼',
        content: '신규 콘보 UX/UI 기반으로 기존 서비스 전면 리뉴얼 진행',
      },
      {
        icon: UserCog,
        title: '관리자 페이지 개선',
        content: '내부 관리자 페이지 리뉴얼 및 사용성 개선 작업 진행',
      },
      {
        icon: UserPlus,
        title: '아키엠 친구초대',
        content: '신규 친구초대 페이지 기획 및 개발 구현',
      },
    ],
  },
  {
    title: '(주)시대고시기획시대교육',
    date: [{ start: '2022.04', end: '2023.10' }],
    job: '유비즈개발부 대리 · Web Publisher · Front-end Developer',
    work: '신규 렌딩페이지 제작/유지보수/프론트 개발/퍼블리싱',
    skill: ['html', 'css', 'javascript', 'jquery', 'vue', 'php', 'intellij', 'git'],
    companyUrl: 'https://www.sdedu.co.kr/',
    companyTime: '9 AM to 6 PM',
    info: [
      {
        overview: [
          '웹 퍼블리싱과 프론트엔드 개발을 담당하며, 다양한 웹사이트의 리뉴얼과 유지보수를 수행했습니다. ',
          '사용자 경험 개선과 웹 표준을 준수하는 반응형 웹사이트 구축에 주력하였으며,',
          '특히 결제 시스템 개선과 마이페이지 리뉴얼을 통해 사용자 편의성을 크게 향상시켰습니다.',
        ],
        achievements: [
          '주문서 리뉴얼을 통한 결제 프로세스 간소화 (3단계 → 1단계)',
          '구글 애드센스 광고 이슈 발견 및 해결로 광고 수익 정상화',
          '80여개 상품 랜딩페이지 유지보수 및 리뉴얼 진행',
          'PC/모바일 푸시 알림 기능 구현으로 사용자 참여도 향상',
          '수강신청 페이지 자동화로 운영 효율성 개선',
        ],
        technologies: [
          'Responsive Web',
          'Cross Browsing',
          'Web Standards',
          'Web Accessibility',
          'SEO',
          'UI/UX',
          'Mobile Web',
        ],
        responsibilities: [
          'PC/모바일 웹사이트 퍼블리싱 및 프론트엔드 개발',
          '웹 표준/접근성을 고려한 마크업 작성',
          '반응형 웹 디자인 구현 및 크로스 브라우징 대응',
          '레거시 코드 리팩토링 및 성능 최적화',
          '신규 기능 개발 및 유지보수',
          '다양한 랜딩페이지 제작 및 관리',
        ],
      },
    ],
    project: [
      {
        icon: Devices,
        title: '시대고시 주문서 리뉴얼',
        content: '결제 프로세스 단계 간소화, 쿠폰 및 적립금 시스템 개선을 통한 사용자 경험 향상',
      },
      {
        icon: Devices,
        title: 'PC/Mobile 메인 리뉴얼',
        content: '시대고시 PC와 모바일 메인 페이지 전면 리뉴얼을 통한 사용자 인터페이스 개선',
      },
      {
        icon: Devices,
        title: 'WIN 시대로 리뉴얼',
        content: 'AI 면접 관련 페이지를 반응형으로 리뉴얼 및 지속적인 유지보수 진행',
      },
      {
        icon: NotificationsActive,
        title: '푸시 알림 시스템',
        content: 'PC/모바일 회원가입 및 마이페이지 알림 발송 설정 기능 구현',
      },
    ],
  },
  {
    title: '(유)지니집코리아',
    date: [{ start: '2019.11', end: '2021.12' }],
    job: 'IT 파트 계장 · Web Publisher · UI ENGINEER',
    work: '신규 렌딩페이지 제작/유지보수/퍼블리싱',
    skill: ['html', 'css', 'javascript', 'jquery', 'java', 'vscode', 'git'],
    companyUrl: 'https://www.geniezip.com/event/2025samiljeol.do',
    companyTime: '8 AM to 5 PM',
    info: [
      {
        overview: [
          '레거시 코드 개선과 웹 표준을 준수하는 마크업 작업을 수행했습니다.',
          '다양한 서브페이지의 리뉴얼과 유지보수를 담당하며, 사용자 경험 향상과 웹사이트 성능 개선에 주력했습니다.',
        ],
        achievements: [
          '레거시 코드 리팩토링을 통한 웹사이트 성능 최적화',
          '웹 표준 및 접근성을 고려한 마크업 구조 개선',
          '다수의 서브페이지 리뉴얼 프로젝트 성공적 완료',
          '크로스 브라우징 이슈 해결 및 호환성 개선',
          '코드 재사용성 향상을 위한 컴포넌트 모듈화',
        ],
        technologies: [
          'Responsive Web',
          'Cross Browsing',
          'Web Standards',
          'Web Accessibility',
          'SEO',
          'UI/UX',
        ],
        responsibilities: [
          '웹사이트 코드 리팩토링 및 성능 최적화',
          '서브페이지 리뉴얼 및 유지보수',
          '웹 표준/접근성을 고려한 마크업 작성',
          '크로스 브라우징 호환성 검증 및 대응',
          '코드 품질 개선 및 문서화',
          '반응형 웹 디자인 구현',
        ],
      },
    ],
    project: [
      {
        icon: LaptopCode,
        title: '코드 리팩토링',
        content: '레거시 코드 개선 및 성능 최적화를 통한 웹사이트 품질 향상',
      },
      {
        icon: Devices,
        title: '서브페이지 리뉴얼',
        content: '다수의 서브페이지 디자인 개선 및 사용자 경험 최적화',
      },
      {
        icon: LaptopCode,
        title: '웹 표준화 작업',
        content: '웹 표준 및 접근성 가이드라인에 맞춘 마크업 구조 개선',
      },
      {
        icon: BrowserCheck,
        title: 'UI/UX 개선',
        content: '사용자 중심의 인터페이스 개선 및 반응형 디자인 구현',
      },
    ],
  },
  {
    title: '(주)에스엔피토이월드',
    date: [{ start: '2017.06', end: '2019.07' }],
    job: '마케팅기획부 주임 · Web Publisher · UI ENGINEER',
    work: '신규 렌딩페이지 제작/유지보수/퍼블리싱',
    skill: ['html', 'css', 'javascript', 'jquery', 'php', 'vscode'],
    companyUrl: '',
    companyTime: '9 AM to 6 PM',
    info: [
      {
        overview: [
          'B2B/B2C 웹사이트 리뉴얼과 브랜드 소개 페이지 구축을 담당했습니다. 반응형 웹 디자인과',
          '크로스 브라우징을 고려한 마크업 작업을 수행하며, 사용자 경험 향상에 주력했습니다.',
        ],
        achievements: [
          '코튼푸드 B2C 사이트 전체 리뉴얼 프로젝트 성공적 완료',
          '소평닷컴 B2B 사이트 메인 및 서브페이지 리뉴얼',
          '브랜드 소개 페이지 반응형 웹사이트 구축',
          '크로스 브라우징 호환성 확보를 통한 접근성 개선',
          '웹 표준을 준수한 시멘틱 마크업 구현',
        ],
        technologies: [
          'Responsive Web',
          'Cross Browsing',
          'Web Standards',
          'Web Accessibility',
          'B2B/B2C',
          'UI/UX',
        ],
        responsibilities: [
          'B2C/B2B 웹사이트 퍼블리싱',
          '반응형 웹 디자인 구현',
          '웹 표준/접근성 준수 마크업',
          '크로스 브라우징 호환성 검증',
          '브랜드 페이지 디자인 구현',
          '서브페이지 제작 및 유지보수',
        ],
      },
    ],
    project: [
      {
        icon: Devices,
        title: '코튼푸드 B2C 사이트',
        content: 'B2C 메인페이지 및 서브페이지 전체 리뉴얼 구축',
      },
      {
        icon: Devices,
        title: '소평닷컴 B2B 사이트',
        content: 'B2B 메인페이지 리뉴얼 및 서브페이지 제작',
      },
      {
        icon: Devices,
        title: '브랜드 소개 페이지',
        content: '반응형 형식의 브랜드 소개 웹사이트 구축',
      },
      {
        icon: BrowserCheck,
        title: '크로스 브라우징 최적화',
        content: '다양한 브라우저 환경에서의 일관된 사용자 경험 제공',
      },
    ],
  },
  {
    title: '(주)루미스코리아',
    date: [{ start: '2015.10', end: '2017.01' }],
    job: '온라인팀 대리 · Web Publisher',
    work: '신규 렌딩페이지 제작/유지보수/퍼블리싱',
    skill: ['html', 'css', 'javascript', 'jquery', 'php', 'atom'],
    companyUrl: '',
    companyTime: '9 AM to 6 PM',
    info: [
      {
        overview: [
          '워드프레스 기반의 반응형 웹사이트 구축과 자사 홈페이지 리뉴얼을 담당했습니다.',
          '워드프레스 테마 커스터마이징과 반응형 웹 디자인을 통해 사용자 친화적인 웹사이트를 구현했습니다.',
        ],
        achievements: [
          '워드프레스 기반 홈서비스 웹사이트 성공적 구축 및 운영',
          '자사 홈페이지 전면 리뉴얼 프로젝트 완료',
          '반응형 웹 디자인 적용으로 모바일 사용성 개선',
          '워드프레스 테마 커스터마이징을 통한 독창적인 디자인 구현',
          '지속적인 유지보수를 통한 웹사이트 성능 최적화',
        ],
        technologies: ['Responsive Web', 'Cross Browsing', 'Web Standards', 'UI/UX'],
        responsibilities: [
          '워드프레스 기반 웹사이트 구축',
          '반응형 웹 디자인 구현',
          '워드프레스 테마 커스터마이징',
          '웹 표준/접근성 준수 마크업',
          '크로스 브라우징 호환성 검증',
          '지속적인 유지보수 및 개선',
        ],
      },
    ],
    project: [
      {
        icon: Devices,
        title: '홈 서비스 웹사이트',
        content: '워드프레스 기반 반응형 홈서비스 페이지 구축 및 운영',
      },
      {
        icon: Devices,
        title: '자사 홈페이지 리뉴얼',
        content: '기업 홈페이지 전면 리뉴얼 프로젝트 수행',
      },
      {
        icon: Devices,
        title: '워드프레스 커스터마이징',
        content: '워드프레스 테마 및 플러그인 커스터마이징을 통한 기능 확장',
      },
      {
        icon: BrowserCheck,
        title: '반응형 웹 최적화',
        content: '다양한 디바이스에서의 최적화된 사용자 경험 제공',
      },
    ],
  },
  {
    title: '(주)에스엔피이노베이션',
    date: [{ start: '2014.04', end: '2014.11' }],
    job: '웹에이전시팀 사원 · Web Publisher',
    work: '홈페이지 제작/유지보수/퍼블리싱',
    skill: ['html', 'css', 'javascript', 'jquery', 'php', 'atom'],
    companyUrl: '',
    companyTime: '9 AM to 6 PM',
    info: [
      {
        overview: [
          '다양한 B2B/B2C 웹사이트 구축 프로젝트를 수행했습니다.',
          'IE7 이상의 크로스브라우징 호환성을 보장하며, 사용자 친화적인 웹사이트를 구현했습니다.',
        ],
        achievements: [
          '㈜아마플랙스코리아 B2C 홈페이지 성공적 구축',
          '㈜라이트범 B2C 홈페이지 구축 및 최적화',
          '㈜대웅제약 B2B 홈페이지 리뉴얼 완료',
          '㈜스쿨N B2C 홈페이지 구축 및 서브페이지 개발',
          'IE7 이상 크로스브라우징 호환성 완벽 구현',
        ],
        technologies: [
          'Cross Browsing',
          'Web Standards',
          'UI/UX',
          'Legacy Browser Support',
          'Semantic Markup',
          'Web Accessibility',
        ],
        responsibilities: [
          'B2B/B2C 웹사이트 구축',
          '크로스브라우징 호환성 검증',
          '웹 표준/접근성 준수 마크업',
          '회원가입/게시판 시스템 구현',
          '디자인 페이지 퍼블리싱',
          '서브페이지 구축 및 최적화',
        ],
      },
    ],
    project: [
      {
        icon: Devices,
        title: '아마플랙스코리아',
        content: 'B2C 홈페이지 구축, 회원가입 및 게시판 시스템 개발',
      },
      {
        icon: Devices,
        title: '라이트범',
        content: 'PC 최적화 B2C 홈페이지 구축 프로젝트',
      },
      {
        icon: Devices,
        title: '대웅제약',
        content: 'B2B 홈페이지 리뉴얼 프로젝트 수행',
      },
      {
        icon: Devices,
        title: '스쿨N',
        content: 'B2C 홈페이지 메인 및 서브페이지 구축',
      },
    ],
  },
];
