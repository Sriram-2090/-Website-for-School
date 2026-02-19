import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { Shield, GraduationCap, Sparkles, Heart } from 'lucide-react';
import { scrollReveal, staggerContainer } from '../../utils/animations';

export const Trust = () => {
  const trustFactors = [
    {
      icon: <Shield size={40} />,
      title: 'Safety Standards',
      description: 'CCTV surveillance, secure campus, and trained safety staff',
      color: 'bg-montessori-sage-100 text-montessori-sage-600',
    },
    {
      icon: <GraduationCap size={40} />,
      title: 'Certified Teachers',
      description: 'Internationally certified Montessori educators with years of experience',
      color: 'bg-montessori-terracotta-100 text-montessori-terracotta-600',
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Hygiene Protocols',
      description: 'Regular sanitization, air purification, and strict cleanliness standards',
      color: 'bg-montessori-dusty-100 text-montessori-dusty-600',
    },
    {
      icon: <Heart size={40} />,
      title: 'Parent Partnership',
      description: 'Regular updates, parent workshops, and open communication',
      color: 'bg-montessori-mustard-100 text-montessori-mustard-600',
    },
  ];

  return (
    <Section id="trust" background="gradient">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          {...scrollReveal}
          className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-montessori-terracotta-600 font-semibold text-sm mb-4"
        >
          Trust & Safety
        </motion.div>
        <motion.h2
          {...scrollReveal}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-montessori-beige-900 mb-6"
        >
          Your Child's Safety is Our Priority
        </motion.h2>
        <motion.p
          {...scrollReveal}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-montessori-beige-700 leading-relaxed"
        >
          We maintain the highest standards of safety, hygiene, and educational excellence.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {trustFactors.map((factor, index) => (
          <motion.div
            key={index}
            {...scrollReveal}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="bg-white p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
          >
            <div className={`inline-flex items-center justify-center w-20 h-20 ${factor.color} rounded-2xl mb-6 shadow-md`}>
              {factor.icon}
            </div>
            <h3 className="text-xl font-serif font-bold text-montessori-beige-900 mb-3">
              {factor.title}
            </h3>
            <p className="text-montessori-beige-600 leading-relaxed text-sm">
              {factor.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Certification Badges */}
      <motion.div
        {...scrollReveal}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-16 flex flex-wrap justify-center gap-8"
      >
        <div className="bg-white px-6 py-3 rounded-full shadow-md flex items-center gap-2">
          <span className="text-2xl">✓</span>
          <span className="font-semibold text-montessori-beige-800">AMI Certified</span>
        </div>
        <div className="bg-white px-6 py-3 rounded-full shadow-md flex items-center gap-2">
          <span className="text-2xl">✓</span>
          <span className="font-semibold text-montessori-beige-800">ISO Compliant</span>
        </div>
        <div className="bg-white px-6 py-3 rounded-full shadow-md flex items-center gap-2">
          <span className="text-2xl">✓</span>
          <span className="font-semibold text-montessori-beige-800">Licensed & Insured</span>
        </div>
      </motion.div>
    </Section>
  );
};

export default Trust;
