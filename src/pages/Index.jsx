import Header from "@/components/Header.jsx";
import Hero from "@/components/Hero.jsx";
import CourseGrid from "@/components/CourseGrid.jsx";
import DashboardStats from "@/components/DashboardStats.jsx";
import QuizDemo from "@/components/QuizDemo.jsx";
import Footer from "@/components/Footer.jsx";
import "./Index.css";

const Index = () => {
  return (
    <div className="page-container">
      <Header />
      <main>
        <Hero />
        <CourseGrid />
        <DashboardStats />
        <QuizDemo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
