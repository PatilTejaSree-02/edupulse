import { useEffect, useState } from "react";
import { QuizAPI } from "../lib/api";

const Quiz = ({ courseId = 1, userId = 1 }) => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(null);

  useEffect(() => {
    QuizAPI.byCourse(courseId).then(setQuiz).catch(() => setQuiz(null));
  }, [courseId]);

  const submit = async () => {
    if (!quiz) return;
    let score = 0;
    for (const q of quiz.questions || []) {
      if (answers[q.id] && answers[q.id] === q.correctOption) score += 1;
    }
    const pct = Math.round((score / (quiz.questions?.length || 1)) * 100);
    const res = await QuizAPI.submitAttempt(userId, quiz.id, pct);
    setSubmitted(res);
    alert(`Submitted. Score: ${pct}`);
  };

  if (!quiz) return <section className="page"><h1 className="page-title">Quiz</h1><p>No quiz available.</p></section>;

  return (
    <section className="page">
      <h1 className="page-title">{quiz.title}</h1>
      {(quiz.questions || []).map((q, idx) => (
        <div key={q.id} style={{ marginBottom: 16 }}>
          <div><strong>Q{idx + 1}.</strong> {q.text}</div>
          {['A','B','C','D'].map((opt) => (
            <label key={opt} style={{ display: 'block' }}>
              <input
                type="radio"
                name={`q-${q.id}`}
                value={opt}
                checked={answers[q.id] === opt}
                onChange={() => setAnswers({ ...answers, [q.id]: opt })}
              /> {q[`option${opt}`]}
            </label>
          ))}
        </div>
      ))}
      <button className="button primary" onClick={submit}>Submit Attempt</button>
      {submitted && (
        <div style={{ marginTop: 12 }}>Attempt saved with score {submitted.score}</div>
      )}
    </section>
  );
};

export default Quiz;



