import CourseCard from "./CourseCard";
import "./CourseGrid.css";

const hardcodedCourses = [
  {
    id: 1,
    title: "AI",
    level: "Intermediate",
    image: "/placeholder.svg",
    instructor: "Expert Instructor",
    duration: "8 weeks",
    students: 12500,
    rating: 4.8,
    price: "Premium",
    category: "Artificial Intelligence",
    link: "https://www.udemy.com/course/intro-to-ai-agents-and-agentic-ai/"
  },
  {
    id: 2,
    title: "ML",
    level: "Advanced",
    image: "/placeholder.svg",
    instructor: "Expert Instructor",
    duration: "10 weeks",
    students: 8900,
    rating: 4.9,
    price: "Premium",
    category: "Machine Learning",
    link: "https://www.udemy.com/course/machinelearning/?couponCode=PMNVD2025"
  },
  {
    id: 3,
    title: "HTML",
    level: "Beginner",
    image: "/placeholder.svg",
    instructor: "Expert Instructor",
    duration: "6 weeks",
    students: 21000,
    rating: 4.7,
    price: "Premium",
    category: "Web Development",
    link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=PMNVD2025"
  }
];

const CourseGrid = () => {
  const handleGoToCourse = (courseLink) => {
    window.open(courseLink, '_blank');
  };

  return (
    <section className="course-grid-section">
      <div className="container">
        <div className="course-grid-header">
          <h2 className="course-grid-title">Featured Courses</h2>
          <p className="course-grid-description">Our most popular learning paths</p>
        </div>

        <div className="course-grid">
          {hardcodedCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              level={course.level}
              image={course.image}
              instructor={course.instructor}
              duration={course.duration}
              students={course.students}
              rating={course.rating}
              price={course.price}
              category={course.category}
              onEnroll={() => handleGoToCourse(course.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
