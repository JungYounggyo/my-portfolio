import React, { useState } from 'react';
import MarioBackground from './components/MarioBackground';
import PortfolioContent from './components/PortfolioContent';
import StartOverlay from './components/StartOverlay';
// import DarkModeToggle from './components/DarkModeToggle'; // ✅ 이 줄은 삭제됩니다.
import './styles/App.css';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentScreen, setCurrentScreen] = useState('marioIntro'); 
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleScroll = (progress) => {
    setScrollProgress(progress);
  };

  const handleMarioIntroAnimationDone = () => {
    setCurrentScreen('startScreen');
  };

  const handleStartPortfolio = () => {
    setCurrentScreen('mainPortfolio');
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`App full-viewport ${isDarkMode ? 'dark-mode' : ''}`}>
      <MarioBackground 
        scrollProgress={scrollProgress} 
        currentScreen={currentScreen}
        onIntroAnimationDone={handleMarioIntroAnimationDone}
      />
      
      {currentScreen === 'startScreen' && (
        <StartOverlay onStart={handleStartPortfolio} />
      )}

      {currentScreen === 'mainPortfolio' && (
        <PortfolioContent onScroll={handleScroll} />
      )}

      {/* ✅ 여기에 토글 버튼 JSX 코드를 직접 삽입합니다. */}
      <label className="switch">
        <input 
          type="checkbox" 
          checked={isDarkMode} 
          onChange={toggleDarkMode} 
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default App;