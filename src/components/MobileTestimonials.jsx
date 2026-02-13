import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './MobileTestimonials.css';

const MobileTestimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <div className="mobile-testimonials-wrapper">
      <div className="mobile-testimonials-container">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="testimonial-card-mobile"
          >
            <div className="testimonial-quote-icon">
              <Quote size={40} />
            </div>

            <div className="testimonial-content-mobile">
              <p className="testimonial-text-mobile">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="testimonial-author-mobile">
                <div className="author-avatar-mobile">
                  <span className="avatar-emoji-mobile">
                    {testimonials[currentIndex].avatar}
                  </span>
                </div>
                <div className="author-info-mobile">
                  <h4>{testimonials[currentIndex].name}</h4>
                  <p>{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>

            <div className="card-decoration"></div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button 
          className="nav-button nav-button-left"
          onClick={() => paginate(-1)}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          className="nav-button nav-button-right"
          onClick={() => paginate(1)}
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'dot-active' : ''}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileTestimonials;