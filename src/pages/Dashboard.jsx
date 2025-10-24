import { motion } from 'framer-motion';
import Sidebar from '../components/layout/Sidebar';
import ThemeToggle from '../components/common/ThemeToggle';
import Button from '../components/common/Button';
import MetricCard from '../components/dashboard/MetricCard';
import TemplateCard from '../components/dashboard/TemplateCard';
import { Play, Users, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logoLight from '../assets/images/logo-light.svg';
import logoDark from '../assets/images/logo-dark.svg';

const Dashboard = () => {
  const { isDarkMode } = useTheme();
  
  const templates = [
    { title: 'Web Pages', description: 'Build attractive brand websites' },
    { title: 'Presentations', description: 'Create stunning presentations' },
    { title: 'Social Media', description: 'Everything you need quickly' },
    { title: 'Sales Pitch', description: 'Pitch your ideas beautifully' },
  ];

  const recentProjects = [
    { title: 'Document', description: '', gradient: 'bg-gray-100 dark:bg-gray-800' },
    { title: 'Web Pages', description: 'May 14, 2025', gradient: 'bg-gray-100 dark:bg-gray-800' },
    { title: '60 Second Cut', description: 'May 13, 2025', gradient: 'bg-gray-100 dark:bg-gray-800' },
    { title: 'Web Pages', description: 'May 12, 2025', gradient: 'bg-gradient-to-br from-green-400 to-emerald-600' },
  ];

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark transition-theme">
      <Sidebar />
      <ThemeToggle />
      
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-8">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Content */}
              <div className="flex-1 space-y-6">
                {/* Logo */}
                <div className="mb-4">
                  <img 
                    src={isDarkMode ? logoDark : logoLight} 
                    alt="Sonola Logo" 
                    className="h-8"
                  />
                </div>
                
                <div>
                  <h1 className="text-4xl font-bold mb-2 text-text-primary-light dark:text-text-primary-dark">
                    Getting started
                    <br />
                    in Sonola
                  </h1>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark">
                    Create intriguing marketing contents with ease!
                  </p>
                </div>

                <Button className="inline-flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Start creating now
                </Button>

                {/* Metric Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <MetricCard
                    title="Increase Customer"
                    value="Retention by 85%"
                    subtitle="AI-personalized flavours"
                    index={0}
                  />
                  <MetricCard
                    title="Collaborate"
                    value="With your team"
                    subtitle="Real-time editing"
                    index={1}
                  />
                </div>
              </div>

              {/* Right Content - Video & Cards */}
              <div className="flex-1 space-y-4">
                {/* Video Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="card p-6 bg-gradient-to-br from-orange-100 to-pink-100 
                           dark:from-orange-900/20 dark:to-pink-900/20"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 
                                  flex items-center justify-center">
                      <Play className="w-6 h-6 text-primary-light" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                        Emma Owens
                      </h3>
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                        Content Creator
                      </p>
                    </div>
                  </div>
                  <div className="h-32 bg-gradient-to-br from-orange-200 to-pink-200 
                                dark:from-orange-800 to-pink-800 rounded-lg" />
                </motion.div>

                {/* Other Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="card p-4"
                  >
                    <Calendar className="w-8 h-8 text-primary-light dark:text-primary-dark mb-2" />
                    <p className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark">
                      Schedule Posts
                    </p>
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1">
                      Advanced Content Calendar
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="card p-4"
                  >
                    <Users className="w-8 h-8 text-primary-light dark:text-primary-dark mb-2" />
                    <p className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark">
                      Integrations
                    </p>
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1">
                      Connect your tools
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* For You Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark flex items-center gap-2">
                <span className="text-primary-light dark:text-primary-dark">⚡</span>
                For you
              </h2>
              <button className="text-sm text-primary-light dark:text-primary-dark hover:underline">
                View all templates →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {templates.map((template, index) => (
                <TemplateCard
                  key={index}
                  title={template.title}
                  description={template.description}
                  gradient={template.gradient}
                />
              ))}
            </div>
          </motion.section>

          {/* Recents Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark flex items-center gap-2">
                <span className="text-lg">🕐</span>
                Recents
              </h2>
              <button className="text-sm text-primary-light dark:text-primary-dark hover:underline">
                See all projects →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentProjects.map((project, index) => (
                <TemplateCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  gradient={project.gradient}
                />
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
