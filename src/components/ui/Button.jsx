import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  ...props 
}) => {
  const baseStyles = 'font-sans font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg';
  
  const variants = {
    primary: 'bg-montessori-terracotta-500 text-white hover:bg-montessori-terracotta-600',
    secondary: 'bg-montessori-sage-500 text-white hover:bg-montessori-sage-600',
    outline: 'bg-transparent border-2 border-montessori-terracotta-500 text-montessori-terracotta-500 hover:bg-montessori-terracotta-50',
  };
  
  const sizes = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
