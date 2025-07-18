import React from 'react';

function DarkModeToggle({ isDarkMode, toggleDarkMode }) {
  return (
    <label className="switch">
      <input 
        type="checkbox" 
        checked={isDarkMode} 
        onChange={toggleDarkMode} 
      />
      <span className="slider round"></span>
    </label>
  );
}

export default DarkModeToggle;