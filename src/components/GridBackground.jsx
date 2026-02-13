import React from "react";

export const GridBackground = () => {
  return (
    <>
      {/* Grid Pattern Background */}
      <div
        className="grid-background-pattern"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundSize: '40px 40px',
          backgroundImage: `
            linear-gradient(to right, #e4e4e7 1px, transparent 1px),
            linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)
          `,
        }}
      />
      
      {/* Radial Gradient Mask */}
      <div
        className="grid-radial-mask"
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
          maskImage: 'radial-gradient(ellipse at center, transparent 20%, black)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, black)',
        }}
      />
      
      {/* Add dark mode styles */}
      <style jsx>{`
        body.dark .grid-background-pattern {
          background-image: linear-gradient(to right, #262626 1px, transparent 1px),
                            linear-gradient(to bottom, #262626 1px, transparent 1px);
        }
        
        body.dark .grid-radial-mask {
          background: black;
        }
      `}</style>
    </>
  );
};