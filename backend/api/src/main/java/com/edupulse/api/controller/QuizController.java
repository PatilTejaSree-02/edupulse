package com.edupulse.api.controller;

import com.edupulse.api.model.*;
import com.edupulse.api.repository.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/quizzes")
public class QuizController {

    private final QuizRepository quizRepository;
    private final QuestionRepository questionRepository;
    private final CourseRepository courseRepository;
    private final QuizAttemptRepository quizAttemptRepository;
    private final UserRepository userRepository;

    public QuizController(QuizRepository quizRepository, QuestionRepository questionRepository, CourseRepository courseRepository, QuizAttemptRepository quizAttemptRepository, UserRepository userRepository) {
        this.quizRepository = quizRepository;
        this.questionRepository = questionRepository;
        this.courseRepository = courseRepository;
        this.quizAttemptRepository = quizAttemptRepository;
        this.userRepository = userRepository;
    }

    public static class QuizResponse {
        public Long id;
        public Long courseId;
        public String title;
        public List<Question> questions;
    }

    @GetMapping("/by-course/{courseId}")
    public QuizResponse getQuizByCourse(@PathVariable Long courseId) {
        Course course = courseRepository.findById(courseId).orElseThrow(() -> new IllegalArgumentException("Course not found"));
        Quiz quiz = quizRepository.findByCourse(course).orElseThrow(() -> new IllegalArgumentException("Quiz not found"));
        QuizResponse res = new QuizResponse();
        res.id = quiz.getId();
        res.courseId = course.getId();
        res.title = quiz.getTitle();
        res.questions = questionRepository.findAllByQuiz(quiz);
        return res;
    }

    public static class SubmitAttemptRequest {
        @NotNull public Long userId;
        @NotNull public Long quizId;
        @NotNull public Integer score;
    }

    public static class AttemptResponse {
        public Long id;
        public Long userId;
        public Long quizId;
        public Integer score;
        public String attemptedAt;
    }

    private AttemptResponse toAttemptResponse(QuizAttempt a) {
        AttemptResponse r = new AttemptResponse();
        r.id = a.getId();
        r.userId = a.getUser().getId();
        r.quizId = a.getQuiz().getId();
        r.score = a.getScore();
        r.attemptedAt = a.getAttemptedAt() != null ? a.getAttemptedAt().toString() : null;
        return r;
    }

    @PostMapping("/attempts")
    @ResponseStatus(HttpStatus.CREATED)
    public AttemptResponse submitAttempt(@Valid @RequestBody SubmitAttemptRequest req) {
        User user = userRepository.findById(req.userId).orElseThrow(() -> new IllegalArgumentException("User not found"));
        Quiz quiz = quizRepository.findById(req.quizId).orElseThrow(() -> new IllegalArgumentException("Quiz not found"));
        QuizAttempt attempt = new QuizAttempt();
        attempt.setUser(user);
        attempt.setQuiz(quiz);
        attempt.setScore(req.score);
        return toAttemptResponse(quizAttemptRepository.save(attempt));
    }

    @GetMapping("/attempts/by-user/{userId}")
    public List<AttemptResponse> attemptsByUser(@PathVariable Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("User not found"));
        return quizAttemptRepository.findAllByUser(user).stream().map(this::toAttemptResponse).toList();
    }
}


