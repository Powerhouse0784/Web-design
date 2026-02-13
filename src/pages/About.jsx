import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Zap, Users2, Award, TrendingUp, Sparkles, CheckCircle2, ArrowRight, Mail, Linkedin, Twitter } from 'lucide-react';
import { GridBackground } from '../components/GridBackground';
import { BackgroundGradient } from '../components/BackgroundGradient';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <Target />,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that drive real business results.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#667eea'
    },
    {
      icon: <Heart />,
      title: 'Client-Centric',
      description: 'Your success is our success. We go above and beyond to exceed expectations every single time.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: '#f093fb'
    },
    {
      icon: <Zap />,
      title: 'Excellence',
      description: 'Quality is non-negotiable. We deliver nothing but the best through meticulous attention to detail.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      color: '#4facfe'
    },
    {
      icon: <Sparkles />,
      title: 'Creativity',
      description: 'We think outside the box to create unique solutions that make your brand stand out.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      color: '#43e97b'
    },
    {
      icon: <Users2 />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and transparent communication throughout every project.',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      color: '#fa709a'
    },
    {
      icon: <TrendingUp />,
      title: 'Growth Mindset',
      description: 'Continuous learning and improvement are at the core of everything we do.',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      color: '#30cfd0'
    }
  ];

  const team = [
    { 
      name: 'Shyam Gupta', 
      role: 'CEO & Founder', 
      emoji: '👨‍💼', 
      expertise: 'Business Strategy',
      bio: '15+ years in tech leadership',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    { 
      name: 'Sohan Verma', 
      role: 'CTO', 
      emoji: '👩‍💻', 
      expertise: 'Full-Stack Development',
      bio: 'Expert in scalable architectures',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    { 
      name: 'Amit Singh', 
      role: 'Design Lead', 
      emoji: '👨‍🎨', 
      expertise: 'UI/UX Design',
      bio: 'Award-winning design specialist',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    { 
      name: 'Seeta Sharma', 
      role: 'Project Manager', 
      emoji: '👩‍💼', 
      expertise: 'Agile Management',
      bio: 'Certified Scrum Master',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    { 
      name: 'Rohit Kumar', 
      role: 'Lead Developer', 
      emoji: '👨‍💻', 
      expertise: 'React & Node.js',
      bio: 'Open source contributor',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    { 
      name: 'Priya Patel', 
      role: 'Marketing Director', 
      emoji: '👩‍💼', 
      expertise: 'Digital Marketing',
      bio: 'Data-driven marketing expert',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ];

  const milestones = [
    { 
      year: '2014', 
      event: 'Company Founded', 
      description: 'Started with a vision to transform digital experiences and empower businesses worldwide.',
      icon: '🚀'
    },
    { 
      year: '2016', 
      event: '100 Projects Delivered', 
      description: 'Reached our first major milestone with 100 successful projects across multiple industries.',
      icon: '📈'
    },
    { 
      year: '2018', 
      event: 'International Expansion', 
      description: 'Opened offices in 3 countries, serving clients globally with local expertise.',
      icon: '🌍'
    },
    { 
      year: '2020', 
      event: 'Award Winner', 
      description: 'Named "Best Digital Agency of the Year" by Tech Innovation Awards.',
      icon: '🏆'
    },
    { 
      year: '2022', 
      event: '500+ Happy Clients', 
      description: 'Serving businesses worldwide with cutting-edge digital solutions.',
      icon: '🎯'
    },
    { 
      year: '2024', 
      event: 'Industry Leader', 
      description: 'Recognized as a top-tier technology partner with 98% client satisfaction.',
      icon: '⭐'
    }
  ];

  const achievements = [
    'ISO 9001:2015 Certified',
    'Google Partner Agency',
    'AWS Advanced Consulting Partner',
    'Microsoft Gold Partner',
    'Forbes Top 100 Agencies',
    'Clutch Top Developer 2024'
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero-advanced">
        <div className="hero-bg-shapes">
          <div className="shape-1"></div>
          <div className="shape-2"></div>
          <div className="shape-3"></div>
        </div>
        
        <div className="container">
          <motion.div
            className="hero-content-advanced"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={16} />
              <span>Transforming Digital Experiences Since 2014</span>
            </motion.div>
            
            <h1 className="gradient-text-advanced">About TechVision</h1>
            <p className="hero-subtitle-advanced">
              We're a passionate team of innovators, creators, and problem-solvers dedicated to transforming businesses through cutting-edge technology and exceptional design.
            </p>
            
            <div className="hero-stats-compact">
              <div className="stat-compact">
                <h3>500+</h3>
                <p>Projects Delivered</p>
              </div>
              <div className="stat-compact">
                <h3>98%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div className="stat-compact">
                <h3>50+</h3>
                <p>Team Members</p>
              </div>
              <div className="stat-compact">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-advanced">
        <div className="container">
          <div className="mission-grid-advanced">
            <motion.div
              className="mission-content-advanced"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-badge">
                <Target size={16} />
                <span>Our Mission</span>
              </div>
              
              <h2>Empowering Businesses Through Innovation</h2>
              
              <p className="lead-text">
                To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving digital landscape.
              </p>
              
              <p>
                Since 2014, we've been at the forefront of digital innovation, helping companies of all sizes achieve their goals through custom software development, stunning design, and strategic consulting. We believe technology should be accessible, powerful, and transformative.
              </p>
              
              <div className="mission-highlights">
                <div className="highlight-item">
                  <CheckCircle2 size={20} />
                  <span>Customer-first approach in everything we do</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={20} />
                  <span>Cutting-edge technology and best practices</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={20} />
                  <span>Transparent communication and collaboration</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={20} />
                  <span>Long-term partnerships and dedicated support</span>
                </div>
              </div>

              <div className="achievement-badges">
                {achievements.map((achievement, index) => (
                  <motion.span
                    key={index}
                    className="achievement-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 size={14} />
                    {achievement}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="mission-visual-advanced"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="visual-card">
                <div className="card-glow"></div>
                <div className="visual-content">
                  <div className="visual-icon">
                    <span className="emoji-large">🚀</span>
                  </div>
                  
                  <div className="visual-stats-grid">
                    <div className="visual-stat">
                      <Users2 size={28} />
                      <div>
                        <h4>50+</h4>
                        <p>Expert Team</p>
                      </div>
                    </div>
                    <div className="visual-stat">
                      <Award size={28} />
                      <div>
                        <h4>25+</h4>
                        <p>Awards Won</p>
                      </div>
                    </div>
                    <div className="visual-stat">
                      <TrendingUp size={28} />
                      <div>
                        <h4>98%</h4>
                        <p>Retention Rate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-advanced">
        <div className="values-bg-wrapper">
          <GridBackground />
          
          <div className="container values-content-layer">
            <motion.div 
              className="section-header-advanced values-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-badge-center">
                <Heart size={16} />
                <span>Our Core Values</span>
              </div>
              <h2 className="values-main-heading">The Principles That Guide Us</h2>
              <p className="values-description">These fundamental values shape our culture, drive our decisions, and define who we are as a team</p>
            </motion.div>
            
            <div className="values-grid-advanced">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="value-card-advanced"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="value-card-bg" style={{ background: `${value.gradient}15` }}></div>
                  <div 
                    className="value-icon-advanced"
                    style={{ background: value.gradient }}
                  >
                    {value.icon}
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                  <div className="value-shine"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline-section-advanced">
        <div className="container">
          <motion.div 
            className="section-header-advanced"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-badge-center">
              <TrendingUp size={16} />
              <span>Our Journey</span>
            </div>
            <h2>A Decade of Innovation</h2>
            <p>Key milestones that shaped our growth story and defined our path to success</p>
          </motion.div>
          
          <div className="timeline-advanced">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="timeline-item-advanced"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="timeline-dot-wrapper">
                  <div className="timeline-dot">
                    <span className="milestone-icon">{milestone.icon}</span>
                  </div>
                </div>
                
                <div className="timeline-content-advanced">
                  <div className="timeline-year-advanced">{milestone.year}</div>
                  <h3>{milestone.event}</h3>
                  <p>{milestone.description}</p>
                  <div className="timeline-arrow">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section team-advanced">
        <div className="team-bg-gradient"></div>
        
        <div className="container">
          <motion.div 
            className="section-header-advanced"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-badge-center">
              <Users2 size={16} />
              <span>Our Team</span>
            </div>
            <h2>Meet The Visionaries</h2>
            <p>The talented people behind our success and innovation</p>
          </motion.div>
          
          <div className="team-grid-gradient">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BackgroundGradient className="rounded-[22px] p-6 bg-white dark:bg-slate-900 h-full">
                  <div className="team-card-gradient-inner">
                    <div 
                      className="team-avatar-gradient"
                      style={{ background: member.gradient }}
                    >
                      <span className="avatar-emoji-gradient">{member.emoji}</span>
                      <div className="avatar-glow-ring"></div>
                    </div>
                    
                    <div className="team-info-gradient">
                      <h3>{member.name}</h3>
                      <p className="team-role-gradient">{member.role}</p>
                      <div className="expertise-badge">
                        <Sparkles size={14} />
                        <span>{member.expertise}</span>
                      </div>
                      <p className="team-bio-gradient">{member.bio}</p>
                    </div>
                    
                    <div className="team-social-wrapper">
                      <div className="social-divider"></div>
                      <div className="team-social">
                        <a href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@techvision.com`} className="social-icon" title="Email">
                          <Mail size={16} />
                        </a>
                        <a href="#" className="social-icon" title="LinkedIn">
                          <Linkedin size={16} />
                        </a>
                        <a href="#" className="social-icon" title="Twitter">
                          <Twitter size={16} />
                        </a>
                      </div>
                      <p className="connect-text">Connect with {member.name.split(' ')[0]}</p>
                    </div>
                  </div>
                </BackgroundGradient>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Work Together?</h2>
            <p>Let's create something amazing and transform your digital presence</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-cta-primary">
                Get Started <ArrowRight size={20} />
              </a>
              <a href="/portfolio" className="btn-cta-secondary">
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;