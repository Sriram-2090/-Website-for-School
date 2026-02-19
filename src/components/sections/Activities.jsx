import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { scrollReveal, staggerContainer } from '../../utils/animations';
import { Palette, Music, BookOpenText, TreePine, Utensils, Users } from 'lucide-react';

export const Activities = () => {
  const activities = [
    {
      icon: <Palette size={32} />,
      name: 'Art & Creativity',
      color: 'bg-montessori-terracotta-100 text-montessori-terracotta-600',
    },
    {
      icon: <Music size={32} />,
      name: 'Music & Movement',
      color: 'bg-montessori-dusty-100 text-montessori-dusty-600',
    },
    {
      icon: <BookOpenText size={32} />,
      name: 'Storytelling',
      color: 'bg-montessori-sage-100 text-montessori-sage-600',
    },
    {
      icon: <TreePine size={32} />,
      name: 'Outdoor Play',
      color: 'bg-montessori-mustard-100 text-montessori-mustard-600',
    },
    {
      icon: <Utensils size={32} />,
      name: 'Practical Life Skills',
      color: 'bg-montessori-terracotta-100 text-montessori-terracotta-600',
    },
    {
      icon: <Users size={32} />,
      name: 'Social Development',
      color: 'bg-montessori-dusty-100 text-montessori-dusty-600',
    },
  ];

  return (
    <Section id="activities" background="light">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          {...scrollReveal}
          className="inline-block px-4 py-2 bg-montessori-terracotta-100 rounded-full text-montessori-terracotta-600 font-semibold text-sm mb-4"
        >
          Learning Activities
        </motion.div>
        <motion.h2
          {...scrollReveal}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-montessori-beige-900 mb-6"
        >
          Rich Learning Experiences
        </motion.h2>
        <motion.p
          {...scrollReveal}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-montessori-beige-600 leading-relaxed"
        >
          Our curriculum integrates diverse activities that engage all aspects of a child's development.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
      >
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            {...scrollReveal}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`${activity.color} p-6 rounded-3xl text-center shadow-md hover:shadow-xl transition-shadow cursor-pointer`}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="transform transition-transform duration-300 hover:scale-110">
                {activity.icon}
              </div>
              <h3 className="font-sans font-semibold text-sm">
                {activity.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Activities;
