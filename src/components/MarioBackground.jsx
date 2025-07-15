// src/components/MarioBackground.jsx
import React, { useState, useEffect } from 'react';
import TopBar from './TopBar';

function MarioBackground({ scrollProgress }) { 
  const marioImageSrc = '/mario-standing.png'; // 마리오 이미지는 항상 standing
  const [marioXPosition, setMarioXPosition] = useState(0); // 마리오 X축 위치 (px) - 초기값 0 (맨 왼쪽)

  useEffect(() => {
    // ✅ 오직 스크롤 진행도에 따라 마리오 위치 업데이트
    const marioWidth = window.innerWidth * 0.05; 
    const maxMarioX = window.innerWidth - marioWidth; // 화면 너비 - 마리오 너비
    const newX = scrollProgress * maxMarioX;
    setMarioXPosition(newX);
  }, [scrollProgress]);


  return (
    <div className="mario-background-container">
      <TopBar />
      <div className="game-area">
        <div className="ground"></div>
        
        {/* ✅ 구름 텍스트 추가 */}
        <div className="cloud-text">
          프론트엔드 개발자<br />
          정영교<br />
          PORTFOLIO
        </div>

        {/* ✅ 마리오 블록 추가 (순서 및 타입 변경) */}
        <div className="mario-blocks-container">
          {/* 1번: 갈색 일반박스 */}
          <div className="mario-block-item brown-block"></div>
          {/* 2번: 미스테리박스 */}
          <div className="mario-block-item mystery-box">
            <img src="/mario-mystery-box.png" alt="Mystery Box" />
          </div>
          {/* 3번: 갈색 일반박스 */}
          <div className="mario-block-item brown-block"></div>
          {/* 4번: 갈색 일반박스 */}
          <div className="mario-block-item brown-block"></div>
        </div>

        {/* ✅ img 태그로 마리오 렌더링 */}
        <img 
          src={marioImageSrc} 
          alt="Mario" 
          className="mario-char" 
          style={{ transform: `translateX(${marioXPosition}px)` }} 
        />
      </div>
    </div>
  );
}

export default MarioBackground;