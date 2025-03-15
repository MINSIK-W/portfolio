import React from 'react';

// 전체 심볼 데이터 구조
export interface SymbolData {
  frontend: StackSymbolItems; // 프론트엔드 카테고리
  backend: StackSymbolItems; // 백엔드 카테고리
  database: StackSymbolItems; // 데이터베이스 카테고리
  devops: StackSymbolItems; // DevOps 카테고리
  tools: StackSymbolItems; // 도구 카테고리
  learning: StudySymbolItems; // 현재 학습 중인 기술 카테고리
  favorites: StudySymbolItems; // 즐겨찾는 기술 카테고리
}

// 아이템 타입
export interface BaseSymbolItem {
  show: boolean; // 표시 여부
  title: string; // 아이템 이름
  icon: React.ComponentType<any>; // 아이콘 컴포넌트
}

// 스택 타입
export interface StackSymbolItems {
  type: 'stack'; // 타입 구분
  label: string; // 이름
  // 아이콘 컴포넌트
  items: {
    [key: string]: BaseSymbolItem; // 아이콘 컴포넌트
  };
}
// 학습 타입 [아이템 타입 참조]
export interface StudySymbolItems {
  type: 'study'; // 타입 구분
  label: string; // 이름
  stack: string[]; // 참조할 기술 ID 목록
}

// 유니온 타입
export type SymbolItems = StackSymbolItems | StudySymbolItems;
// 아이템 검색 함수 타입
export type FindSymbolItem = (data: SymbolData, skillId: string) => BaseSymbolItem | null;
