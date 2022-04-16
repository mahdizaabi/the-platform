package com.theplatform.server.controller;

import com.theplatform.server.dto.CourseDto;
import com.theplatform.server.dto.CourseDtoRequest;
import com.theplatform.server.models.LessonDto;
import com.theplatform.server.services.CourseService;
import com.theplatform.server.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api")
public class CourseController {
    @Autowired
    UserService userService;
    @Autowired
    CourseService courseService;

    @PostMapping("/course")
    public ResponseEntity<?> createCourse(@RequestBody CourseDtoRequest courseDto, Principal principal) {
        System.out.println("===>Course DTOOOOOOOOOREQUEST" + courseDto);
        try {
            //String instructorName = principal.getName();
            CourseDto course = courseService.createCourse(courseDto, principal.getName());
            return new ResponseEntity<>(course, HttpStatus.OK);
        } catch (Exception exc) {
            exc.printStackTrace();
            return new ResponseEntity<>("failed to save course", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/course/index/getallcourses")
    public ResponseEntity<?> getAllCourses(){
        return new ResponseEntity<>(courseService.getAllCourses(), HttpStatus.OK);
    }

    @GetMapping("/instructor/courses")
    public ResponseEntity<?> getAllInctructorCourses(Principal principal) {
        try {
            List<CourseDto> coursesList = courseService.getInstructorCourses(principal.getName());
            return new ResponseEntity<>(LessonDto, HttpStatus.OK);
        } catch (Exception exception) {
            exception.printStackTrace();
            return new ResponseEntity<>(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/course/{slug}")
    public ResponseEntity<?> getCourseFromSlug(@PathVariable String slug) {
        if(slug.equals("undefined"))
            return ResponseEntity.ok().build();
        try {
            CourseDto course = courseService.getCourseFromSlug(slug);
            if (course == null) {
                return new ResponseEntity<>("course not found", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(course, HttpStatus.OK);
        } catch (Exception exception) {
            exception.printStackTrace();
            return new ResponseEntity<>(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/course/edit/{slug}")
    public ResponseEntity<?> updateExistingCourse(@PathVariable String slug, @RequestBody CourseDto courseDto) {
        try {
            CourseDto course = courseService.updateCourse(slug, courseDto);
            if (course == null) {
                return new ResponseEntity<>("course not found", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(course, HttpStatus.OK);
        } catch (Exception exception) {
            exception.printStackTrace();
            return new ResponseEntity<>(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/course/lesson/addlesson/{slug}")
    public ResponseEntity<?> addLessonToCourse(@PathVariable String slug, @RequestBody LessonDto lessonDto) {
        try {
            CourseDto courseDto = courseService.addLessonToCourse(slug, lessonDto);
            return ResponseEntity.status(201).body(courseDto);
        } catch(Exception exception){
            exception.printStackTrace();
            return  new ResponseEntity<>("Lessont can't be added try later...",HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
    @GetMapping("/course/enroll-freecourse/{courseId}")
    public ResponseEntity<?> enrollFreeCourse(@PathVariable Long courseId, Principal principal) {
        try {
           courseService.enrollCourse(courseId, principal.getName());

           return new ResponseEntity<>("ok", HttpStatus.OK);
        } catch(Exception exception){
            exception.printStackTrace();
            return  new ResponseEntity<>("Lessont can't be added try later...",HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
    @GetMapping("/course/check-enrollement/{courseId}")
    public ResponseEntity<?>CheckEnrollemnt(@PathVariable Long courseId, Principal principal) {
        HashMap<String, Boolean> map = new HashMap<>();
        if(courseService.checkEnrollement(courseId, principal.getName())) {
            map.put("ok", true);
        } else {
            map.put("ok", false);
        }
        return ResponseEntity.status(200).body(map);
    }


    }
