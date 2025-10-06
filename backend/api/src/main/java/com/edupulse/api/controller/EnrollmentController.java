package com.edupulse.api.controller;

import com.edupulse.api.model.Course;
import com.edupulse.api.model.Enrollment;
import com.edupulse.api.model.User;
import com.edupulse.api.repository.CourseRepository;
import com.edupulse.api.repository.EnrollmentRepository;
import com.edupulse.api.repository.UserRepository;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/enrollments")
public class EnrollmentController {

    private final EnrollmentRepository enrollmentRepository;
    private final UserRepository userRepository;
    private final CourseRepository courseRepository;

    public EnrollmentController(EnrollmentRepository enrollmentRepository, UserRepository userRepository, CourseRepository courseRepository) {
        this.enrollmentRepository = enrollmentRepository;
        this.userRepository = userRepository;
        this.courseRepository = courseRepository;
    }

    public static class EnrollRequest {
        @NotNull public Long userId;
        @NotNull public Long courseId;
    }

    public static class EnrollmentResponse {
        public Long id;
        public Long userId;
        public Long courseId;
        public String enrolledAt;
    }

    private EnrollmentResponse toResponse(Enrollment e) {
        EnrollmentResponse r = new EnrollmentResponse();
        r.id = e.getId();
        r.userId = e.getUser().getId();
        r.courseId = e.getCourse().getId();
        r.enrolledAt = e.getEnrolledAt() != null ? e.getEnrolledAt().toString() : null;
        return r;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public EnrollmentResponse enroll(@Valid @RequestBody EnrollRequest req) {
        User user = userRepository.findById(req.userId).orElseThrow(() -> new IllegalArgumentException("User not found"));
        Course course = courseRepository.findById(req.courseId).orElseThrow(() -> new IllegalArgumentException("Course not found"));
        enrollmentRepository.findByUserAndCourse(user, course).ifPresent(e -> { throw new IllegalArgumentException("Already enrolled"); });
        Enrollment enrollment = new Enrollment();
        enrollment.setUser(user);
        enrollment.setCourse(course);
        return toResponse(enrollmentRepository.save(enrollment));
    }

    @DeleteMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void unenroll(@Valid @RequestBody EnrollRequest req) {
        User user = userRepository.findById(req.userId).orElseThrow(() -> new IllegalArgumentException("User not found"));
        Course course = courseRepository.findById(req.courseId).orElseThrow(() -> new IllegalArgumentException("Course not found"));
        Enrollment e = enrollmentRepository.findByUserAndCourse(user, course).orElseThrow(() -> new IllegalArgumentException("Enrollment not found"));
        enrollmentRepository.delete(e);
    }

    @GetMapping("/by-user/{userId}")
    public List<EnrollmentResponse> listByUser(@PathVariable Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("User not found"));
        return enrollmentRepository.findAllByUser(user).stream().map(this::toResponse).collect(Collectors.toList());
    }
}


