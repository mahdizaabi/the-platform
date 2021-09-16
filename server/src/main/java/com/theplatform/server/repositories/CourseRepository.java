package com.theplatform.server.repositories;

import com.theplatform.server.models.Course;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CourseRepository extends CrudRepository<Course, Long> {
    Course findBySlug(String slug);

}