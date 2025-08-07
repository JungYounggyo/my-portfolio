import React from 'react';

function StartOverlay({ onStart }) {
  return (
    <div className="start-overlay show">
      <div className="start-overlay-subtitle">
        <p>Super Mario</p>
        <p>GAME</p>
      </div>
      <button className="start-button" onClick={onStart}>
        START
      </button>
    </div>
  );
}

export default StartOverlay;