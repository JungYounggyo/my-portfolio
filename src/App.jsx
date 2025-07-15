// src/App.jsx
import React, { useState } from 'react';
import MarioBackground from './components/MarioBackground';
import PortfolioContent from './components/PortfolioContent';
import './App.css'; // 전체 스타일 불러오기

function App() {
  const [scrollProgress, setScrollProgress] = useState(0); // 스크롤 진행도 (0~1)

  const handleScroll = (progress) => {
    setScrollProgress(progress);
  };

  return (
    <div className="App">
      {/* 마리오 배경 (고정) */}
      <MarioBackground 
        scrollProgress={scrollProgress} 
      />
      
      {/* 포트폴리오 내용 (스크롤됨, 마리오 배경 위에 겹쳐짐) */}
      <PortfolioContent onScroll={handleScroll} />
    </div>
  );
}

export default App;