package com.edupulse.api.controller;

import com.edupulse.api.model.Course;
import com.edupulse.api.repository.CourseRepository;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/courses")
public class CourseController {

    private final CourseRepository courseRepository;

    public CourseController(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public static class CreateCourseRequest {
        @NotBlank
        @Size(max = 255)
        public String title;

        @Size(max = 255)
        public String subtitle;

        public String description;

        @Size(max = 1024)
        public String thumbnailUrl;

        public Course.Level level = Course.Level.Beginner;
    }

    @GetMapping
    public List<Course> list() {
        return courseRepository.findAll();
    }

    @GetMapping("/{id}")
    public Course get(@PathVariable Long id) {
        return courseRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Course not found"));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Course create(@Valid @RequestBody CreateCourseRequest req) {
        Course course = new Course();
        course.setTitle(req.title);
        course.setSubtitle(req.subtitle);
        course.setDescription(req.description);
        course.setThumbnailUrl(req.thumbnailUrl);
        course.setLevel(req.level);
        return courseRepository.save(course);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        if (!courseRepository.existsById(id)) {
            throw new ResourceNotFoundException("Course not found");
        }
        courseRepository.deleteById(id);
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    private static class ResourceNotFoundException extends RuntimeException {
        public ResourceNotFoundException(String message) { super(message); }
    }
}



