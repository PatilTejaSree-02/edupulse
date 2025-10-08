import "./About.css";

const About = () => {
  return (
    <section className="page">
      <h1 className="page-title">About Skillsync</h1>
      
      <div className="about-content">
        <div className="about-section">
          <h2 className="about-section-title">Our Mission</h2>
          <p className="about-text">
            Skillsync is a comprehensive online learning platform designed to help learners master new skills 
            through interactive courses, hands-on projects, and engaging quizzes. We believe in making quality 
            education accessible to everyone, anywhere, at any time.
          </p>
        </div>

        <div className="about-section">
          <h2 className="about-section-title">What We Offer</h2>
          <div className="about-features">
            <div className="about-feature">
              <h3>📚 Comprehensive Courses</h3>
              <p>Structured learning paths with expert instructors covering programming, design, data science, marketing, and more. Each course includes video lessons, practical exercises, and real-world projects.</p>
            </div>
            <div className="about-feature">
              <h3>🧠 Interactive Quizzes</h3>
              <p>Test your knowledge with our extensive quiz collection. Get instant feedback, track your progress, and identify areas for improvement across multiple difficulty levels.</p>
            </div>
            <div className="about-feature">
              <h3>📊 Progress Tracking</h3>
              <p>Monitor your learning journey with detailed analytics. Track course completion, quiz scores, time spent learning, and skill development over time.</p>
            </div>
            <div className="about-feature">
              <h3>🎯 Skill Building</h3>
              <p>Build practical skills through hands-on projects and assignments. Apply what you learn in real-world scenarios and build a portfolio of work.</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2 className="about-section-title">Why Choose Skillsync?</h2>
          <ul className="about-list">
            <li><strong>Expert Instructors:</strong> Learn from industry professionals with real-world experience</li>
            <li><strong>Flexible Learning:</strong> Study at your own pace, on any device, anywhere</li>
            <li><strong>Practical Focus:</strong> Emphasis on hands-on learning and real-world applications</li>
            <li><strong>Community Support:</strong> Connect with fellow learners and get help when you need it</li>
            <li><strong>Certificates:</strong> Earn certificates upon course completion to showcase your skills</li>
            <li><strong>Regular Updates:</strong> Content is regularly updated to reflect industry trends and best practices</li>
          </ul>
        </div>

        <div className="about-section">
          <h2 className="about-section-title">Our Learning Approach</h2>
          <p className="about-text">
            At Skillsync, we believe in learning by doing. Our platform combines theoretical knowledge with 
            practical application, ensuring that you not only understand concepts but can also implement them 
            effectively. Whether you're a beginner looking to start your journey or an experienced professional 
            seeking to upskill, Skillsync provides the tools and resources you need to succeed.
          </p>
        </div>

        <div className="about-section">
          <h2 className="about-section-title">Get Started Today</h2>
          <p className="about-text">
            Join thousands of learners who have already transformed their careers with Skillsync. 
            Start your learning journey today and unlock your potential with our comprehensive 
            courses and interactive quizzes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
