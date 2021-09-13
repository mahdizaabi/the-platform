package com.theplatform.server.services;

import com.theplatform.server.dto.CourseDto;
import com.theplatform.server.dto.CourseDtoRequest;
import com.theplatform.server.dto.converters.CourseDtoConverter;
import com.theplatform.server.models.Course;
import com.theplatform.server.models.User;
import com.theplatform.server.repositories.CourseRepository;
import com.theplatform.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseServiceImpl implements CourseService{
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;

    public CourseServiceImpl(CourseRepository courseRepository, UserService userService, UserRepository userRepository) {
    }

    @Override
    public CourseDto createCourse(CourseDtoRequest courseDto, String instructorName) {
        Course course = CourseDtoConverter.courseDtoToCoursex(courseDto);
        User user = userService.getUserByUsername(instructorName);
        user.getCourseList().add(course);
        course.setUser(user);
        System.out.println("3");
        Course savedcourse = courseRepository.save(course);
        System.out.println("==+>" + savedcourse);
        CourseDto SavedCourseDto = CourseDtoConverter.courseToDtoConverter(savedcourse);
        return SavedCourseDto;
    }
    @Override
    public List<CourseDto> getInstructorCourses(String username) {

        User user = userService.getUserByUsername(username);
        List<CourseDto> courseList= user.getCourseList().stream().map(CourseDtoConverter::courseToDtoConverter).collect(Collectors.toList());
        return courseList;
    }

    @Override
    public CourseDto getCourseFromSlug(String slug) {
        Course course = courseRepository.findBySlug(slug);
        if(course == null)
            return null;
        return CourseDtoConverter.courseToDtoConverter(course);
    }

    @Override
    public CourseDto updateCourse(String slug, CourseDto courseDto) {
        Course course = courseRepository.findBySlug(slug);
        if(course == null)
            return null;
        Course updatedCoursePrePrePersist = CourseDtoConverter.courseDtoToCourse(courseDto);
        updatedCoursePrePrePersist.setId(course.getId());

         Course updatedCoursePostPersist = courseRepository.save(updatedCoursePrePrePersist);
        //System.out.println(updatedCoursePostPersist);
         return CourseDtoConverter.courseToDtoConverter(updatedCoursePostPersist);
    }

    @Override
    public List<CourseDto> getAllCourses() {
        List<Course> allCourses = (List<Course>) courseRepository.findAll();
        List<CourseDto> allCoursesDto = allCourses.stream().map(CourseDtoConverter::courseToDtoConverter).collect(Collectors.toList());
        return allCoursesDto;

    }
}