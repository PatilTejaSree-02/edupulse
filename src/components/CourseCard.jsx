import { Button } from "@/components/ui/button.jsx";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Clock, Users, Star, BookOpen } from "lucide-react";
import "./CourseCard.css";

const CourseCard = ({ 
  id,
  title, 
  instructor, 
  duration, 
  students, 
  rating, 
  price, 
  image, 
  level, 
  category,
  onEnroll
}) => {
  return (
    <Card className="course-card">
      <CardHeader className="course-card-header">
        <div className="course-card-image-wrapper">
          <img 
            src={image} 
            alt={title}
            className="course-card-image"
          />
          <div className="course-card-badge-left">
            <Badge variant="secondary" className="badge-transparent">
              {category}
            </Badge>
          </div>
          <div className="course-card-badge-right">
            <Badge 
              variant={level === 'Beginner' ? 'default' : level === 'Intermediate' ? 'secondary' : 'destructive'}
              className="badge-transparent"
            >
              {level}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="course-card-content">
        <div>
          <h3 className="course-card-title">
            {title}
          </h3>
          <p className="course-card-instructor">by {instructor}</p>
        </div>
        
        <div className="course-card-meta">
          <div className="course-card-meta-item">
            <Clock className="course-card-meta-icon" />
            <span>{duration}</span>
          </div>
          <div className="course-card-meta-item">
            <Users className="course-card-meta-icon" />
            <span>{students.toLocaleString()}</span>
          </div>
          <div className="course-card-meta-item">
            <Star className="course-card-meta-icon course-card-meta-icon-fill" />
            <span>{rating}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="course-card-footer">
        <div className="course-card-price">{price}</div>
        <Button variant="default" onClick={onEnroll}>
          <BookOpen />
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
