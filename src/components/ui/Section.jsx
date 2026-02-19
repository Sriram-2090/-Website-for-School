import { motion } from 'framer-motion';

export const Section = ({ 
  children, 
  className = '',
  background = 'default',
  id,
  ...props 
}) => {
  const backgrounds = {
    default: 'bg-montessori-beige-50',
    light: 'bg-white',
    gradient: 'gradient-montessori',
    sage: 'bg-montessori-sage-50',
    dusty: 'bg-montessori-dusty-50',
  };
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`section-padding ${backgrounds[background]} ${className}`}
      id={id}
      {...props}
    >
      <div className="container-custom">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
