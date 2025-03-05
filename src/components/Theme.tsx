'use client'; // Next.js에서 클라이언트 컴포넌트로 동작하도록 설정

import React, { createContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark'; // 사용할 테마 타입 정의

// 테마 컨텍스트 타입 정의
type ThemeContextType = {
  theme: Theme; // 현재 테마 상태
  toggleTheme: () => void; // 테마 변경 함수
};

// 테마 컨텍스트 생성 (초기값은 undefined)
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider 컴포넌트: 테마 상태를 관리하고 하위 컴포넌트에 제공
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark'); // 기본 테마 설정

  useEffect(() => {
    // 테마가 localStorage에 저장되어 있는지 확인하고, 있다면 해당 테마로 설정
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.dataset.theme = savedTheme; // body 태그에 data-theme 속성 추가
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'; // 현재 테마를 반대로 변경
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // 변경 테마 localStorage에 저장
    document.body.dataset.theme = newTheme; // body 태그 data 속성 업데이트
  };

  // 테마 상태와 테마 변경 함수를 컨텍스트로 제공
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
