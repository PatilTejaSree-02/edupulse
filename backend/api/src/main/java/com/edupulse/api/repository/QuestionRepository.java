package com.edupulse.api.repository;

import com.edupulse.api.model.Question;
import com.edupulse.api.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findAllByQuiz(Quiz quiz);
}



