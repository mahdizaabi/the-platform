package com.theplatform.server.services;

import com.theplatform.server.dto.CourseDto;
import com.theplatform.server.dto.CourseDtoRequest;
import com.theplatform.server.models.Course;
import com.theplatform.server.models.LessonDto;
import com.theplatform.server.models.User;

import java.security.Principal;
import java.util.List;

public interface CourseService {
    CourseDto createCourse(CourseDtoRequest courseDto, String username);
    List<CourseDto>  getInstructorCourses(String username);
    CourseDto getCourseFromSlug(String slug);
    CourseDto updateCourse(String slug,CourseDto courseDto);
    List<CourseDto> getAllCourses();
    List<CourseDto> getAllInstrctorCourses(User instructor);
    CourseDto addLessonToCourse(String slug, LessonDto lessonDto);
}
