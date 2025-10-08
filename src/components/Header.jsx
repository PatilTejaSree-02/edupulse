import { useState } from "react";
import { Button } from "@/components/ui/button.jsx";
import { BookOpen, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="header-logo" onClick={closeMobileMenu}>
          <BookOpen className="header-logo-icon" />
          <span className="header-logo-text">Skillsync</span>
        </Link>
        
        <nav className="header-nav">
          <Link to="/courses" className="header-nav-link">Courses</Link>
          <Link to="/quizzes" className="header-nav-link">Quizzes</Link>
          <Link to="/dashboard" className="header-nav-link">Dashboard</Link>
          <Link to="/about" className="header-nav-link">About</Link>
          <Link to="/contact" className="header-nav-link">Contact</Link>
        </nav>

        <div className="header-actions">
          <Link to="/signin"><Button variant="ghost" size="sm">Sign In</Button></Link>
          <Link to="/get-started"><Button variant="default" size="sm">Get Started</Button></Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className="header-mobile-menu"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
        <nav className="mobile-nav-content">
          <Link to="/courses" className="mobile-nav-link" onClick={closeMobileMenu}>
            Courses
          </Link>
          <Link to="/quizzes" className="mobile-nav-link" onClick={closeMobileMenu}>
            Quizzes
          </Link>
          <Link to="/dashboard" className="mobile-nav-link" onClick={closeMobileMenu}>
            Dashboard
          </Link>
          <Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>
            About
          </Link>
          <Link to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>
            Contact
          </Link>
          <div className="mobile-nav-actions">
            <Link to="/signin" onClick={closeMobileMenu}>
              <Button variant="ghost" size="sm" className="mobile-nav-button">
                Sign In
              </Button>
            </Link>
            <Link to="/get-started" onClick={closeMobileMenu}>
              <Button variant="default" size="sm" className="mobile-nav-button">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
