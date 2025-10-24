import { Home, FolderOpen, Layout, Upload, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from '../common/Logo';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: FolderOpen, label: 'Projects', active: false },
    { icon: Layout, label: 'Templates', active: false },
    { icon: Upload, label: 'Uploads', active: false },
    { icon: MoreHorizontal, label: 'More', active: false },
  ];

  return (
    <motion.aside
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-20 bg-background-light dark:bg-background-dark border-r 
                 border-gray-200 dark:border-gray-800 flex flex-col items-center py-6 
                 transition-theme"
    >
      <div className="mb-12">
        <Logo className="flex-col gap-1" />
      </div>

      <nav className="flex-1 flex flex-col gap-6">
        {menuItems.map((item, index) => (
          <motion.button
            key={item.label}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-3 rounded-xl transition-all ${
              item.active
                ? 'bg-primary-light dark:bg-primary-dark text-white'
                : 'text-text-secondary-light dark:text-text-secondary-dark hover:bg-surface-light dark:hover:bg-surface-dark'
            }`}
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
          </motion.button>
        ))}
      </nav>

      <div className="mt-auto">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 
                     flex items-center justify-center text-white font-semibold text-sm cursor-pointer"
        >
          U
        </motion.div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
