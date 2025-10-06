import { Button } from "@/components/ui/button.jsx";
import { BookOpen, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-logo">
          <BookOpen className="header-logo-icon" />
          <span className="header-logo-text">LearnHub</span>
        </div>
        
        <nav className="header-nav">
          <Link to="/courses" className="header-nav-link">Courses</Link>
          <Link to="/dashboard" className="header-nav-link">Dashboard</Link>
          <Link to="/about" className="header-nav-link">About</Link>
          <Link to="/contact" className="header-nav-link">Contact</Link>
        </nav>

        <div className="header-actions">
          <Link to="/signin"><Button variant="ghost" size="sm">Sign In</Button></Link>
          <Link to="/get-started"><Button variant="default" size="sm">Get Started</Button></Link>
          <Button variant="ghost" size="icon" className="header-mobile-menu">
            <Menu />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
