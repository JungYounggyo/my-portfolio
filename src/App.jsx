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
      <MarioBackground 
        scrollProgress={scrollProgress} 
      />
      <PortfolioContent onScroll={handleScroll} />
    </div>
  );
}

export default App;