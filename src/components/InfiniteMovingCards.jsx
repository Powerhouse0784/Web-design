import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const InfiniteMovingCards = ({ items, direction = 'left', speed = 'normal', pauseOnHover = true }) => {
  const [duplicatedItems, setDuplicatedItems] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setDuplicatedItems([...items, ...items, ...items]);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [items]);

  const speedMap = {
    slow: isMobile ? 20 : 40,  // Faster on mobile (lower number = faster)
    normal: isMobile ? 12 : 25,
    fast: isMobile ? 8 : 15,
  };

  const duration = speedMap[speed];

  return (
    <div className="infinite-cards-container">
      <motion.div
        className="infinite-cards-track"
        animate={{
          x: direction === 'left' ? ['0%', '-33.333%'] : ['-33.333%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: duration,
            ease: 'linear',
          },
        }}
        style={{ display: 'flex', gap: isMobile ? '16px' : '20px' }}
      >
        {duplicatedItems.map((item, idx) => (
          <motion.div
            key={idx}
            className="testimonial-card-infinite card"
            whileHover={pauseOnHover && !isMobile ? { scale: 1.05 } : {}}
            style={{ 
              minWidth: isMobile ? '280px' : '350px', 
              flex: '0 0 auto' 
            }}
          >
            <div className="testimonial-content">
              <p>"{item.content}"</p>
            </div>
            <div className="testimonial-author">
              <div className="avatar">{item.avatar}</div>
              <div>
                <h4>{item.name}</h4>
                <p>{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};