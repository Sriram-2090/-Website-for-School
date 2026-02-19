import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../ui/Section';
import { ChevronLeft, ChevronRight, Calendar, Play } from 'lucide-react';
import { scrollReveal } from '../../utils/animations';

export const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Events with placeholder gradients
  const events = [
    {
      id: 1,
      type: 'image',
      title: 'Annual Day Celebration 2025',
      date: 'December 15, 2025',
      gradient: 'from-montessori-terracotta-400 via-montessori-dusty-500 to-montessori-mustard-400',
      emoji: '🎭',
      description: 'Students showcased their talents through dance, music, and drama performances.'
    },
    {
      id: 2,
      type: 'video',
      title: 'Sports Day',
      date: 'November 20, 2025',
      gradient: 'from-montessori-sage-400 via-montessori-sage-600 to-montessori-dusty-500',
      emoji: '⚽',
      description: 'Fun-filled day of outdoor activities, races, and team games.'
    },
    {
      id: 3,
      type: 'image',
      title: 'Diwali Festival',
      date: 'October 24, 2025',
      gradient: 'from-orange-400 via-yellow-500 to-red-500',
      emoji: '🪔',
      description: 'Traditional celebrations with rangoli, diyas, and cultural performances.'
    },
    {
      id: 4,
      type: 'image',
      title: 'Art Exhibition',
      date: 'September 10, 2025',
      gradient: 'from-purple-400 via-pink-500 to-rose-400',
      emoji: '🎨',
      description: 'Creative artworks displayed showcasing students\' imagination and skills.'
    },
    {
      id: 5,
      type: 'image',
      title: 'Independence Day',
      date: 'August 15, 2025',
      gradient: 'from-orange-500 via-white to-green-500',
      emoji: '🇮🇳',
      description: 'Patriotic celebrations with flag hoisting and cultural programs.'
    },
    {
      id: 6,
      type: 'image',
      title: 'Republic Day',
      date: 'January 26, 2025',
      gradient: 'from-orange-500 via-white to-green-500',
      emoji: '🇮🇳',
      description: 'Celebrating the spirit of unity and patriotism with flag hoisting and cultural programs.'
    },
    {
      id: 7,
      type: 'image',
      title: 'Parent-Teacher Meet',
      date: 'March 20, 2025',
      gradient: 'from-montessori-dusty-400 via-montessori-beige-400 to-montessori-sage-400',
      emoji: '👨‍👩‍👧‍👦',
      description: 'Interactive session between parents and teachers discussing child development.'
    },
    {
      id: 8,
      type: 'image',
      title: 'Christmas Celebration',
      date: 'December 25, 2024',
      gradient: 'from-red-500 via-green-500 to-red-600',
      emoji: '🎄',
      description: 'Festive celebrations with Santa, carols, and gift exchange.'
    },
    {
      id: 9,
      type: 'image',
      title: 'Nature Walk',
      date: 'February 14, 2025',
      gradient: 'from-green-400 via-emerald-500 to-teal-500',
      emoji: '🌳',
      description: 'Exploring nature and learning about plants, birds, and the environment.'
    }
  ];

  // Auto-play carousel (mobile only)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [events.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? events.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  return (
    <Section id="events" background="dusty">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          {...scrollReveal}
          className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-montessori-dusty-700 font-semibold text-sm mb-4"
        >
          School Events
        </motion.div>
        <motion.h2
          {...scrollReveal}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-montessori-beige-900 mb-6"
        >
          Memorable Moments
        </motion.h2>
        <motion.p
          {...scrollReveal}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-montessori-beige-700 leading-relaxed"
        >
          Celebrating learning, growth, and joy through our vibrant school events and activities.
        </motion.p>
      </div>

      {/* DESKTOP: Events Grid (hidden on mobile) */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            {...scrollReveal}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              {/* Media Container */}
              <div className={`relative h-72 bg-gradient-to-br ${event.gradient} flex items-center justify-center overflow-hidden`}>
                <motion.div
                  className="text-8xl"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {event.emoji}
                </motion.div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Play Icon for Videos */}
                {event.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="text-white" size={32} />
                    </div>
                  </div>
                )}
              </div>

              {/* Event Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Calendar size={16} />
                  <span>{event.date}</span>
                </div>
                <h3 className="font-serif font-bold text-xl mb-2">
                  {event.title}
                </h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                  {event.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MOBILE: Carousel (hidden on desktop) */}
      <div className="md:hidden relative max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl bg-white"
          >
            {/* Event Media Display */}
            <div className={`relative h-[350px] bg-gradient-to-br ${events[currentIndex].gradient} flex items-center justify-center`}>
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-7xl"
              >
                {events[currentIndex].emoji}
              </motion.div>
              
              {/* Video Play Overlay */}
              {events[currentIndex].type === 'video' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/20"
                >
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="text-white" size={32} />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Event Details */}
            <div className="p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-2 text-montessori-dusty-600 mb-2"
              >
                <Calendar size={16} />
                <span className="text-sm font-semibold">{events[currentIndex].date}</span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl font-serif font-bold text-montessori-beige-900 text-center mb-3"
              >
                {events[currentIndex].title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-base text-montessori-beige-700 text-center leading-relaxed"
              >
                {events[currentIndex].description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls - Bottom */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={goToPrevious}
            className="p-3 bg-white hover:bg-montessori-dusty-500 hover:text-white rounded-full transition-all duration-300 shadow-md"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Indicator Dots */}
          <div className="flex gap-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-montessori-dusty-600'
                    : 'w-2 bg-montessori-beige-300'
                }`}
                aria-label={`Go to event ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="p-3 bg-white hover:bg-montessori-dusty-500 hover:text-white rounded-full transition-all duration-300 shadow-md"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Event Counter */}
        <p className="text-center mt-3 text-montessori-beige-700 font-semibold text-sm">
          {currentIndex + 1} / {events.length}
        </p>
      </div>
    </Section>
  );
};

export default Events;
