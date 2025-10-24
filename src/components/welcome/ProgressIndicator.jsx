import { motion } from 'framer-motion';

const ProgressIndicator = ({ currentStep = 1, totalSteps = 4 }) => {
  return (
    <div className="flex items-center gap-2">
      {[...Array(totalSteps)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ width: index === 0 ? '40px' : '8px' }}
          animate={{ 
            width: index < currentStep ? '40px' : '8px',
            backgroundColor: index < currentStep 
              ? 'rgb(99, 102, 241)' 
              : 'rgb(209, 213, 219)'
          }}
          transition={{ duration: 0.3 }}
          className="h-2 rounded-full"
        />
      ))}
    </div>
  );
};

export default ProgressIndicator;
