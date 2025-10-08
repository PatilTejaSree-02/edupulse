import { Button } from "@/components/ui/button.jsx";
import { Play, BookOpen, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-learning.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-brand">Skillsync</span>
            </h1>
            <h2 className="hero-subtitle">
              Learn Without
              <span className="hero-title-accent"> Limits</span>
            </h2>
            <p className="hero-description">
              Join thousands of learners mastering new skills with our interactive courses, 
              expert instructors, and hands-on projects.
            </p>
          </div>
          
          <div className="hero-buttons">
            <Link to="/signin">
              <Button variant="hero" size="lg">
                <Play />
                Start Learning
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline" size="lg" className="button-outline-white">
                Browse Courses
              </Button>
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-icon-wrapper">
                <BookOpen className="hero-stat-icon" />
              </div>
              <div className="hero-stat-value">500+</div>
              <div className="hero-stat-label">Courses</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-icon-wrapper">
                <Users className="hero-stat-icon" />
              </div>
              <div className="hero-stat-value">50k+</div>
              <div className="hero-stat-label">Students</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-icon-wrapper">
                <Award className="hero-stat-icon" />
              </div>
              <div className="hero-stat-value">95%</div>
              <div className="hero-stat-label">Success Rate</div>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <img 
              src={heroImage} 
              alt="Students learning online" 
              className="hero-image"
            />
            <div className="hero-image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
