import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { slideUp, slideInLeft, slideInRight, floatAnimation } from '../../utils/animations';

export const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-montessori overflow-hidden pt-20">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 bg-montessori-sage-300 rounded-full opacity-40 blur-xl"
        variants={floatAnimation}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-40 left-20 w-32 h-32 bg-montessori-dusty-300 rounded-full opacity-30 blur-2xl"
        variants={floatAnimation}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-16 h-16 bg-montessori-mustard-300 rounded-full opacity-40 blur-xl"
        variants={floatAnimation}
        animate="animate"
        transition={{ delay: 2 }}
      />

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <motion.div
              variants={slideUp}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-montessori-terracotta-600 font-semibold text-sm"
            >
              ✨ Premium Montessori Education
            </motion.div>

            <motion.h1
              variants={slideUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-montessori-beige-900 leading-tight"
              style={{ 
                letterSpacing: '-0.02em',
                textShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}
            >
              Where Little{' '}
              <span className="text-gradient block md:inline" style={{ letterSpacing: '-0.01em' }}>Minds Bloom</span>
            </motion.h1>

            <motion.p
              variants={slideUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-montessori-beige-700 leading-relaxed max-w-xl"
            >
              Nurturing curious minds through the authentic Montessori approach. 
              A warm, safe, and inspiring environment where children learn at their own pace.
            </motion.p>

            <motion.div
              variants={slideUp}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => scrollToSection('#contact')}
              >
                Schedule a Visit
                <ArrowRight className="inline ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('#programs')}
              >
                Explore Programs
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={slideUp}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-8 pt-8"
            >
              <div>
                <div className="text-3xl font-serif font-bold text-montessori-terracotta-600">15+</div>
                <div className="text-sm text-montessori-beige-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-montessori-sage-600">500+</div>
                <div className="text-sm text-montessori-beige-600">Happy Children</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-montessori-dusty-600">98%</div>
                <div className="text-sm text-montessori-beige-600">Parent Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-montessori-terracotta-400 via-montessori-dusty-400 to-montessori-sage-500 h-96 flex items-center justify-center">
              <div className="text-9xl opacity-40">🎨📚🌱</div>
              
              {/* Decorative overlay card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-montessori-sage-100 p-3 rounded-full">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div>
                    <div className="font-serif font-bold text-montessori-beige-900">Certified Educators</div>
                    <div className="text-sm text-montessori-beige-600">Trained in Montessori Philosophy</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-montessori-mustard-200 rounded-2xl opacity-60 -z-10"
              animate={{
                rotate: [0, 10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-montessori-sage-200 rounded-full opacity-50 -z-10"
              animate={{
                scale: [1, 1.1, 1],
                y: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Custom decorative shape at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{
        clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)'
      }} />
    </section>
  );
};

export default Hero;
