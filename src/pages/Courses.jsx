import CourseGrid from "@/components/CourseGrid.jsx";
import "./Courses.css";

const Courses = () => {
  return (
    <main className="page">
      <section>
        <h1 className="page-title">Courses</h1>
        <p className="page-text">Browse our popular courses across different categories.</p>
        <div className="page-block">
          <CourseGrid />
        </div>
      </section>
    </main>
  );
};

export default Courses;
