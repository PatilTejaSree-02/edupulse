package com.edupulse.api.repository;

import com.edupulse.api.model.Course;
import com.edupulse.api.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
    Optional<Quiz> findByCourse(Course course);
}



