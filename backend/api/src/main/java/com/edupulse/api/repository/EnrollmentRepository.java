package com.edupulse.api.repository;

import com.edupulse.api.model.Enrollment;
import com.edupulse.api.model.User;
import com.edupulse.api.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.List;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {
    Optional<Enrollment> findByUserAndCourse(User user, Course course);
    List<Enrollment> findAllByUser(User user);
}


