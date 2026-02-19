import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { BookOpen, Heart, Sprout } from 'lucide-react';
import { scrollReveal, staggerContainer } from '../../utils/animations';

export const Philosophy = () => {
  const principles = [
    {
      icon: <Sprout size={32} />,
      title: 'Child-Centered Learning',
      description: 'Every child learns at their own pace in a prepared environment designed to foster independence and curiosity.',
    },
    {
      icon: <Heart size={32} />,
      title: 'Holistic Development',
      description: 'We nurture emotional, social, physical, and cognitive growth through hands-on learning experiences.',
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Authentic Montessori',
      description: 'Our certified teachers follow the authentic Montessori philosophy with specially curated learning materials.',
    },
  ];

  return (
    <Section id="philosophy" background="light">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          {...scrollReveal}
          className="inline-block px-4 py-2 bg-montessori-sage-100 rounded-full text-montessori-sage-700 font-semibold text-sm mb-4"
        >
          Our Philosophy
        </motion.div>
        <motion.h2
          {...scrollReveal}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-montessori-beige-900 mb-6"
        >
          The Montessori Approach
        </motion.h2>
        <motion.p
          {...scrollReveal}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-montessori-beige-600 leading-relaxed"
        >
          We believe every child is naturally curious and capable. Our Montessori environment 
          empowers children to explore, discover, and learn through meaningful experiences.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        className="grid md:grid-cols-3 gap-8"
      >
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            {...scrollReveal}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-montessori-beige-50 p-8 rounded-3xl text-center hover:shadow-lg transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl text-montessori-terracotta-500 mb-6 shadow-md">
              {principle.icon}
            </div>
            <h3 className="text-xl font-serif font-bold text-montessori-beige-900 mb-3">
              {principle.title}
            </h3>
            <p className="text-montessori-beige-600 leading-relaxed">
              {principle.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Quote Section */}
      <motion.div
        {...scrollReveal}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-20 text-center max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-br from-montessori-sage-50 to-montessori-dusty-50 p-12 rounded-3xl shadow-xl">
          <div className="text-6xl text-montessori-terracotta-400 mb-4">"</div>
          <p className="text-2xl md:text-3xl font-serif italic text-montessori-beige-800 leading-relaxed mb-6">
            The greatest sign of success for a teacher is to be able to say, 
            "The children are now working as if I did not exist."
          </p>
          <p className="text-montessori-beige-600 font-semibold">— Dr. Maria Montessori</p>
        </div>
      </motion.div>
    </Section>
  );
};

export default Philosophy;
