import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 스크롤 위치에 따라 버튼 표시 가능 여부 결정
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsHovered(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // 클릭 핸들러: 버튼이 숨어있으면 나타내고, 나타나있으면 맨 위로 스크롤
  const handleClick = () => {
    if (!isVisible) {
      return;
    }

    if (!isHovered) {
      // 버튼이 숨어있을 때: 나타내기
      setIsHovered(true);
      // 기존 타이머가 있으면 클리어
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      // 3초 후 자동으로 숨기기
      timeoutRef.current = setTimeout(() => {
        setIsHovered(false);
      }, 2000);
    } else {
      // 버튼이 나타나있을 때: 맨 위로 스크롤
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setIsHovered(false);
      // 타이머 클리어
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  };

  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // React 19와 react-icons 호환성을 위한 타입 단언
  const ArrowIcon = FaArrowUp as React.FC<{ className?: string }>;

  return (
    <button
      onClick={handleClick}
      className={`scroll-to-top ${isVisible ? "visible" : ""} ${
        isHovered ? "hovered" : ""
      }`}
      aria-label="Scroll to top">
      <ArrowIcon className="arrow-up-icon" />
      <span className="tooltip">Scroll To Top</span>
    </button>
  );
};

export default ScrollToTop;
