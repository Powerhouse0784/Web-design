import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, Sparkles, TrendingUp, Award, Star, ArrowRight, Zap, Target, Rocket, Eye } from 'lucide-react';
import { BackgroundGradient } from '../components/BackgroundGradient';
import { GlareCard } from '../components/GlareCard';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Sparkles size={16} />, color: '#6366f1' },
    { id: 'web', label: 'Web Apps', icon: '🌐', color: '#8b5cf6' },
    { id: 'mobile', label: 'Mobile', icon: '📱', color: '#ec4899' },
    { id: 'ecommerce', label: 'E-commerce', icon: '🛒', color: '#14b8a6' }
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'ecommerce',
      description: 'Modern online marketplace with real-time inventory and payment processing',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#',
      results: '200% increase in sales',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      stats: { users: '50K+', revenue: '+200%', rating: '4.9' }
    },
    {
      title: 'FinTech Mobile App',
      category: 'mobile',
      description: 'Banking app with biometric authentication and real-time transactions',
      image: '💰',
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: '#',
      github: '#',
      results: '100K+ downloads',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      stats: { users: '100K+', downloads: '100K', rating: '4.8' }
    },
    {
      title: 'SaaS Dashboard',
      category: 'web',
      description: 'Analytics platform with real-time data visualization and reporting',
      image: '📊',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
      link: '#',
      github: '#',
      results: '60% faster load time',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      stats: { performance: '60%↑', users: '25K+', rating: '4.9' }
    },
    {
      title: 'Healthcare Portal',
      category: 'web',
      description: 'HIPAA-compliant patient management system with telemedicine features',
      image: '🏥',
      technologies: ['React', 'GraphQL', 'AWS'],
      link: '#',
      github: '#',
      results: '10K+ patients daily',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      stats: { patients: '10K+', daily: '10K', rating: '4.8' }
    },
    {
      title: 'Food Delivery App',
      category: 'mobile',
      description: 'Real-time order tracking with AI-powered restaurant recommendations',
      image: '🍕',
      technologies: ['Flutter', 'Node.js', 'Socket.io'],
      link: '#',
      github: '#',
      results: '5M+ orders processed',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      stats: { orders: '5M+', restaurants: '2K+', rating: '4.7' }
    },
    {
      title: 'Real Estate Platform',
      category: 'web',
      description: 'Property listing platform with virtual tours and mortgage calculator',
      image: '🏠',
      technologies: ['Next.js', 'Prisma', 'Tailwind'],
      link: '#',
      github: '#',
      results: '1M+ monthly views',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      stats: { views: '1M+', listings: '50K+', rating: '4.9' }
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const achievements = [
    { 
      icon: <Rocket />, 
      value: '500+', 
      label: 'Successful Launches', 
      color: '#6366f1',
      bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      description: 'Projects delivered on time'
    },
    { 
      icon: <Zap />, 
      value: '10M+', 
      label: 'Happy Users', 
      color: '#8b5cf6',
      bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      description: 'Across all platforms'
    },
    { 
      icon: <Target />, 
      value: '98%', 
      label: 'Success Rate', 
      color: '#ec4899',
      bgGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      description: 'Client satisfaction score'
    },
    { 
      icon: <Award />, 
      value: '25+', 
      label: 'Industry Awards', 
      color: '#14b8a6',
      bgGradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      description: 'Recognition for excellence'
    }
  ];

  return (
    <div className="portfolio-ultimate">
      {/* Hero Section */}
      <section className="hero-ultimate">
        <div className="hero-shapes-ultimate">
          <div className="shape-ult-1"></div>
          <div className="shape-ult-2"></div>
          <div className="shape-ult-3"></div>
        </div>

        <div className="container">
          <motion.div
            className="hero-wrapper-ultimate"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="badge-ultimate"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={16} />
              <span>Excellence in Every Project</span>
            </motion.div>

            <h1 className="title-ultimate">
              Discover Our <span className="gradient-ultimate">Portfolio</span>
            </h1>
            
            <p className="subtitle-ultimate">
              Real projects. Real results. Real impact. Explore our collection of successful digital transformations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section - Modern Design */}
      <section className="filter-ultimate-section">
        <div className="container">
          <motion.div
            className="filter-modern"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="filter-top">
              <div className="filter-info">
                <Filter size={24} />
                <div>
                  <h3>Explore Projects</h3>
                  <p>Filter by category to find what you're looking for</p>
                </div>
              </div>
              <div className="project-count">
                <span className="count-number">{filteredProjects.length}</span>
                <span className="count-label">Projects</span>
              </div>
            </div>

            <div className="filter-categories">
              {categories.map(cat => (
                <motion.button
                  key={cat.id}
                  className={`category-btn ${filter === cat.id ? 'active' : ''}`}
                  onClick={() => setFilter(cat.id)}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ 
                    '--cat-color': cat.color
                  }}
                >
                  {typeof cat.icon === 'string' ? (
                    <span className="cat-emoji">{cat.icon}</span>
                  ) : (
                    <div className="cat-icon">{cat.icon}</div>
                  )}
                  <span className="cat-label">{cat.label}</span>
                  {filter === cat.id && (
                    <motion.div
                      className="active-indicator"
                      layoutId="activeCategory"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid - Clean Design */}
      <section className="projects-ultimate-section">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div 
              key={filter}
              className="projects-modern-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${filter}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.08 }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <BackgroundGradient className="rounded-[28px] p-0.5 h-full">
                    <div className="project-modern-card">
                      {/* Project Header */}
                      <div 
                        className="project-visual-modern"
                        style={{ background: `${project.gradient}` }}
                      >
                        <motion.span 
                          className="emoji-modern"
                          animate={{
                            scale: hoveredProject === index ? 1.15 : 1,
                            rotate: hoveredProject === index ? 8 : 0
                          }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          {project.image}
                        </motion.span>

                        {/* Hover Actions */}
                        <motion.div
                          className="hover-panel"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                        >
                          <a href={project.link} className="action-modern primary">
                            <Eye size={18} />
                            <span>Live Demo</span>
                          </a>
                          <a href={project.github} className="action-modern">
                            <Github size={18} />
                            <span>Code</span>
                          </a>
                        </motion.div>

                        {/* Quick Stats */}
                        <div className="quick-metrics">
                          <div className="metric-badge">
                            <Star size={12} fill="#fbbf24" stroke="#fbbf24" />
                            {project.stats.rating}
                          </div>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="project-details-modern">
                        <div className="details-top">
                          <span className="badge-category">{project.category}</span>
                          <TrendingUp size={16} className="trend-icon" />
                        </div>

                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                        <div className="tech-modern">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="project-bottom">
                          <div className="results-modern">
                            <Zap size={14} />
                            <span>{project.results}</span>
                          </div>
                          <a href={project.link} className="link-modern">
                            Explore <ArrowRight size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </BackgroundGradient>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div 
              className="empty-ultimate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className="empty-emoji">🔍</span>
              <h3>No Projects Found</h3>
              <p>Try a different category</p>
              <button 
                onClick={() => setFilter('all')}
                className="reset-ultimate"
              >
                View All Projects
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Achievements - Unique Design */}
      <section className="achievements-ultimate">
        <div className="achievements-overlay"></div>
        <div className="container">
          <motion.div
            className="achievements-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge-ultimate white">
              <Award size={16} />
              <span>Our Impact</span>
            </div>
            <h2>Success by Numbers</h2>
            <p>Measurable results that demonstrate our commitment to excellence</p>
          </motion.div>

          <div className="achievements-modern-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlareCard className="achievement-modern">
                  <div 
                    className="icon-modern"
                    style={{ background: achievement.bgGradient }}
                  >
                    {achievement.icon}
                  </div>
                  <h3>{achievement.value}</h3>
                  <p className="ach-label">{achievement.label}</p>
                  <p className="ach-desc">{achievement.description}</p>
                </GlareCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-ultimate">
        <div className="container">
          <motion.div
            className="cta-wrapper-ultimate"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="cta-glow-ultimate"></div>
            
            <h2>Let's Create Your Success Story</h2>
            <p>Ready to transform your vision into reality? Join our portfolio of successful projects.</p>
            
            <div className="cta-buttons-ultimate">
              <a href="/contact" className="btn-ultimate primary">
                Start Your Project <ArrowRight size={20} />
              </a>
              <a href="/services" className="btn-ultimate">
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;