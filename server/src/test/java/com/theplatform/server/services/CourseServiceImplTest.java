package com.theplatform.server.services;

import com.theplatform.server.dto.CourseDto;
import com.theplatform.server.dto.CourseDtoRequest;
import com.theplatform.server.dto.converters.CourseDtoConverter;
import com.theplatform.server.models.Course;
import com.theplatform.server.models.User;
import com.theplatform.server.repositories.CourseRepository;
import com.theplatform.server.repositories.UserRepository;
import io.jsonwebtoken.lang.Assert;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;

import java.util.ArrayList;

import static org.mockito.ArgumentMatchers.any;

class CourseServiceImplTest {
    @Mock
    private CourseRepository courseRepository;
    @Mock
    private UserRepository userRepository;
    @Mock
    private UserService userService;

    @Captor
    private ArgumentCaptor<Course> courseArgumentCaptor = ArgumentCaptor.forClass(Course.class);

    @InjectMocks
    private CourseService courseService = new CourseServiceImpl(
            courseRepository, userService, userRepository
    );
    @BeforeEach
    void setUp() throws Exception {
        MockitoAnnotations.openMocks(this);
    }
    @Test
    void createCourse() {
        User user_test = new User();
        user_test.setUsername("user_test");
        user_test.setId(14L);
        user_test.setCourseList(new ArrayList<Course>());
        /***************************/
        CourseDtoRequest courseDto = new CourseDtoRequest();
        Course course = new Course();
        /* just a fake course to avoid null pointer when converted from course to dto */
        Course courseFromPersist = new Course();
        courseFromPersist.setUser(user_test);
       /*
        try (MockedStatic<CourseDtoConverter> mb = Mockito.mockStatic(CourseDtoConverter.class)) {
            mb.when(() -> CourseDtoConverter.courseDtoToCourse(any(CourseDto.class))).thenReturn(courseFromDto);
        }
        try (MockedStatic<CourseDtoConverter> mb = Mockito.mockStatic(CourseDtoConverter.class)) {
            mb.when(() -> CourseDtoConverter.courseToDtoConverter(any(Course.class))).thenReturn(courseDto);
        }*/
        Mockito.when(userService.getUserByUsername(any(String.class))).thenReturn(user_test);
        Mockito.when(courseRepository.save(courseArgumentCaptor.capture())).thenReturn(courseFromPersist);
        CourseDto ppp = courseService.createCourse(courseDto, "kkk");
        Course capturedCourseBeforeSaving = courseArgumentCaptor.getValue();
        Assertions.assertEquals("user_test", capturedCourseBeforeSaving.getUser().getUsername());
    }

    @Test
    void getInstructorCourses() {
    }

    @Test
    void getCourseFromSlug() {
    }

    @Test
    void updateCourse() {
    }
}