import { useEffect, useState } from "react";
import { CoursesAPI, EnrollmentAPI } from "../lib/api";
import "./CourseGrid.css";

const CourseGrid = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CoursesAPI.list()
      .then(setCourses)
      .finally(() => setLoading(false));
  }, []);

  const enroll = async (courseId) => {
    // Demo: use userId 1
    await EnrollmentAPI.enroll(1, courseId);
    alert("Enrolled!");
  };

  return (
    <section className="course-grid-section">
      <div className="container">
        <div className="course-grid-header">
          <h2 className="course-grid-title">Courses</h2>
          <p className="course-grid-description">Loaded from backend</p>
        </div>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="course-grid">
            {courses.map((c) => (
              <CourseCard
                key={c.id}
                id={c.id}
                title={c.title}
                level={c.level || 'Beginner'}
                image={c.thumbnailUrl || '/placeholder.svg'}
                instructor={"Instructor"}
                duration={"-"}
                students={0}
                rating={5}
                price={"Free"}
                category={"General"}
                onEnroll={() => enroll(c.id)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseGrid;
