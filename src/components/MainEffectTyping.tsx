import { useEffect, useState } from 'react';
import { mainEffectTypingData } from '@/data/index/mainEffectTypingData';

export default function MainEffectTyping() {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index === mainEffectTypingData[0].subTyping.length) return;

    if (subIndex === mainEffectTypingData[0].subTyping[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1000); // 지우기 전 지연 시간 추가
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((index + 1) % mainEffectTypingData[0].subTyping.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex(subIndex + (isDeleting ? -1 : 1));
      },
      isDeleting ? 50 : 100, // 타이핑할 때는 100ms, 지울 때는 50ms
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  useEffect(() => {
    setCurrentText(mainEffectTypingData[0].subTyping[index].substring(0, subIndex));
  }, [subIndex, index]);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => {
      setBlink(!blink);
    }, 500);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);
  return (
    <div>
      <span>&nbsp;</span>
      <span className="text-Green after:animate-blink font-roboto after:bg-Green relative text-2xl after:absolute after:-right-5 after:bottom-1.5 after:inline-block after:h-1 after:w-4">
        {currentText}
      </span>
    </div>
  );
}
