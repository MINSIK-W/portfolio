export interface ExperienceDate {
  start: string;
  end: string;
}

export interface ExperienceItem {
  title: string; // 회사
  date: ExperienceDate[]; // 시작-종료 날짜
  job: string; // 직무
  work: string; // 수행한 작업
  skill: string[]; // 사용한 기술 ID 목록
  companyUrl: string; // 기업 홈페이지
  companyTime: string; // 근무 시간
  // detailPage?: React.ComponentType<any>; // 세부 페이지
}
