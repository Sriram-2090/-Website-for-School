import { motion } from 'framer-motion';

export const Card = ({ 
  children, 
  className = '',
  hover = true,
  ...props 
}) => {
  const baseStyles = 'bg-white rounded-3xl shadow-md overflow-hidden';
  const hoverStyles = hover ? 'card-hover' : '';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
      className={`${baseStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
