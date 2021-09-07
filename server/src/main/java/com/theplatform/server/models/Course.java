package com.theplatform.server.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@Table(name = "course")
public class Course {
    public Course() {
        this.timestamp = LocalDate.now();
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long  id;
    private String course_name;
    private String slug;
    private String description;
    private Float price;
    private String image_preview;
    @Column(name = "published", columnDefinition = "TINYINT")
    private Boolean published;
    private LocalDate timestamp;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="user_id")
    private User user;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "course")
    private List<Lesson> lessonList;



}
