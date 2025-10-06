package com.edupulse.api.model;

import jakarta.persistence.*;

@Entity
@Table(name = "questions")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "quiz_id", nullable = false)
    private Quiz quiz;

    @Column(nullable = false, length = 1000)
    private String text;

    @Column(name = "option_a", nullable = false, length = 500)
    private String optionA;
    @Column(name = "option_b", nullable = false, length = 500)
    private String optionB;
    @Column(name = "option_c", nullable = false, length = 500)
    private String optionC;
    @Column(name = "option_d", nullable = false, length = 500)
    private String optionD;

    @Enumerated(EnumType.STRING)
    @Column(name = "correct_option", nullable = false, length = 1)
    private Option correctOption;

    public enum Option { A, B, C, D }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Quiz getQuiz() { return quiz; }
    public void setQuiz(Quiz quiz) { this.quiz = quiz; }
    public String getText() { return text; }
    public void setText(String text) { this.text = text; }
    public String getOptionA() { return optionA; }
    public void setOptionA(String optionA) { this.optionA = optionA; }
    public String getOptionB() { return optionB; }
    public void setOptionB(String optionB) { this.optionB = optionB; }
    public String getOptionC() { return optionC; }
    public void setOptionC(String optionC) { this.optionC = optionC; }
    public String getOptionD() { return optionD; }
    public void setOptionD(String optionD) { this.optionD = optionD; }
    public Option getCorrectOption() { return correctOption; }
    public void setCorrectOption(Option correctOption) { this.correctOption = correctOption; }
}


