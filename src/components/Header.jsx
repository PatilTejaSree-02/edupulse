import { Button } from "@/components/ui/button.jsx";
import { BookOpen, Menu, User } from "lucide-react";
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
          <a href="#" className="header-nav-link">Courses</a>
          <a href="#" className="header-nav-link">Dashboard</a>
          <a href="#" className="header-nav-link">About</a>
          <a href="#" className="header-nav-link">Contact</a>
        </nav>

        <div className="header-actions">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button variant="default" size="sm">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="header-mobile-menu">
            <Menu />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
