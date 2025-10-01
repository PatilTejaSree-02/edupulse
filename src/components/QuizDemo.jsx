import { useState } from "react";
import { Button } from "@/components/ui/button.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Progress } from "@/components/ui/progress.jsx";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";
import "./QuizDemo.css";

const QuizDemo = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([null, null, null]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What is React primarily used for?",
      options: [
        "Server-side rendering",
        "Building user interfaces", 
        "Database management",
        "API development"
      ],
      correct: 1
    },
    {
      question: "Which hook is used for state management in React?",
      options: [
        "useEffect",
        "useState",
        "useContext", 
        "useReducer"
      ],
      correct: 1
    },
    {
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "Java Syntax Extension",
        "JavaScript Extension",
        "JSON XML"
      ],
      correct: 0
    }
  ];

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([null, null, null]);
    setShowResults(false);
  };

  const score = answers.reduce((acc, answer, index) => {
    return acc + (answer === questions[index].correct ? 1 : 0);
  }, 0);

  const progress = ((currentQuestion + (showResults ? 1 : 0)) / questions.length) * 100;

  if (showResults) {
    return (
      <section className="quiz-section">
        <div className="container">
          <div className="quiz-results-container">
            <Card className="quiz-results-card">
              <CardHeader className="quiz-results-header">
                <CardTitle className="quiz-results-title">Quiz Complete!</CardTitle>
                <div className="quiz-results-emoji">
                  {score === questions.length ? "🎉" : score >= questions.length / 2 ? "👏" : "📚"}
                </div>
              </CardHeader>
              <CardContent className="quiz-results-content">
                <div>
                  <div className="quiz-score">
                    {score}/{questions.length}
                  </div>
                  <p className="quiz-score-message">
                    {score === questions.length 
                      ? "Perfect! You're ready for the next level!" 
                      : score >= questions.length / 2 
                      ? "Great job! Keep learning to improve!"
                      : "Don't worry, practice makes perfect!"}
                  </p>
                </div>
                
                <div className="quiz-results-list">
                  {questions.map((q, index) => (
                    <div key={index} className="quiz-result-item">
                      <span className="quiz-result-item-text">Question {index + 1}</span>
                      {answers[index] === q.correct ? (
                        <CheckCircle className="quiz-result-icon quiz-result-icon-success" />
                      ) : (
                        <XCircle className="quiz-result-icon quiz-result-icon-error" />
                      )}
                    </div>
                  ))}
                </div>

                <Button onClick={resetQuiz} variant="default" className="button-lg">
                  <RotateCcw />
                  Try Again
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="quiz-section">
      <div className="container">
        <div className="quiz-header">
          <h2 className="quiz-title">Interactive Learning</h2>
          <p className="quiz-description">
            Test your knowledge with our interactive quizzes and get instant feedback.
          </p>
        </div>

        <div className="quiz-container">
          <Card>
            <CardHeader className="quiz-question-header">
              <div className="quiz-question-info">
                <CardTitle className="quiz-question-title">React Quiz</CardTitle>
                <span className="quiz-question-count">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
              </div>
              <Progress value={progress} className="progress-sm" />
            </CardHeader>
            
            <CardContent className="quiz-question-content">
              <div>
                <h3 className="quiz-question-text">
                  {questions[currentQuestion].question}
                </h3>
                
                <div className="quiz-options">
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant={answers[currentQuestion] === index ? "default" : "outline"}
                      className="button-default-size"
                      onClick={() => handleAnswer(index)}
                      style={{ 
                        width: '100%', 
                        justifyContent: 'flex-start', 
                        textAlign: 'left',
                        height: 'auto',
                        padding: '0.75rem 1rem'
                      }}
                    >
                      <span style={{ marginRight: '0.75rem', fontWeight: 600 }}>
                        {String.fromCharCode(65 + index)}.
                      </span>
                      {option}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="quiz-actions">
                <Button 
                  onClick={nextQuestion}
                  disabled={answers[currentQuestion] === null}
                  variant="default"
                >
                  {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuizDemo;
