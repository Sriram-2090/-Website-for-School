import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../ui/Section';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { scrollReveal } from '../../utils/animations';

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Beautiful campus images with gradients
  const images = [
    { 
      id: 1, 
      gradient: 'from-montessori-sage-400 to-montessori-sage-600', 
      alt: 'Children learning with Montessori materials',
      emoji: '📚',
      title: 'Montessori Learning',
      height: 'h-60'
    },
    { 
      id: 2, 
      gradient: 'from-montessori-terracotta-400 to-montessori-dusty-500', 
      alt: 'Outdoor play area',
      emoji: '🌳',
      title: 'Outdoor Discovery',
      height: 'h-80'
    },
    { 
      id: 3, 
      gradient: 'from-montessori-mustard-400 to-montessori-terracotta-500', 
      alt: 'Art and creativity session',
      emoji: '🎨',
      title: 'Creative Arts',
      height: 'h-64'
    },
    { 
      id: 4, 
      gradient: 'from-montessori-dusty-400 to-montessori-sage-500', 
      alt: 'Music and movement class',
      emoji: '🎵',
      title: 'Music & Movement',
      height: 'h-56'
    },
    { 
      id: 5, 
      gradient: 'from-montessori-sage-300 to-montessori-dusty-600', 
      alt: 'Reading corner',
      emoji: '📖',
      title: 'Reading Corner',
      height: 'h-72'
    },
    { 
      id: 6, 
      gradient: 'from-montessori-terracotta-300 to-montessori-mustard-500', 
      alt: 'Practical life activities',
      emoji: '🍴',
      title: 'Practical Life',
      height: 'h-60'
    },
    { 
      id: 7, 
      gradient: 'from-montessori-dusty-300 to-montessori-terracotta-600', 
      alt: 'Science exploration',
      emoji: '🔬',
      title: 'Science Lab',
      height: 'h-68'
    },
    { 
      id: 8, 
      gradient: 'from-montessori-mustard-300 to-montessori-sage-600', 
      alt: 'Classroom environment',
      emoji: '🏫',
      title: 'Classroom',
      height: 'h-52'
    },
  ];

  // Auto-play carousel (mobile only)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <Section id="gallery" background="sage">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          {...scrollReveal}
          className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-montessori-sage-700 font-semibold text-sm mb-4"
        >
          Campus & Facilities
        </motion.div>
        <motion.h2
          {...scrollReveal}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-montessori-beige-900 mb-6"
        >
          Our Learning Environment
        </motion.h2>
        <motion.p
          {...scrollReveal}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-montessori-beige-700 leading-relaxed"
        >
          A carefully prepared environment that inspires wonder and supports independent learning.
        </motion.p>
      </div>

      {/* DESKTOP: Masonry Grid (hidden on mobile) */}
      <div className="hidden md:block columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            {...scrollReveal}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="break-inside-avoid group relative overflow-hidden rounded-2xl"
          >
            <div className={`w-full ${image.height} bg-gradient-to-br ${image.gradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
              <div className="text-6xl opacity-80">{image.emoji}</div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm font-semibold">{image.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MOBILE: Carousel (hidden on desktop) */}
      <div className="md:hidden relative max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl"
          >
            {/* Image/Gradient Display */}
            <div className={`w-full h-[400px] bg-gradient-to-br ${images[currentIndex].gradient} flex items-center justify-center relative`}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="text-8xl"
              >
                {images[currentIndex].emoji}
              </motion.div>
              
              {/* Overlay with title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-white text-2xl font-serif font-bold text-center"
                >
                  {images[currentIndex].title}
                </motion.h3>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls - Bottom */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={goToPrevious}
            className="p-3 bg-white hover:bg-montessori-sage-500 hover:text-white rounded-full transition-all duration-300 shadow-md"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Indicator Dots */}
          <div className="flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-montessori-sage-600'
                    : 'w-2 bg-montessori-beige-300'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="p-3 bg-white hover:bg-montessori-sage-500 hover:text-white rounded-full transition-all duration-300 shadow-md"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Image Counter */}
        <p className="text-center mt-3 text-montessori-beige-700 font-semibold text-sm">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </Section>
  );
};

export default Gallery;
