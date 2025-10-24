import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/common/Logo';
import ThemeToggle from '../components/common/ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import lightHero from '../assets/images/light-hero.png';
import darkHero from '../assets/images/dark-hero.png';

const Welcome = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  return (
    <div className="min-h-screen flex bg-white dark:bg-gray-900">
      <ThemeToggle />
      
      {/* Left Panel */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="mb-12">
          <Logo />
        </div>

        <div className="space-y-6 max-w-md">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Welcome to Sonola
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            With Sonola, making stand-out marketing content is as easy as a few clicks. 
            Let's get started!
          </p>

          <div className="pt-8 space-y-4">
            <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
              <p className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                63%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                of marketers say creating engaging content consistently is their biggest challenge.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                Content Marketing Institute, 2025
              </p>
            </div>

            <div className="flex items-center justify-between pt-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-2 rounded-full bg-indigo-600"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
              
              <button 
                onClick={() => navigate('/dashboard')}
                className="px-6 py-3 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Hero Image */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden">
        <img 
          src={isDarkMode ? darkHero : lightHero} 
          alt="Hero" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Welcome;
