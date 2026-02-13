import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <Code2 size={32} />
              <span className="gradient-text">TechVision</span>
            </div>
            <p className="footer-desc">
              Transforming ideas into powerful digital solutions. We build the future, one line of code at a time.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" aria-label="GitHub"><Github size={20} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services">Web Development</Link></li>
              <li><Link to="/services">Mobile Apps</Link></li>
              <li><Link to="/services">UI/UX Design</Link></li>
              <li><Link to="/services">Cloud Solutions</Link></li>
              <li><Link to="/services">Consulting</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Info</h3>
            <ul className="contact-info">
              <li>
                <MapPin size={18} />
                <span>123 Mic Testing, delhi,  99025</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+91 123-4567</span>
              </li>
              <li>
                <Mail size={18} />
                <span>hello@techvision.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} TechVision. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;