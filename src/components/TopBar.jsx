import React from 'react';

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-item">
        <img src="/mario-life.png" alt="Life" />
        <img src="/mario-life.png" alt="Life" />
        <img src="/mario-life.png" alt="Life" />
      </div>
      <div className="top-bar-item">
        <img src="/mario-coin.png" alt="Coin" />
        <span>x 00</span>
      </div>
      <div className="top-bar-item world-text">
        <span>WORLD 1-1</span>
      </div>
    </div>
  );
}

export default TopBar;