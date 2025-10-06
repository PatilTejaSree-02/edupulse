-- Seed a sample course if none exists
INSERT INTO courses (title, subtitle, description, thumbnail_url, level)
SELECT 'Java Basics', 'Intro', 'Start here', NULL, 'Beginner'
WHERE NOT EXISTS (SELECT 1 FROM courses WHERE title = 'Java Basics');

-- Get the course id
SET @course_id = (SELECT id FROM courses WHERE title = 'Java Basics' LIMIT 1);

-- Seed a quiz for that course if missing
INSERT INTO quizzes (course_id, title)
SELECT @course_id, 'Java Basics Quiz'
WHERE NOT EXISTS (SELECT 1 FROM quizzes WHERE course_id = @course_id);

-- Get quiz id
SET @quiz_id = (SELECT id FROM quizzes WHERE course_id = @course_id LIMIT 1);

-- Seed questions if none exist
INSERT INTO questions (quiz_id, text, option_a, option_b, option_c, option_d, correct_option)
SELECT @quiz_id, 'Java is:', 'A beverage', 'A programming language', 'An island', 'All of the above', 'B'
WHERE NOT EXISTS (SELECT 1 FROM questions WHERE quiz_id = @quiz_id);

INSERT INTO questions (quiz_id, text, option_a, option_b, option_c, option_d, correct_option)
SELECT @quiz_id, 'JVM stands for?', 'Java Virtual Machine', 'Java Vendor Module', 'Just Very Mad', 'None', 'A'
WHERE (SELECT COUNT(*) FROM questions WHERE quiz_id = @quiz_id) < 2;


