import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Sparkles, Clock, Shield, Zap, MessageSquare, Calendar } from 'lucide-react';
import { GridBackground } from '../components/GridBackground';
import { BackgroundGradient } from '../components/BackgroundGradient';
import { Spotlight } from '../components/Spotlight';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'web',
    budget: 'medium',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you! We\'ll get back to you within 24 hours.'
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', company: '', service: 'web', budget: 'medium', message: '' });

      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitted: false, success: false, message: '' });
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone />,
      title: 'Phone',
      details: '+91 123-4567',
      subtext: 'Mon-Fri 9am-6pm EST',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      link: 'tel:+911234567'
    },
    {
      icon: <Mail />,
      title: 'Email',
      details: 'hello@techvision.com',
      subtext: 'We reply within 24 hours',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      link: 'mailto:hello@techvision.com'
    },
    {
      icon: <MapPin />,
      title: 'Office',
      details: '123 Mic testing',
      subtext: 'Delhi, India 99025',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      link: 'https://maps.google.com'
    }
  ];

  const benefits = [
    {
      icon: <Sparkles size={20} />,
      text: 'Free initial consultation & project scoping'
    },
    {
      icon: <Shield size={20} />,
      text: 'Transparent pricing with no hidden fees'
    },
    {
      icon: <MessageSquare size={20} />,
      text: 'Dedicated project manager & direct communication'
    },
    {
      icon: <Zap size={20} />,
      text: 'Agile development with weekly updates'
    },
    {
      icon: <Clock size={20} />,
      text: '24/7 support after launch'
    },
    {
      icon: <CheckCircle size={20} />,
      text: '100% satisfaction guarantee'
    }
  ];

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer: "Most projects take 6-12 weeks from start to finish, depending on complexity. We'll provide a detailed timeline with milestones during our initial consultation.",
      icon: <Calendar />
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes! We provide 30 days of free support after launch, plus optional maintenance packages for long-term partnership.",
      icon: <Shield />
    },
    {
      question: "What's your pricing structure?",
      answer: "We offer both fixed-price and hourly billing. Pricing depends on project scope, complexity, and timeline. Contact us for a custom quote.",
      icon: <Sparkles />
    },
    {
      question: "Can you work with my existing team?",
      answer: "Absolutely! We integrate seamlessly with in-house teams and use collaborative tools like Slack, Jira, GitHub, and Figma.",
      icon: <MessageSquare />
    }
  ];

  const testimonials = [
    {
      quote: "TechVision delivered our project on time and exceeded all expectations. Their attention to detail and communication was outstanding!",
      author: "Shyam",
      role: "CEO, TechStart",
      emoji: "👩‍💼"
    },
    {
      quote: "Best development partner we've ever worked with. Professional, responsive, and incredibly skilled team.",
      author: "Sohan",
      role: "Founder, AppCo",
      emoji: "👨‍💻"
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero-advanced">
        <Spotlight className="contact-spotlight" />
        
        <div className="hero-bg-gradient">
          <div className="gradient-orb orb-contact-1"></div>
          <div className="gradient-orb orb-contact-2"></div>
          <div className="gradient-orb orb-contact-3"></div>
        </div>

        <div className="container">
          <motion.div
            className="hero-content-contact"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="hero-badge-contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={16} />
              <span>Let's Build Something Amazing Together</span>
            </motion.div>

            <h1 className="gradient-text-contact">Get In Touch</h1>
            <p className="hero-subtitle-contact">
              Ready to start your project? Let's discuss how we can help you achieve your goals and transform your digital presence.
            </p>

            <div className="hero-quick-actions">
              <a href="#contact-form" className="quick-action-btn">
                <Send size={20} />
                <div className="action-content">
                  <span className="action-label">Send Message</span>
                  <span className="action-desc">Fill out the form</span>
                </div>
              </a>
              <a href="tel:+911234567" className="quick-action-btn">
                <Phone size={20} />
                <div className="action-content">
                  <span className="action-label">Call Us Now</span>
                  <span className="action-desc">+91 123-4567</span>
                </div>
              </a>
              <a href="mailto:hello@techvision.com" className="quick-action-btn">
                <Mail size={20} />
                <div className="action-content">
                  <span className="action-label">Email Direct</span>
                  <span className="action-desc">hello@techvision.com</span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section contact-info-section-advanced">
        <div className="container">
          <div className="contact-info-grid-advanced">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="info-card-advanced-wrapper"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <BackgroundGradient className="rounded-[22px] p-1 h-full">
                  <div className="info-card-advanced">
                    <div 
                      className="info-icon-advanced"
                      style={{ background: info.gradient }}
                    >
                      {info.icon}
                    </div>
                    <h3>{info.title}</h3>
                    <p className="info-details-advanced">{info.details}</p>
                    <p className="info-subtext-advanced">{info.subtext}</p>
                  </div>
                </BackgroundGradient>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section with Grid Background */}
      <section className="section form-section-advanced">
        <div className="form-grid-wrapper">
          <GridBackground />
          
          <div className="container form-content-layer">
            <div className="form-container-advanced">
              <motion.div
                className="form-content-advanced"
                id="contact-form"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="form-header-badge">
                  <Send size={16} />
                  <span>Send us a message</span>
                </div>

                <h2>Tell Us About Your Project</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible with a personalized solution.</p>

                <form onSubmit={handleSubmit} className="contact-form-advanced">
                  <div className="form-row">
                    <div className="form-group-advanced">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="form-input-advanced"
                      />
                    </div>

                    <div className="form-group-advanced">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="form-input-advanced"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group-advanced">
                      <label htmlFor="company">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Inc."
                        className="form-input-advanced"
                      />
                    </div>

                    <div className="form-group-advanced">
                      <label htmlFor="service">Service Interested In *</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="form-input-advanced"
                      >
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="cloud">Cloud Solutions</option>
                        <option value="design">UI/UX Design</option>
                        <option value="ai">AI & Machine Learning</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="consulting">Consulting</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group-advanced">
                    <label htmlFor="budget">Project Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="form-input-advanced"
                    >
                      <option value="small">Under $10,000</option>
                      <option value="medium">$10,000 - $50,000</option>
                      <option value="large">$50,000 - $100,000</option>
                      <option value="enterprise">$100,000+</option>
                    </select>
                  </div>

                  <div className="form-group-advanced">
                    <label htmlFor="message">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                      className="form-input-advanced"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-submit-advanced"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner-advanced"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={20} />
                      </>
                    )}
                  </button>

                  {formStatus.submitted && (
                    <motion.div
                      className={`form-message-advanced ${formStatus.success ? 'success' : 'error'}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {formStatus.success ? (
                        <CheckCircle size={20} />
                      ) : (
                        <AlertCircle size={20} />
                      )}
                      <span>{formStatus.message}</span>
                    </motion.div>
                  )}
                </form>
              </motion.div>

              <motion.div
                className="form-sidebar-advanced"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="sidebar-card-advanced benefits-card">
                  <h3>Why Choose TechVision?</h3>
                  <div className="benefits-list-advanced">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="benefit-item"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="benefit-icon">{benefit.icon}</div>
                        <span>{benefit.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {testimonials.map((testimonial, index) => (
                  <div key={index} className="sidebar-card-advanced testimonial-card-advanced">
                    <div className="testimonial-emoji">{testimonial.emoji}</div>
                    <p className="testimonial-quote">"{testimonial.quote}"</p>
                    <div className="testimonial-author-advanced">
                      <strong>{testimonial.author}</strong>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section-advanced">
        <div className="container">
          <motion.div 
            className="section-header-advanced"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-badge-center">
              <MessageSquare size={16} />
              <span>FAQ</span>
            </div>
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about our process and services</p>
          </motion.div>

          <div className="faq-grid-advanced">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="faq-card-advanced"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="faq-icon-wrapper">
                  <div className="faq-icon">{faq.icon}</div>
                </div>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;