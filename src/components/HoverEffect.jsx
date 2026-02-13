import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HoverEffect = ({ items, className = "" }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={`hover-effect-grid ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem',
        padding: '1rem 0'
      }}
    >
      {items.map((item, idx) => (
        <Link
          to={item?.link}
          key={idx}
          className="hover-effect-link"
          style={{
            position: 'relative',
            display: 'block',
            padding: '0.5rem',
            height: '100%',
            width: '100%'
          }}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="hover-effect-background"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.15))',
                  borderRadius: '1.5rem',
                  zIndex: 0
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardIcon>{item.icon}</CardIcon>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            {item.technologies && (
              <CardTechnologies technologies={item.technologies} />
            )}
            <CardFooter />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className = "", children }) => {
  return (
    <div
      className={`hover-effect-card ${className}`}
      style={{
        borderRadius: '1rem',
        height: '100%',
        width: '100%',
        padding: '1.5rem',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        border: '2px solid rgba(226, 232, 240, 0.6)',
        position: 'relative',
        zIndex: 20,
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02)'
      }}
    >
      <div style={{ position: 'relative', zIndex: 50 }}>
        <div style={{ padding: '1rem' }}>{children}</div>
      </div>
      {/* Gradient overlay */}
      <div 
        className="card-gradient-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.03), rgba(139, 92, 246, 0.03), rgba(236, 72, 153, 0.03))',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export const CardIcon = ({ children }) => {
  return (
    <div 
      className="card-icon"
      style={{
        fontSize: '3.75rem',
        marginBottom: '1rem',
        transition: 'transform 0.3s ease',
        filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))'
      }}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ className = "", children }) => {
  return (
    <h4
      className={`card-title ${className}`}
      style={{
        color: '#0f172a',
        fontWeight: 800,
        letterSpacing: '-0.01em',
        fontSize: '1.25rem',
        marginBottom: '0.75rem'
      }}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({ className = "", children }) => {
  return (
    <p
      className={`card-description ${className}`}
      style={{
        color: '#64748b',
        letterSpacing: '0.01em',
        lineHeight: '1.7',
        fontSize: '0.875rem',
        marginBottom: '1rem'
      }}
    >
      {children}
    </p>
  );
};

export const CardTechnologies = ({ technologies }) => {
  return (
    <div 
      className="card-technologies"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '1rem'
      }}
    >
      {technologies.map((tech, idx) => (
        <span
          key={idx}
          className="tech-badge"
          style={{
            padding: '0.375rem 0.75rem',
            fontSize: '0.75rem',
            fontWeight: 600,
            borderRadius: '0.5rem',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))',
            color: '#6366f1',
            border: '1.5px solid rgba(99, 102, 241, 0.2)',
            transition: 'all 0.3s ease'
          }}
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export const CardFooter = () => {
  return (
    <div 
      className="card-footer"
      style={{
        marginTop: 'auto',
        paddingTop: '1rem',
        borderTop: '1px solid rgba(226, 232, 240, 0.6)',
        transition: 'border-color 0.3s ease'
      }}
    >
      <span 
        className="footer-link"
        style={{
          color: '#6366f1',
          fontWeight: 600,
          fontSize: '0.875rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          transition: 'gap 0.3s ease'
        }}
      >
        Learn More <ArrowRight size={16} />
      </span>
    </div>
  );
};

// Add these CSS classes to your global CSS or Home.css
const styles = `
body.dark .hover-effect-card {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%) !important;
  border-color: rgba(99, 102, 241, 0.25) !important;
}

body.dark .card-title {
  color: #f1f5f9 !important;
}

body.dark .card-description {
  color: #cbd5e0 !important;
}

body.dark .tech-badge {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15)) !important;
  border-color: rgba(99, 102, 241, 0.3) !important;
  color: #a5b4fc !important;
}

body.dark .card-footer {
  border-color: rgba(99, 102, 241, 0.25) !important;
}

body.dark .footer-link {
  color: #a5b4fc !important;
}

.hover-effect-link:hover .hover-effect-card {
  border-color: rgba(99, 102, 241, 0.4);
  box-shadow: 0 20px 60px rgba(99, 102, 241, 0.15), 0 4px 15px rgba(0, 0, 0, 0.05);
  transform: translateY(-4px);
}

body.dark .hover-effect-link:hover .hover-effect-card {
  box-shadow: 0 20px 60px rgba(99, 102, 241, 0.25);
}

.hover-effect-link:hover .card-gradient-overlay {
  opacity: 1;
}

.hover-effect-link:hover .card-icon {
  transform: scale(1.1);
}

.hover-effect-link:hover .footer-link {
  gap: 0.75rem;
}

.hover-effect-link:hover .tech-badge {
  border-color: rgba(99, 102, 241, 0.4);
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15));
  transform: translateY(-2px);
}

body.dark .hover-effect-link:hover .tech-badge {
  border-color: rgba(99, 102, 241, 0.4);
}

@media (max-width: 768px) {
  .hover-effect-grid {
    grid-template-columns: 1fr !important;
  }
}
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}