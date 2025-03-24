import { useContext } from 'react';
import { ThemeContext } from '@/components/ThemeProvider';

// ThemeProvider 컨텍스트를 쉽게 사용하기 위한 커스텀 훅
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('"useTheme"는 반드시 "ThemeProvider" 내에서 사용💥');
  }
  return context;
}
