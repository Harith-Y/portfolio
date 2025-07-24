import { Github, Linkedin, Code2, Trophy, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Prevent transition on initial page load
    document.documentElement.classList.add('no-animation');

    // Remove the no-animation class after a small delay
    const timer = setTimeout(() => {
      document.documentElement.classList.remove('no-animation');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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
        <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Portfolio</h1>
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                rotate: darkMode ? 180 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </motion.button>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/Harith-Y" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/harith-yerragolam/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://leetcode.com/u/yharith16/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Code2 className="w-6 h-6" />
            </a>
            <a href="https://codeforces.com/profile/YHarith" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Trophy className="w-6 h-6" />
            </a>
            <a href="https://medium.com/@yharith" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {/* Book icon for Medium */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m8-6a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
