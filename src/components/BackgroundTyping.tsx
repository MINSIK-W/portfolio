import { useEffect, useRef } from 'react';
import { mainEffectTypingData } from '@/data/index/mainEffectTypingData';

export default function BackgroundTyping() {
  // 인터벌 ID를 저장하기 위한 ref 사용 (컴포넌트 리렌더링에도 값 유지)
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  // 배경 요소에 대한 ref 추가
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ref 사용
    const background = backgroundRef.current;
    if (!background) return;

    // 애니메이션 클래스 추가 (CSS로 분리)
    const fadeInOutClass = 'animate-fall';
    const fontSizes = ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl'];
    const xValue = [
      'left-0',
      'left-0.5',
      'left-1',
      'left-1.5',
      'left-2',
      'left-2.5',
      'left-3',
      'left-3.5',
      'left-4',
      'left-5',
      'left-6',
      'left-7',
      'left-8',
      'left-9',
      'left-10',
      'left-11',
      'left-12',
      'left-14',
      'left-16',
      'left-20',
      'left-24',
      'left-28',
      'left-32',
      'left-36',
      'left-40',
      'left-44',
      'left-48',
      'left-52',
      'left-56',
      'left-60',
      'left-64',
      'left-72',
      'left-80',
      'left-96',
      'left-auto',
      'left-1/2',
      'left-1/3',
      'left-2/3',
      'left-1/4',
      'left-2/4',
      'left-3/4',
      'left-full',
      'right-0',
      'right-0.5',
      'right-1',
      'right-1.5',
      'right-2',
      'right-2.5',
      'right-3',
      'right-3.5',
      'right-4',
      'right-5',
      'right-6',
      'right-7',
      'right-8',
      'right-9',
      'right-10',
      'right-11',
      'right-12',
      'right-14',
      'right-16',
      'right-20',
      'right-24',
      'right-28',
      'right-32',
      'right-36',
      'right-40',
      'right-44',
      'right-48',
      'right-52',
      'right-56',
      'right-60',
      'right-64',
      'right-72',
      'right-80',
      'right-96',
      'right-auto',
      'right-1/2',
      'right-1/3',
      'right-2/3',
      'right-1/4',
      'right-2/4',
      'right-3/4',
      'right-full',
    ];
    const yValue = [
      'top-[0%]',
      'top-[10%]',
      'top-[20%]',
      'top-[30%]',
      'top-[40%]',
      'top-[50%]',
      'top-[60%]',
      'top-[70%]',
      'top-[80%]',
      'top-[90%]',
      'top-[100%]',
      'bottom-[0%]',
      'bottom-[10%]',
      'bottom-[20%]',
      'bottom-[30%]',
      'bottom-[40%]',
      'bottom-[50%]',
      'bottom-[60%]',
      'bottom-[70%]',
      'bottom-[80%]',
      'bottom-[90%]',
      'bottom-[100%]',
    ];
    const opacityValue = ['opacity-30', 'opacity-20', 'opacity-10', 'opacity-0'];
    // 코드 생성 함수
    function createCode(text: string) {
      const code = document.createElement('p');
      code.textContent = text;
      const randomSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];
      const randomX = xValue[Math.floor(Math.random() * xValue.length)];
      const randomY = yValue[Math.floor(Math.random() * yValue.length)];
      const randomOpacity = opacityValue[Math.floor(Math.random() * opacityValue.length)];

      code.classList.add(
        'text-Green',
        'whitespace-pre-wrap',
        'break-words',
        'absolute',
        randomOpacity,
        randomSize,
        randomX,
        randomY,
        fadeInOutClass,
      );
      code.style.animationDuration = `${5 + Math.random() * 5}s`;

      return code;
    }

    // 코드 추가 함수
    function addCode() {
      if (!background) return;

      // 데이터 존재 확인
      if (!mainEffectTypingData?.[0]?.backgroundTyping) {
        console.error('배경 타이핑 데이터가 없습니다');
        return;
      }

      mainEffectTypingData[0].backgroundTyping.forEach((text) => {
        const code = createCode(text);
        background.appendChild(code);

        // 메모리 누수 방지를 위한 이벤트 리스너 정리
        const handleAnimationEnd = () => {
          if (background.contains(code)) {
            background.removeChild(code);
          }
          code.removeEventListener('animationend', handleAnimationEnd);
        };

        code.addEventListener('animationend', handleAnimationEnd);
      });
    }

    // 인터벌 관리 함수
    function startInterval() {
      if (intervalRef.current === null) {
        // 초기 코드 즉시 추가 (대기 없이)
        addCode();
        intervalRef.current = setInterval(addCode, 3000);
      }
    }

    function clearExistingInterval() {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    // 가시성 변경 핸들러
    function handleVisibilityChange() {
      if (document.hidden) {
        clearExistingInterval();
      } else {
        startInterval();
      }
    }

    // 이벤트 리스너 등록
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 초기 실행
    startInterval();

    // 클린업 함수
    return () => {
      clearExistingInterval();
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      // 남아있는 모든 코드 요소 제거
      if (background) {
        const codeElements = background.querySelectorAll(`.${fadeInOutClass}`);
        codeElements.forEach((element) => {
          background.removeChild(element);
        });
      }
    };
  }, []);
  return (
    <div
      id="main-background"
      ref={backgroundRef}
      className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden"
    ></div>
  );
}
