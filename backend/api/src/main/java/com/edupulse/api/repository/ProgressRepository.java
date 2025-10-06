package com.edupulse.api.repository;

import com.edupulse.api.model.Course;
import com.edupulse.api.model.Progress;
import com.edupulse.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProgressRepository extends JpaRepository<Progress, Long> {
    Optional<Progress> findByUserAndCourse(User user, Course course);
}



