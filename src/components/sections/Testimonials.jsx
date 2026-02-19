import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../ui/Section';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { scrollReveal } from '../../utils/animations';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Little Learners has been a blessing for our family. The teachers are incredibly caring and our daughter has blossomed in this nurturing environment. She actually looks forward to going to school every day!",
      parent: "Priya & Rajesh Sharma",
      child: "Parent of Aaradhya (4 years)",
      rating: 5,
    },
    {
      id: 2,
      text: "The Montessori approach here is authentic and well-executed. We've seen remarkable growth in our son's independence and confidence. The facilities are excellent and the staff is professional.",
      parent: "Ananya & Vikram Reddy",
      child: "Parent of Arjun (5 years)",
      rating: 5,
    },
    {
      id: 3,
      text: "What sets this school apart is the individual attention each child receives. The teachers understand each child's unique pace and interests. Our twins have thrived here!",
      parent: "Neha & Karan Gupta",
      child: "Parents of Kavya & Aryan (3 years)",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <Section id="testimonials" background="light">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          {...scrollReveal}
          className="inline-block px-4 py-2 bg-montessori-dusty-100 rounded-full text-montessori-dusty-700 font-semibold text-sm mb-4"
        >
          Testimonials
        </motion.div>
        <motion.h2
          {...scrollReveal}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-montessori-beige-900 mb-6"
        >
          What Parents Say
        </motion.h2>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl p-12 md:p-16 relative"
          >
            <Quote className="absolute top-8 left-8 text-montessori-terracotta-200" size={48} />
            
            <div className="relative z-10">
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-montessori-mustard-500 text-2xl">★</span>
                ))}
              </div>

              <p className="text-xl md:text-2xl text-montessori-beige-800 leading-relaxed mb-8 text-center italic">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="text-center">
                <p className="font-serif font-bold text-montessori-beige-900 text-lg">
                  {testimonials[currentIndex].parent}
                </p>
                <p className="text-montessori-beige-600 text-sm mt-1">
                  {testimonials[currentIndex].child}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={goToPrevious}
            className="p-3 bg-montessori-beige-100 hover:bg-montessori-terracotta-500 hover:text-white rounded-full transition-all duration-300 shadow-md"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-montessori-terracotta-500'
                    : 'bg-montessori-beige-300 hover:bg-montessori-beige-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="p-3 bg-montessori-beige-100 hover:bg-montessori-terracotta-500 hover:text-white rounded-full transition-all duration-300 shadow-md"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
