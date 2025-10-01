import CourseCard from "./CourseCard.jsx";
import "./CourseGrid.css";

const CourseGrid = () => {
  const courses = [
    {
      title: "Complete React Development Bootcamp",
      instructor: "Sarah Johnson",
      duration: "12 weeks",
      students: 2450,
      rating: 4.8,
      price: "₹8999",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      level: "Beginner",
      category: "Programming"
    },
    {
      title: "UI/UX Design Masterclass",
      instructor: "Michael Chen",
      duration: "8 weeks",
      students: 1890,
      rating: 4.9,
      price: "₹7999",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      level: "Intermediate",
      category: "Design"
    },
    {
      title: "Data Science with Python",
      instructor: "Dr. Emily Rodriguez",
      duration: "16 weeks",
      students: 3200,
      rating: 4.7,
      price: "₹7999",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      level: "Advanced",
      category: "Data Science"
    },
    {
      title: "Digital Marketing Strategy",
      instructor: "David Kim",
      duration: "6 weeks",
      students: 1650,
      rating: 4.6,
      price: "₹5999",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      level: "Beginner",
      category: "Marketing"
    },
    {
      title: "Mobile App Development",
      instructor: "Alex Thompson",
      duration: "10 weeks",
      students: 2100,
      rating: 4.8,
      price: "₹9999",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      level: "Intermediate",
      category: "Programming"
    },
    {
      title: "Cloud Architecture Fundamentals",
      instructor: "Lisa Wang",
      duration: "14 weeks",
      students: 980,
      rating: 4.9,
      price: "₹7999",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      level: "Advanced",
      category: "Cloud Computing"
    }
  ];

  return (
    <section className="course-grid-section">
      <div className="container">
        <div className="course-grid-header">
          <h2 className="course-grid-title">Popular Courses</h2>
          <p className="course-grid-description">
            Discover our most loved courses taught by industry experts and trusted by thousands of students worldwide.
          </p>
        </div>
        
        <div className="course-grid">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
