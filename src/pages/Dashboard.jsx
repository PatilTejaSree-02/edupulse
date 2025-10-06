import "./Dashboard.css";
import DashboardStats from "@/components/DashboardStats.jsx";
import { useEffect, useState } from "react";
import { CoursesAPI, EnrollmentAPI, ProgressAPI, QuizAPI } from "../lib/api";

const Dashboard = ({ userId = 1 }) => {
  const [enrollments, setEnrollments] = useState([]);
  const [courses, setCourses] = useState([]);
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    (async () => {
      const [cs, es, ats] = await Promise.all([
        CoursesAPI.list(),
        EnrollmentAPI.byUser(userId),
        QuizAPI.submitAttempt ? Promise.resolve([]) : Promise.resolve([]),
      ]);
      setCourses(cs);
      setEnrollments(es);
      // For attempts, call API endpoint if needed later
    })();
  }, [userId]);

  const progressFor = async (courseId) => {
    try { return await ProgressAPI.get(userId, courseId); } catch { return null; }
  };

  return (
    <main className="page">
      <h1 className="page-title">Dashboard</h1>
      <p className="page-text">Welcome back! Your enrolled courses and recent progress will appear here.</p>

      <div className="dashboard-grid">
        <div className="dashboard-card">Courses Enrolled: {enrollments.length}</div>
        <div className="dashboard-card">Quizzes Attempted: {attempts.length}</div>
        <div className="dashboard-card">Welcome!</div>
      </div>

      <section style={{ marginTop: '1.25rem' }}>
        <DashboardStats />
      </section>

      <section style={{ marginTop: '1.25rem' }}>
        <h2 className="page-subtitle">My Courses</h2>
        <ul>
          {enrollments.map((e) => {
            const course = courses.find(c => c.id === e.courseId) || { title: `Course #${e.courseId}` };
            return (
              <li key={e.id}>
                {course.title}
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default Dashboard;
