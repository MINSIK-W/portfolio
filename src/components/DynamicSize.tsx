'use client';
import React, { useState, useEffect } from 'react';

interface DynamicSizeProps {
  children: React.ReactNode;
  targetHeight: number;
  targetWidth: number;
}

export default function DynamicSize({ targetHeight, targetWidth, children }: DynamicSizeProps) {
  const [dynamicHeight, setDynamicHeight] = useState(targetHeight || '');
  const [dynamicWidth, setDynamicWidth] = useState(targetWidth || '');

  useEffect(() => {
    const handleResize = () => {
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;

      // targetHeight가 0일 경우에는 0으로 설정, 그렇지 않으면 화면 크기에 비례하여 높이 계산
      const newHeight =
        targetHeight === -1
          ? 'auto'
          : Math.round(targetHeight + (screenHeight - 1000) * (targetHeight / 1000));
      const newWidth =
        targetWidth === -1
          ? 'auto'
          : Math.round(targetWidth + (screenWidth - 1000) * (targetWidth / 1000));

      setDynamicHeight(newHeight);
      setDynamicWidth(newWidth);
    };

    handleResize(); // 처음 렌더링 될 때 높이 계산

    window.addEventListener('resize', handleResize); // 화면 크기 변경 시 높이 계산

    return () => {
      window.removeEventListener('resize', handleResize); // 클린업: 이벤트 리스너 제거
    };
  }, [targetHeight, targetWidth]);

  return (
    <div
      style={{
        height: `${dynamicHeight}px`,
        width: `${dynamicWidth}px`,
      }}
    >
      {children}
    </div>
  );
}
