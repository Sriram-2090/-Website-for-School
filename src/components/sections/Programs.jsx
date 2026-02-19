import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { scrollReveal } from '../../utils/animations';

export const Programs = () => {
  const programs = [
    {
      name: 'Playgroup',
      age: '1.5 - 2.5 years',
      description: 'Gentle introduction to social learning through sensory play, music, and movement activities.',
      color: 'bg-montessori-sage-100',
      textColor: 'text-montessori-sage-700',
      features: ['Sensory Exploration', 'Music & Movement', 'Social Skills', 'Parent-Child Sessions'],
    },
    {
      name: 'Nursery',
      age: '2.5 - 3.5 years',
      description: 'Building independence and confidence with practical life activities and creative expression.',
      color: 'bg-montessori-dusty-100',
      textColor: 'text-montessori-dusty-700',
      features: ['Practical Life Skills', 'Art & Craft', 'Language Development', 'Nature Activities'],
    },
    {
      name: 'LKG',
      age: '3.5 - 4.5 years',
      description: 'Structured learning environment introducing early literacy, numeracy, and scientific thinking.',
      color: 'bg-montessori-terracotta-100',
      textColor: 'text-montessori-terracotta-700',
      features: ['Pre-Reading Skills', 'Number Concepts', 'Science Exploration', 'Cultural Studies'],
    },
    {
      name: 'UKG',
      age: '4.5 - 6 years',
      description: 'Advanced Montessori curriculum preparing children for primary school with strong foundations.',
      color: 'bg-montessori-mustard-100',
      textColor: 'text-montessori-mustard-700',
      features: ['Reading & Writing', 'Mathematical Operations', 'Geography & History', 'Critical Thinking'],
    },
  ];

  return (
    <Section id="programs" background="gradient">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          {...scrollReveal}
          className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-montessori-terracotta-600 font-semibold text-sm mb-4"
        >
          Our Programs
        </motion.div>
        <motion.h2
          {...scrollReveal}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-montessori-beige-900 mb-6"
        >
          Age-Appropriate Learning
        </motion.h2>
        <motion.p
          {...scrollReveal}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-montessori-beige-700 leading-relaxed"
        >
          Each program is thoughtfully designed to meet the developmental needs 
          and interests of children at different stages.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {programs.map((program, index) => (
          <Card key={index} className="p-0">
            <div className={`${program.color} p-6 text-center`}>
              <h3 className="text-2xl font-serif font-bold text-montessori-beige-900 mb-2">
                {program.name}
              </h3>
              <p className={`${program.textColor} font-semibold text-sm`}>
                {program.age}
              </p>
            </div>
            <div className="p-6">
              <p className="text-montessori-beige-600 mb-6 leading-relaxed">
                {program.description}
              </p>
              <div className="space-y-3">
                {program.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-montessori-terracotta-500 mt-1">✓</span>
                    <span className="text-sm text-montessori-beige-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Programs;
