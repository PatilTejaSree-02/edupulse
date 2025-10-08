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
              <span className="footer-logo-text">Skillsync</span>
            </div>
            <p className="footer-description">
              Empowering learners worldwide with quality education and innovative teaching methods.
            </p>
          </div>
          
          <div className="footer-section footer-contact-section">
            <h3 className="footer-section-title">Contact Info</h3>
            <ul className="footer-list">
              <li className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <span>hello@learnhub.com</span>
              </li>
              <li className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <span>+91 9876543210</span>
              </li>
              <li className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Skillsync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
