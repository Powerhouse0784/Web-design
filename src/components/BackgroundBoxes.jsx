import React from "react";
import { motion } from "framer-motion";

export const BackgroundBoxes = () => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  
  const colors = [
    "rgba(147, 197, 253, 0.5)",  // sky-300
    "rgba(249, 168, 212, 0.5)",  // pink-300
    "rgba(134, 239, 172, 0.5)",  // green-300
    "rgba(253, 224, 71, 0.5)",   // yellow-300
    "rgba(252, 165, 165, 0.5)",  // red-300
    "rgba(216, 180, 254, 0.5)",  // purple-300
    "rgba(147, 197, 253, 0.5)",  // blue-300
    "rgba(165, 180, 252, 0.5)",  // indigo-300
    "rgba(196, 181, 253, 0.5)",  // violet-300
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
        position: 'absolute',
        inset: '-200px',
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
      className="boxes-grid"
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row-${i}`}
          style={{
            position: 'relative',
            display: 'flex',
            borderLeft: `1px solid rgba(148, 163, 184, 0.2)`,
          }}
          className="boxes-row"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col-${j}`}
              style={{
                width: '16rem',
                height: '16rem',
                position: 'relative',
                borderRight: `1px solid rgba(148, 163, 184, 0.2)`,
                borderBottom: `1px solid rgba(148, 163, 184, 0.2)`,
              }}
              className="boxes-col"
            />
          ))}
        </motion.div>
      ))}
      
      <style jsx>{`
        @media (max-width: 768px) {
          .boxes-col {
            width: 12rem !important;
            height: 12rem !important;
          }
        }
      `}</style>
    </div>
  );
};