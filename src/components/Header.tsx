import { Github, Linkedin, Code2, Trophy, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Portfolio</h1>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <a href="https://github.com/Harith-Y" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/harith-yerragolam-617486288/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://leetcode.com/u/yharith16/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Code2 className="w-6 h-6" />
            </a>
            <a href="https://codeforces.com/profile/YHarith" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Trophy className="w-6 h-6" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
