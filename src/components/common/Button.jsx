import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'px-6 py-3 rounded-lg font-medium bg-transparent border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark hover:bg-primary-light/10 dark:hover:bg-primary-dark/10',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
