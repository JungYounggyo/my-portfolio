import React, { useState, useEffect, useRef } from 'react';
import TopBar from './TopBar';

function MarioBackground({ currentScreen, onIntroAnimationDone }) {
  let [marioImageSrc, setMarioImageSrc] = useState('/mario-standing.png');
  let [marioAnimationClass, setMarioAnimationClass] = useState('');
  let [marioXPosition, setMarioXPosition] = useState(0);
  let [marioYPosition, setMarioYPosition] = useState(0);
  let [marioDirection, setMarioDirection] = useState('right');
  let [isJumping, setIsJumping] = useState(false);
  let [isFalling, setIsFalling] = useState(false);

  let marioJumpToggleIntervalRef = useRef(null);

  let moveStep = 20;
  let jumpHeight = -80;
  let marioWidth = window.innerWidth * 0.07;
  let maxMarioX = window.innerWidth - marioWidth;

  let boxPositions = [
    { left: window.innerWidth / 2 - 100, width: 50 },
    { left: window.innerWidth / 2 - 25, width: 50 },
    { left: window.innerWidth / 2 + 50, width: 50 },
    { left: window.innerWidth / 2 + 125, width: 50 },
  ];
  let boxTopY = 220; // 박스 container top값과 일치

  useEffect(() => {
    if (currentScreen === 'marioIntro') {
      setMarioXPosition(0);
      setMarioImageSrc('/mario-standing.png');
      setMarioAnimationClass('continuous-jump');

      let isJumping = true;
      marioJumpToggleIntervalRef.current = setInterval(() => {
        isJumping = !isJumping;
        setMarioImageSrc(isJumping ? '/mario-jump.png' : '/mario-standing.png');
      }, 300);

      let timeout = setTimeout(() => {
        clearInterval(marioJumpToggleIntervalRef.current);
        onIntroAnimationDone();
      }, 2000);

      return () => {
        clearTimeout(timeout);
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
    if (currentScreen !== 'mainPortfolio') return;

    let handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        moveMario('left');
      } else if (e.key === 'ArrowRight') {
        moveMario('right');
      } else if (e.key === 'ArrowUp') {
        jumpMario();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentScreen, marioXPosition, isJumping, isFalling]);

  let moveMario = (direction) => {
    setMarioDirection(direction);

    setMarioImageSrc('/mario-jump.png');
    setTimeout(() => setMarioImageSrc('/mario-standing.png'), 200);

    setMarioXPosition((prev) => {
      let newPos =
        direction === 'left'
          ? Math.max(0, prev - moveStep)
          : Math.min(maxMarioX, prev + moveStep);
      return newPos;
    });
  };

  let jumpMario = () => {
    if (isJumping || isFalling) return;

    setIsJumping(true);
    setMarioImageSrc('/mario-jump.png');
    let jumpPeakY = jumpHeight;

    setMarioYPosition(jumpPeakY);

    setTimeout(() => {
      let didCollide = checkBlockCollision();
      if (didCollide) {
        setMarioYPosition(jumpPeakY + 20);
      }

      setIsFalling(true);
      setMarioYPosition(0);

      setTimeout(() => {
        setIsJumping(false);
        setIsFalling(false);
        setMarioImageSrc('/mario-standing.png');
      }, 200);
    }, 300);
  };

  let checkBlockCollision = () => {
    let marioLeft = marioXPosition;
    let marioRight = marioXPosition + marioWidth;

    return boxPositions.some((box) => {
      let boxLeft = box.left;
      let boxRight = box.left + box.width;

      let horizontalOverlap =
        marioRight > boxLeft && marioLeft < boxRight;

      let verticalCollision = marioYPosition <= boxTopY;

      return horizontalOverlap && verticalCollision;
    });
  };

  return (
    <div className="mario-background-container">
      <TopBar />
      <div className="game-area">
        <div className="ground"></div>

        <div className="cloud-text">
          <p>Use the arrow keys or touch the screen to move Mario</p>
        </div>

        <div className="mario-blocks-container">
          <div className="mario-block-item brown-block"></div>
          <div className="mario-block-item mystery-box">
            <img src="/mario-mystery-box.png" alt="Mystery Box" />
          </div>
          <div className="mario-block-item brown-block"></div>
          <div className="mario-block-item brown-block"></div>
        </div>

        <div className="mario-decorate-box">
          <img className="mario-bush bush-1" src='/mario-bush.png' alt='bush1'></img>
          <img className="mario-bush bush-2" src='/mario-bush.png' alt='bush1'></img>
          <img className="mario-bush bush-3" src='/mario-bush.png' alt='bush1'></img>
          <div className="mario-pipe">
            <img src="/mario-pipe.png" alt="pipe" />
          </div>
        </div>


        <img
          src={marioImageSrc}
          alt="Mario"
          className={`mario-char ${marioAnimationClass}`}
          style={{
            transform: `translate(${marioXPosition}px, ${marioYPosition}px) scaleX(${marioDirection === 'left' ? -1 : 1})`,
            transition: 'transform 0.2s ease-out',
          }}
        />

        <div className="arrow-controls">
          <button onClick={() => jumpMario()} className="arrow-btn up"></button>
          <div>
            <button onClick={() => moveMario('left')} className="arrow-btn"></button>
            <button onClick={() => moveMario('right')} className="arrow-btn"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarioBackground;
