package com.theplatform.server.controller;


import com.theplatform.server.dto.CourseDto;
import com.theplatform.server.models.AuthenticationResponse;
import com.theplatform.server.models.Role;
import com.theplatform.server.models.User;
import com.theplatform.server.services.CourseService;
import com.theplatform.server.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class InstructorController {

    UserService userService;
    CourseService courseService;

    public InstructorController(UserService userService,CourseService courseService) {
        this.userService = userService;
        this.courseService = courseService;
    }
    @GetMapping("/makeInstructor")
    public ResponseEntity<?> makeInstructor(Principal principal) {
        String username = principal.getName();
        try {
            User userInstructor = userService.makeInstructor(username);
            if(userInstructor == null) {
                return new ResponseEntity<String>("Already Instructor", HttpStatus.BAD_REQUEST);
            }
            List<String> roles = userInstructor.getRoles().stream().map(Role::getName).collect(Collectors.toList());
            return new ResponseEntity<>(new AuthenticationResponse("_",userInstructor.getUsername(), roles), HttpStatus.ACCEPTED);
        } catch (Exception exception) {
            return new ResponseEntity<>("could'nt make it instructor", HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/current-instructor")
    public ResponseEntity<?> currentInstructor(Principal principal) {
        User currentInstructor = userService.getUserByUsername(principal.getName());
        HashMap<String, Boolean> response = new HashMap<>();
        response.put("ok", true);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
