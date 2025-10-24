import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full transition-theme
                 bg-card-light dark:bg-card-dark shadow-lg
                 hover:shadow-xl"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: isDarkMode ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {isDarkMode ? (
          <Moon className="w-5 h-5 text-yellow-400" />
        ) : (
          <Sun className="w-5 h-5 text-orange-500" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
