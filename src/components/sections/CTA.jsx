import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { scrollReveal } from '../../utils/animations';

export const CTA = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-montessori-terracotta-500 via-montessori-dusty-500 to-montessori-sage-500 opacity-90" />
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            {...scrollReveal}
            className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm mb-6"
          >
            Join Our Family
          </motion.div>

          <motion.h2
            {...scrollReveal}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
          >
            Begin Your Child's
            <br />
            Learning Journey Today
          </motion.h2>

          <motion.p
            {...scrollReveal}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Schedule a campus visit to experience our nurturing Montessori environment 
            and meet our passionate educators. Limited seats available for all programs.
          </motion.p>

          <motion.div
            {...scrollReveal}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              variant="primary" 
              size="lg"
              className="bg-montessori-terracotta-600 text-white hover:bg-montessori-terracotta-700 shadow-xl"
            >
              <Calendar className="inline mr-2" size={20} />
              Schedule Campus Visit
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/20"
            >
              <Phone className="inline mr-2" size={20} />
              Call: +91 98765 43210
            </Button>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            {...scrollReveal}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-white/80"
          >
            <div>
              <p className="text-sm">📧 Email</p>
              <p className="font-semibold">hello@littlelearners.in</p>
            </div>
            <div>
              <p className="text-sm">📍 Location</p>
              <p className="font-semibold">Mumbai | Bangalore | Delhi</p>
            </div>
            <div>
              <p className="text-sm">🕐 Timings</p>
              <p className="font-semibold">Mon-Fri, 8:00 AM - 2:00 PM</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
