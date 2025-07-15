// src/components/StartOverlay.jsx
import React from 'react';

function StartOverlay({ onStart, isFadingOut }) {
  return (
    <div className={`start-overlay ${isFadingOut ? 'fade-out' : ''}`}>
      <h1>SUPER PORTFOLIO</h1>
      <button className="start-button" onClick={onStart}>
        시작하기
      </button>
    </div>
  );
}

export default StartOverlay;