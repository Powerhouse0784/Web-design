import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Sparkles, Users, TrendingUp, Award, Rocket } from 'lucide-react';
import { InfiniteMovingCards } from '../components/InfiniteMovingCards';
import { GlareCard } from '../components/GlareCard';
import { GridBackground } from '../components/GridBackground';
import { BackgroundRippleEffect } from '../components/BackgroundRippleEffect';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <Zap />,
      title: 'Lightning Fast',
      description: 'Optimized performance with cutting-edge technologies for blazing-fast load times.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: <Shield />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee for your peace of mind.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: <Sparkles />,
      title: 'Modern Design',
      description: 'Beautiful, intuitive interfaces that users love and remember.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: <Users />,
      title: 'Expert Team',
      description: '50+ certified professionals dedicated to bringing your vision to life.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      icon: <TrendingUp />,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business, from startup to enterprise.',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      icon: <Award />,
      title: 'Award Winning',
      description: 'Recognized excellence with 25+ industry awards and certifications.',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ];

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with React, Node.js, and modern frameworks. We create responsive, high-performance solutions.',
      icon: '💻',
      technologies: ['React', 'Node.js', 'TypeScript', 'Next.js'],
      link: '/services'
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android. Delivering seamless user experiences across all devices.',
      icon: '📱',
      technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter'],
      link: '/services'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps services on AWS, Azure, and GCP. Build resilient, auto-scaling systems.',
      icon: '☁️',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      link: '/services'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive design systems that engage users and drive conversions. From wireframes to high-fidelity prototypes.',
      icon: '🎨',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Framer'],
      link: '/services'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence. Transform your data into actionable insights.',
      icon: '🤖',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Langchain'],
      link: '/services'
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Full-featured online stores with secure payment processing. Boost your sales with seamless shopping experiences.',
      icon: '🛒',
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal'],
      link: '/services'
    }
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Team Members' },
    { value: '10+', label: 'Years Experience' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'TechVision transformed our digital presence completely. Their expertise and dedication are unmatched.',
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, AppCo',
      content: 'The team delivered beyond our expectations. Our app now has 100K+ active users thanks to their work.',
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'CTO, DataFlow',
      content: 'Professional, innovative, and results-driven. TechVision is our go-to development partner.',
      avatar: '👩‍🔬'
    },
    {
      name: 'David Park',
      role: 'Product Manager, InnovateCo',
      content: 'Outstanding quality and attention to detail. They turned our vision into reality flawlessly.',
      avatar: '👨‍💼'
    },
    {
      name: 'Lisa Martinez',
      role: 'Director, CloudScale',
      content: 'Best development team we\'ve worked with. Professional, responsive, and incredibly skilled.',
      avatar: '👩‍💻'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section - Enhanced */}
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Rocket size={16} />
              <span className="badge-text-full">Trusted by 500+ Companies Worldwide</span>
              <span className="badge-text-short">Trusted Worldwide</span>
            </motion.div>

            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Transform Your Business with
              <span className="gradient-text"> Cutting-Edge Technology</span>
            </motion.h1>

            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We craft exceptional digital experiences that drive growth, engage users, and deliver measurable results. Your success is our mission.
            </motion.p>

            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/contact" className="btn btn-primary btn-glow">
                Start Your Project <ArrowRight size={20} />
              </Link>
              <Link to="/portfolio" className="btn btn-outline btn-hover-fill">
                View Our Work
              </Link>
            </motion.div>

            <div className="hero-stats">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="hero-bg">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
      </section>

      {/* Services Preview with Advanced Design */}
      <section className="section services-preview">
        <div className="services-grid-wrapper">
          <GridBackground />
          
          <div className="container services-content-layer">
            <motion.div 
              className="services-header-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="services-heading">Our Core Services</h2>
              <p className="services-subheading">Comprehensive solutions tailored to your unique needs</p>
            </motion.div>

            <div className="services-advanced-grid">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-card-advanced"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="service-card-inner">
                    <div className="service-icon-wrapper">
                      <span className="service-icon">{service.icon}</span>
                      <div className="icon-glow"></div>
                    </div>
                    
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    
                    <div className="service-tech-stack">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <Link to={service.link} className="service-link">
                      Learn More
                      <ArrowRight size={16} className="arrow-icon" />
                    </Link>
                  </div>
                  
                  <div className="service-card-gradient"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features with Simple Background Animation */}
      <section className="section features">
        <div className="features-simple-wrapper">
          <div className="simple-bg-animation">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
          </div>
          
          <div className="container features-content-layer">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="features-heading">Why Choose TechVision?</h2>
              <p className="features-subheading">We deliver excellence in every aspect of our work</p>
            </motion.div>

            <div className="features-grid-glare">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlareCard className="feature-card-glare">
                    <div 
                      className="feature-icon-glare"
                      style={{ background: feature.gradient }}
                    >
                      {feature.icon}
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                    <div className="feature-shine"></div>
                  </GlareCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with Ripple Effect */}
      <section className="section testimonials-infinite">
        <div className="testimonials-ripple-wrapper">
          <BackgroundRippleEffect />
          
          <div className="container-full testimonials-content-layer">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="testimonials-heading">What Our Clients Say</h2>
              <p className="testimonials-subheading">Don't just take our word for it</p>
            </motion.div>

            <InfiniteMovingCards 
              items={testimonials} 
              direction="left" 
              speed="slow"
              pauseOnHover={true}
            />
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="cta-section-advanced">
        <div className="container">
          <motion.div
            className="cta-content-advanced"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="cta-glow-effect"
            ></motion.div>
            
            <h2>Ready to Start Your Project?</h2>
            <p>Let's build something amazing together. Get in touch with our team today.</p>
            
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-pulse">
              </Link>
              <Link to="/portfolio" className="btn btn-outline-white">
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;