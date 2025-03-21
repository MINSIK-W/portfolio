import React from 'react';

export interface ExperienceProject {
  icon: React.ComponentType<any>;
  title: string;
  content: string;
}
export interface ExperienceInfo {
  overview: string[]; // 개요
  achievements: string[]; // 업적
  technologies: string[]; // 종료 날짜
  responsibilities: string[]; // 책무
}
export interface ExperienceDate {
  start: string; //시작 날짜
  end: string; // 종료 날짜
}

export interface ExperienceItem {
  title: string; // 회사
  date: ExperienceDate[]; // 시작-종료 날짜
  job: string; // 직무
  work: string; // 수행한 작업
  skill: string[]; // 사용한 기술 ID 목록
  companyUrl: string; // 기업 홈페이지
  companyTime: string; // 근무 시간
  info: ExperienceInfo[];
  project: ExperienceProject[];
  // detailPage?: React.ComponentType<any>; // 세부 페이지
}
