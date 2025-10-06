package com.edupulse.api.controller;

import com.edupulse.api.model.Course;
import com.edupulse.api.model.Progress;
import com.edupulse.api.model.User;
import com.edupulse.api.repository.CourseRepository;
import com.edupulse.api.repository.ProgressRepository;
import com.edupulse.api.repository.UserRepository;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/progress")
public class ProgressController {

    private final ProgressRepository progressRepository;
    private final UserRepository userRepository;
    private final CourseRepository courseRepository;

    public ProgressController(ProgressRepository progressRepository, UserRepository userRepository, CourseRepository courseRepository) {
        this.progressRepository = progressRepository;
        this.userRepository = userRepository;
        this.courseRepository = courseRepository;
    }

    public static class UpsertProgressRequest {
        @NotNull public Long userId;
        @NotNull public Long courseId;
        public Integer completedLessons = 0;
        public Integer score = 0;
    }

    @GetMapping
    public Progress get(@RequestParam Long userId, @RequestParam Long courseId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("User not found"));
        Course course = courseRepository.findById(courseId).orElseThrow(() -> new IllegalArgumentException("Course not found"));
        return progressRepository.findByUserAndCourse(user, course).orElseThrow(() -> new IllegalArgumentException("Progress not found"));
    }

    @PostMapping
    public Progress upsert(@Valid @RequestBody UpsertProgressRequest req) {
        User user = userRepository.findById(req.userId).orElseThrow(() -> new IllegalArgumentException("User not found"));
        Course course = courseRepository.findById(req.courseId).orElseThrow(() -> new IllegalArgumentException("Course not found"));
        Progress p = progressRepository.findByUserAndCourse(user, course).orElseGet(Progress::new);
        p.setUser(user);
        p.setCourse(course);
        if (req.completedLessons != null) p.setCompletedLessons(req.completedLessons);
        if (req.score != null) p.setScore(req.score);
        return progressRepository.save(p);
    }
}



