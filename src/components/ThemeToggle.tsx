
import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
      aria-label="Alternar tema"
    >
      {theme === 'light' ? (
        <i className="fas fa-moon text-gray-600 dark:text-gray-300"></i>
      ) : (
        <i className="fas fa-sun text-yellow-500"></i>
      )}
    </button>
  );
};

export default ThemeToggle;
