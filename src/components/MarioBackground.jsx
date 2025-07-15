import React, { useState, useEffect } from 'react';
import TopBar from './TopBar';

function MarioBackground({ scrollProgress }) { 
  const marioImageSrc = '/mario-standing.png';
  const [marioXPosition, setMarioXPosition] = useState(0);

  useEffect(() => {
    const marioWidth = window.innerWidth * 0.05; 
    const maxMarioX = window.innerWidth - marioWidth;
    const newX = scrollProgress * maxMarioX;
    setMarioXPosition(newX);
  }, [scrollProgress]);

  return (
    <div className="mario-background-container">
      <TopBar />
      <div className="game-area">
        <div className="ground"></div>
        
        <div className="cloud-text">
          프론트엔드 개발자<br />
          정영교<br />
          PORTFOLIO
        </div>

        <div className="mario-blocks-container">
          <div className="mario-block-item brown-block"></div>
          <div className="mario-block-item mystery-box">
            <img src="/mario-mystery-box.png" alt="Mystery Box" />
          </div>
          <div className="mario-block-item brown-block"></div>
          <div className="mario-block-item brown-block"></div>
        </div>

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
