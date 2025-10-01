import { BookOpen, Mail, Phone, MapPin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <BookOpen className="footer-logo-icon" />
              <span className="footer-logo-text">LearnHub</span>
            </div>
            <p className="footer-description">
              Empowering learners worldwide with quality education and innovative teaching methods.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-section-title">Quick Links</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-list-item">All Courses</a></li>
              <li><a href="#" className="footer-list-item">Become Instructor</a></li>
              <li><a href="#" className="footer-list-item">About Us</a></li>
              <li><a href="#" className="footer-list-item">Help Center</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-section-title">Categories</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-list-item">Programming</a></li>
              <li><a href="#" className="footer-list-item">Design</a></li>
              <li><a href="#" className="footer-list-item">Data Science</a></li>
              <li><a href="#" className="footer-list-item">Marketing</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-section-title">Contact Info</h3>
            <ul className="footer-list">
              <li className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <span>hello@learnhub.com</span>
              </li>
              <li className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 LearnHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
