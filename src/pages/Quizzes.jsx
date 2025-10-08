import QuizDemo from "@/components/QuizDemo.jsx";
import "./Quizzes.css";

const Quizzes = () => {
  return (
    <>
      <section className="quizzes-hero">
        <div className="container">
          <div className="quizzes-hero-content">
            <h1 className="quizzes-hero-title">Interactive Quizzes</h1>
            <p className="quizzes-hero-description">
              Test your knowledge and track your progress with our comprehensive quiz collection. 
              From beginner to advanced levels, challenge yourself and learn at your own pace.
            </p>
          </div>
        </div>
      </section>
      
      <QuizDemo />
      
      <section className="quizzes-features">
        <div className="container">
          <h2 className="quizzes-features-title">Quiz Features</h2>
          <div className="quizzes-features-grid">
            <div className="quizzes-feature">
              <h3>Instant Feedback</h3>
              <p>Get immediate results and explanations for each question to enhance your learning.</p>
            </div>
            <div className="quizzes-feature">
              <h3>Progress Tracking</h3>
              <p>Monitor your improvement over time with detailed analytics and performance metrics.</p>
            </div>
            <div className="quizzes-feature">
              <h3>Multiple Categories</h3>
              <p>Explore quizzes across various subjects and difficulty levels to suit your needs.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quizzes;
