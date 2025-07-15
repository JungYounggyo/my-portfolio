// src/components/TopBar.jsx
import React from 'react';

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-item">
        <img src="/mario-life.png" alt="Life" /> {/* public 폴더의 루트에서 불러옴 */}
        <span>x 3</span> {/* 목숨 */}
      </div>
      <div className="top-bar-item">
        <img src="/mario-coin.png" alt="Coin" /> {/* public 폴더의 루트에서 불러옴 */}
        <span>x 00</span> {/* 코인 */}
      </div>
      <div className="top-bar-item world-text"> {/* ✅ world-text 클래스 추가 */}
        <span>WORLD 1-1</span> {/* 월드 표시 */}
      </div>
    </div>
  );
}

export default TopBar;