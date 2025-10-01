import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Progress } from "@/components/ui/progress.jsx";
import { BookOpen, Clock, Award, TrendingUp } from "lucide-react";
import "./DashboardStats.css";

const DashboardStats = () => {
  const stats = [
    {
      title: "Courses Enrolled",
      value: "12",
      icon: BookOpen,
      color: "dashboard-stat-icon-primary"
    },
    {
      title: "Hours Learned",
      value: "148",
      icon: Clock,
      color: "dashboard-stat-icon-secondary"
    },
    {
      title: "Certificates Earned",
      value: "7",
      icon: Award,
      color: "dashboard-stat-icon-accent"
    },
    {
      title: "Skill Level",
      value: "Advanced",
      icon: TrendingUp,
      color: "dashboard-stat-icon-success"
    }
  ];

  const recentProgress = [
    { course: "React Development", progress: 85 },
    { course: "UI/UX Design", progress: 60 },
    { course: "Data Science", progress: 40 },
    { course: "Digital Marketing", progress: 90 }
  ];

  return (
    <section className="dashboard-stats-section">
      <div className="container">
        <div className="dashboard-stats-header">
          <h2 className="dashboard-stats-title">Your Learning Dashboard</h2>
          <p className="dashboard-stats-description">
            Track your progress and achievements across all your courses.
          </p>
        </div>

        <div className="dashboard-stats-grid">
          {stats.map((stat, index) => (
            <Card key={index} className="dashboard-stat-card">
              <CardHeader className="dashboard-stat-card-header">
                <CardTitle className="dashboard-stat-card-title">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`dashboard-stat-icon ${stat.color}`} />
              </CardHeader>
              <CardContent className="dashboard-stat-card-content">
                <div className="dashboard-stat-value">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="dashboard-progress-card">
          <CardHeader className="dashboard-progress-header">
            <CardTitle className="dashboard-progress-title">
              <TrendingUp className="dashboard-progress-icon" />
              Course Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="dashboard-progress-content">
            {recentProgress.map((item, index) => (
              <div key={index} className="progress-item">
                <div className="progress-item-header">
                  <span className="progress-item-name">{item.course}</span>
                  <span className="progress-item-value">{item.progress}%</span>
                </div>
                <Progress value={item.progress} className="progress-sm" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DashboardStats;
