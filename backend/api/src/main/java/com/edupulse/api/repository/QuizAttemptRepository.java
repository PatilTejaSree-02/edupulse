package com.edupulse.api.repository;

import com.edupulse.api.model.Quiz;
import com.edupulse.api.model.QuizAttempt;
import com.edupulse.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizAttemptRepository extends JpaRepository<QuizAttempt, Long> {
    List<QuizAttempt> findAllByUser(User user);
    List<QuizAttempt> findAllByQuiz(Quiz quiz);
}



