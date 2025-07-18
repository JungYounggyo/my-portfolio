import React from 'react';

function StartOverlay({ onStart }) {
  return (
    <div className="start-overlay show">
      <div className="start-overlay-subtitle">
        <p>프론트엔드개발자</p>
        <p>정영교</p>
        <p>포트폴리오</p>
      </div>
      <button className="start-button" onClick={onStart}>
        START
      </button>
    </div>
  );
}

export default StartOverlay;