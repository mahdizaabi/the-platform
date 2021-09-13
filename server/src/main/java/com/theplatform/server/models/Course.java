package com.theplatform.server.models;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.github.slugify.Slugify;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import net.minidev.json.annotate.JsonIgnore;
import org.hibernate.annotations.Type;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;

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
    private String category;
    private Boolean paid;
    private String image_preview;
    @Column(name = "published", columnDefinition = "TINYINT")
    private Boolean published;
    private LocalDate timestamp;
    @ManyToOne
    @JoinColumn(name="user_id")
    @JsonBackReference
    private User user;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "course")
    private List<Lesson> lessonList;

}
