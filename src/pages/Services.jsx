import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Smartphone, Cloud, Palette, Database, ShoppingCart, Shield, ArrowRight, CheckCircle2, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { GlareCard } from '../components/GlareCard';
import { GridBackground } from '../components/GridBackground';
import { BackgroundGradient } from '../components/BackgroundGradient';
import { HoverEffect } from '../components/HoverEffect';
import './Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Code />,
      title: 'Web Development',
      shortDesc: 'Custom websites and web applications',
      description: 'Build powerful, scalable web applications using cutting-edge technologies like React, Next.js, Node.js, and modern frameworks. We create responsive, fast-loading websites that deliver exceptional user experiences.',
      features: [
        'Custom Web Applications',
        'E-commerce Platforms',
        'Progressive Web Apps (PWA)',
        'API Development & Integration',
        'Performance Optimization',
        'SEO-Friendly Architecture'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'MongoDB'],
      pricing: 'Starting at $5,000',
      color: '#6366f1',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      emoji: '💻'
    },
    {
      icon: <Smartphone />,
      title: 'Mobile App Development',
      shortDesc: 'Native and cross-platform mobile apps',
      description: 'Create stunning mobile applications for iOS and Android. Whether you need a native app or cross-platform solution, we deliver high-performance apps that users love.',
      features: [
        'iOS & Android Development',
        'Cross-Platform Apps (React Native)',
        'Native Performance',
        'Offline Functionality',
        'Push Notifications',
        'App Store Optimization'
      ],
      technologies: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'Redux', 'REST APIs'],
      pricing: 'Starting at $8,000',
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      emoji: '📱'
    },
    {
      icon: <Cloud />,
      title: 'Cloud Solutions',
      shortDesc: 'Scalable cloud infrastructure',
      description: 'Deploy and manage scalable cloud infrastructure on AWS, Azure, or Google Cloud. We handle everything from architecture design to DevOps automation.',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Auto-Scaling Solutions',
        'DevOps & CI/CD',
        'Serverless Architecture',
        'Cloud Security'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
      pricing: 'Starting at $3,000/month',
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      emoji: '☁️'
    },
    {
      icon: <Palette />,
      title: 'UI/UX Design',
      shortDesc: 'Beautiful, user-centric designs',
      description: 'Create intuitive, engaging user interfaces that convert. Our design team specializes in creating beautiful experiences backed by user research and data.',
      features: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Visual Design',
        'Design Systems',
        'Responsive Design',
        'Accessibility (WCAG)'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Framer', 'InVision', 'Principle'],
      pricing: 'Starting at $2,500',
      color: '#14b8a6',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      emoji: '🎨'
    },
    {
      icon: <Database />,
      title: 'Database Solutions',
      shortDesc: 'Robust data management systems',
      description: 'Design and implement efficient database solutions. From SQL to NoSQL, we ensure your data is structured, secure, and performant.',
      features: [
        'Database Design & Architecture',
        'Performance Optimization',
        'Data Migration',
        'Backup & Recovery',
        'Real-time Databases',
        'Data Analytics'
      ],
      technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'Firebase'],
      pricing: 'Starting at $2,000',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      emoji: '💾'
    },
    {
      icon: <ShoppingCart />,
      title: 'E-commerce Solutions',
      shortDesc: 'Complete online store development',
      description: 'Launch your online store with our comprehensive e-commerce solutions. We build secure, scalable platforms that drive sales and customer satisfaction.',
      features: [
        'Custom E-commerce Platforms',
        'Payment Gateway Integration',
        'Inventory Management',
        'Shopping Cart Optimization',
        'Multi-currency Support',
        'Analytics & Reporting'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Magento', 'BigCommerce'],
      pricing: 'Starting at $6,000',
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      emoji: '🛒'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and project requirements through comprehensive research.',
      icon: <Sparkles />,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Create detailed project roadmap, wireframes, and technical specifications with clear milestones.',
      icon: <TrendingUp />,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Craft beautiful, user-centric designs that align with your brand identity and engage your audience.',
      icon: <Palette />,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      step: '04',
      title: 'Development',
      description: 'Build your solution using agile methodology with regular updates, testing, and quality assurance.',
      icon: <Code />,
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Rigorous quality assurance to ensure everything works perfectly across all devices and browsers.',
      icon: <Shield />,
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      step: '06',
      title: 'Launch & Support',
      description: 'Deploy your project and provide ongoing maintenance, support, and performance optimization.',
      icon: <Zap />,
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ];

  const benefits = [
    'Dedicated Project Manager',
    '24/7 Support After Launch',
    'Transparent Pricing',
    'Agile Development Process',
    '100% Satisfaction Guarantee',
    'Free Maintenance (30 Days)'
  ];

  return (
    <div className="services-page-advanced">
      {/* Hero Section */}
      <section className="services-hero-advanced">
        <div className="hero-bg-shapes-services">
          <div className="shape-service-1"></div>
          <div className="shape-service-2"></div>
          <div className="shape-service-3"></div>
        </div>

        <div className="container">
          <motion.div
            className="hero-content-services"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="hero-badge-services"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={16} />
              <span>Comprehensive Digital Solutions</span>
            </motion.div>

            <h1 className="gradient-text-services">Our Services</h1>
            <p className="hero-subtitle-services">
              Comprehensive digital solutions tailored to your business needs. From concept to launch and beyond.
            </p>

            <div className="hero-stats-services">
              <div className="stat-service">
                <h3>500+</h3>
                <p>Projects Delivered</p>
              </div>
              <div className="stat-service">
                <h3>98%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div className="stat-service">
                <h3>50+</h3>
                <p>Expert Team</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Interactive Cards */}
      <section className="section services-grid-section-advanced">
        <div className="container">
          <motion.div 
            className="section-header-services"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-badge-services">
              <Zap size={16} />
              <span>What We Offer</span>
            </div>
            <h2>Explore Our Solutions</h2>
            <p>Click on any service to see detailed information and pricing</p>
          </motion.div>

          <div className="services-grid-hover">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveService(index)}
              >
                <GlareCard className={`service-card-hover ${activeService === index ? 'active' : ''}`}>
                  <div className="service-card-hover-inner">
                    <div 
                      className="service-emoji-large"
                      style={{ filter: `drop-shadow(0 0 20px ${service.color}40)` }}
                    >
                      {service.emoji}
                    </div>

                    <div 
                      className="service-icon-bg-hover"
                      style={{ background: `${service.color}15` }}
                    >
                      <div style={{ color: service.color }}>{service.icon}</div>
                    </div>

                    <h3>{service.title}</h3>
                    <p className="short-desc-hover">{service.shortDesc}</p>

                    <div className="tech-preview">
                      {service.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="tech-chip">{tech}</span>
                      ))}
                    </div>

                    <div className="service-price-hover">
                      {service.pricing}
                    </div>

                    <div className="view-details-btn">
                      View Details <ArrowRight size={16} />
                    </div>
                  </div>
                </GlareCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details - Dynamic Section */}
      <section className="section service-details-advanced">
        <div className="details-bg-wrapper">
          <GridBackground />
          
          <div className="container details-content-layer">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                className="detail-content-advanced"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
              >
                <div className="detail-header-advanced">
                  <div 
                    className="detail-icon-large"
                    style={{ background: services[activeService].gradient }}
                  >
                    <span className="detail-emoji">{services[activeService].emoji}</span>
                    {services[activeService].icon}
                  </div>
                  
                  <div className="detail-header-text">
                    <div className="detail-badge-top">
                      <CheckCircle2 size={14} />
                      <span>Premium Service</span>
                    </div>
                    <h2>{services[activeService].title}</h2>
                    <p>{services[activeService].description}</p>
                  </div>
                </div>

                <div className="detail-grid-advanced">
                  <div className="detail-features-advanced">
                    <h3>
                      <Shield size={22} />
                      Key Features
                    </h3>
                    <ul>
                      {services[activeService].features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <CheckCircle2 size={20} />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-tech-advanced">
                    <h3>
                      <Code size={22} />
                      Technologies We Use
                    </h3>
                    <div className="tech-tags-grid">
                      {services[activeService].technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="tech-tag-advanced"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="benefits-box">
                      <h4>What's Included</h4>
                      <div className="benefits-list">
                        {benefits.map((benefit, i) => (
                          <div key={i} className="benefit-item">
                            <CheckCircle2 size={16} />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="detail-cta-advanced">
                      <div className="pricing-showcase">
                        <span className="pricing-label">Investment</span>
                        <p className="pricing-large-advanced">{services[activeService].pricing}</p>
                        <span className="pricing-note">Custom quotes available</span>
                      </div>
                      <a href="/contact" className="btn-get-started">
                        Get Started <ArrowRight size={20} />
                      </a>
                      <a href="/portfolio" className="btn-view-work">
                        View Our Work
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Process Section - Enhanced */}
      <section className="section process-advanced">
        <div className="container">
          <motion.div 
            className="section-header-services"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-badge-services">
              <TrendingUp size={16} />
              <span>Our Process</span>
            </div>
            <h2>How We Work</h2>
            <p>A proven methodology that delivers results every time</p>
          </motion.div>

          <div className="process-grid-advanced">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BackgroundGradient className="rounded-[22px] p-0.5 h-full">
                  <div className="process-card-advanced">
                    <div 
                      className="process-icon-advanced"
                      style={{ background: item.gradient }}
                    >
                      {item.icon}
                    </div>
                    
                    <div className="process-step-advanced">{item.step}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    
                    <div className="process-arrow">
                      {index < process.length - 1 && <ArrowRight size={24} />}
                    </div>
                  </div>
                </BackgroundGradient>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-advanced">
        <div className="container">
          <motion.div
            className="cta-content-services"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="cta-glow-circle"></div>
            
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss your project and create something amazing together</p>
            
            <div className="cta-buttons-services">
              <a href="/contact" className="btn-cta-primary-services">
                Start Your Project <ArrowRight size={20} />
              </a>
              <a href="/portfolio" className="btn-cta-secondary-services">
                View Portfolio
              </a>
            </div>

            <div className="cta-trust-badges">
              <div className="trust-badge">
                <CheckCircle2 size={18} />
                <span>500+ Projects</span>
              </div>
              <div className="trust-badge">
                <CheckCircle2 size={18} />
                <span>98% Satisfaction</span>
              </div>
              <div className="trust-badge">
                <CheckCircle2 size={18} />
                <span>Award Winning</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;