import React, { useState, useEffect, useRef } from 'react';
import TopBar from './TopBar';

function MarioBackground({ scrollProgress, currentScreen, onIntroAnimationDone }) {
  const [marioImageSrc, setMarioImageSrc] = useState('/mario-standing.png');
  const [marioAnimationClass, setMarioAnimationClass] = useState('');
  const [marioXPosition, setMarioXPosition] = useState(0); 

  const marioJumpToggleIntervalRef = useRef(null); 

  useEffect(() => {
    if (currentScreen === 'marioIntro') {
      setMarioXPosition(0);
      setMarioImageSrc('/mario-standing.png');
      setMarioAnimationClass('continuous-jump');

      const introDurationTimeout = setTimeout(() => {
        clearInterval(marioJumpToggleIntervalRef.current);
        onIntroAnimationDone();
      }, 2000); 

      let isJumping = true;
      const toggleInterval = setInterval(() => {
        isJumping = !isJumping;
        setMarioImageSrc(isJumping ? '/mario-jump.png' : '/mario-standing.png');
      }, 300);
      marioJumpToggleIntervalRef.current = toggleInterval;

      return () => {
        clearTimeout(introDurationTimeout);
        clearInterval(marioJumpToggleIntervalRef.current);
      };

    } else if (currentScreen === 'mainPortfolio') {
      clearInterval(marioJumpToggleIntervalRef.current);
      setMarioXPosition(0);
      setMarioImageSrc('/mario-standing.png');
      setMarioAnimationClass('');
    }
  }, [currentScreen, onIntroAnimationDone]);

  useEffect(() => {
    if (currentScreen === 'mainPortfolio') {
      const marioWidth = window.innerWidth * 0.07; 
      const maxMarioX = window.innerWidth - marioWidth; 
      const newX = scrollProgress * maxMarioX;
      setMarioXPosition(newX);
    }
  }, [scrollProgress, currentScreen]);

  return (
    <div className="mario-background-container">
      <TopBar />
      <div className="game-area">
        <div className="ground"></div>
        
        <div className="cloud-text">
          <p>FRONTEND</p>
          <p>PORTFOLIO</p>
        </div>

        <div className="mario-blocks-container">
          <div className="mario-block-item brown-block"></div>
          <div className="mario-block-item mystery-box">
            <img src="/mario-mystery-box.png" alt="Mystery Box" />
          </div>
          <div className="mario-block-item brown-block"></div>
          <div className="mario-block-item brown-block"></div>
        </div>

        <div className="mario-bush bush-1"></div>
        <div className="mario-bush bush-2"></div>
        <div className="mario-bush bush-3"></div>

        <div className="mario-pipe"></div>

        <img 
          src={marioImageSrc} 
          alt="Mario" 
          className={`mario-char ${marioAnimationClass}`}
          style={{ transform: `translateX(${marioXPosition}px)` }} 
        />
      </div>
    </div>
  );
}

export default MarioBackground;