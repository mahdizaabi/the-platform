package com.theplatform.server.dto.converters;

import com.github.slugify.Slugify;
import com.theplatform.server.dto.CourseDto;
import com.theplatform.server.dto.CourseDtoRequest;
import com.theplatform.server.models.Course;
import com.theplatform.server.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

public class CourseDtoConverter {



     static public CourseDto courseToDtoConverter(Course course) {
         System.out.println("course -> course dto ");
         CourseDto courseDto = new CourseDto();
        courseDto.setName(course.getCourse_name());
        courseDto.setDescription(course.getDescription());
        courseDto.setImage_preview(course.getImage_preview());
        courseDto.setPrice(course.getPrice());
        courseDto.setPaid(course.getPaid());
        courseDto.setCategory(course.getCategory());
        //courseDto.setUsername(course.getUser().getUsername());
        //courseDto.setUser_id(course.getUser().getId());
        //courseDto.setSlug(course.getSlug());
        return courseDto;
    }


    static public Course courseDtoToCoursex(CourseDtoRequest courseDtoRequest) {
        System.out.println("course dto  -> course");

        Slugify slg = new Slugify();
        Course course= new Course();
        course.setCourse_name(courseDtoRequest.getName());
        course.setDescription(courseDtoRequest.getDescription());
        course.setImage_preview(courseDtoRequest.getImage_preview());
        course.setPrice(courseDtoRequest.getPrice());
        course.setPaid(courseDtoRequest.getPaid());
        course.setCategory(courseDtoRequest.getCategory());
        course.setPublished(courseDtoRequest.getPublished());

        //course.setUser(courseDto.getUser());
        return course;
    }

    static public Course courseDtoToCourse(CourseDto courseDtoRequest) {
        System.out.println("course dto  -> course");

        Slugify slg = new Slugify();
        Course course= new Course();
        course.setCourse_name(courseDtoRequest.getName());
        course.setDescription(courseDtoRequest.getDescription());
        course.setImage_preview(courseDtoRequest.getImage_preview());
        course.setPrice(courseDtoRequest.getPrice());
        course.setPaid(courseDtoRequest.getPaid());
        course.setCategory(courseDtoRequest.getCategory());
        course.setPublished(courseDtoRequest.getPublished());

        //course.setUser(courseDto.getUser());
        return course;
    }
}
