import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const MetricCard = ({ title, value, subtitle, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="card p-6 hover:shadow-xl transition-shadow cursor-pointer"
    >
      <h3 className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">
        {title}
      </h3>
      <div className="flex items-end gap-2 mb-2">
        <p className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark">
          {value}
        </p>
        <div className="flex items-center gap-1 text-green-500 text-sm mb-1">
          <TrendingUp className="w-4 h-4" />
          <span>8.5%</span>
        </div>
      </div>
      <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default MetricCard;
