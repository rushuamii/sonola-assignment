import { motion } from 'framer-motion';

const TemplateCard = ({ title, description, image, gradient }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card overflow-hidden cursor-pointer group"
    >
      <div className={`h-40 ${gradient || 'bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800'} 
                      flex items-center justify-center relative overflow-hidden`}>
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-6xl opacity-50">
            {title === 'Web Pages' && '🌐'}
            {title === 'Presentations' && '📊'}
            {title === 'Social Media' && '📱'}
            {title === 'Sales Pitch' && '📈'}
            {title === 'Document' && '📄'}
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark mb-1">
          {title}
        </h3>
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default TemplateCard;
