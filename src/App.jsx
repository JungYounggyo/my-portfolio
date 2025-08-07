import React, { useState } from 'react';
import MarioBackground from './components/MarioBackground';
// import PortfolioContent from './components/PortfolioContent';
import StartOverlay from './components/StartOverlay';
// import DarkModeToggle from './components/DarkModeToggle'; // ✅ 이 줄은 삭제됩니다.
import './styles/App.css';

function App() {
  let [scrollProgress, setScrollProgress] = useState(0);
  let [currentScreen, setCurrentScreen] = useState('marioIntro'); 
  let [isDarkMode, setIsDarkMode] = useState(false);

  let handleScroll = (progress) => {
    setScrollProgress(progress);
  };

  let handleMarioIntroAnimationDone = () => {
    setCurrentScreen('startScreen');
  };

  let handleStartPortfolio = () => {
    setCurrentScreen('mainPortfolio');
  };

  let toggleDarkMode = () => {
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

      {/* {currentScreen === 'mainPortfolio' && (
        <PortfolioContent onScroll={handleScroll} />
      )} */}

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