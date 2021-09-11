package com.theplatform.server.controller;


import com.theplatform.server.models.User;
import com.theplatform.server.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class InstructorController {

    UserService userService;

    public InstructorController(UserService userService) {
        this.userService = userService;
    }
    @GetMapping("/makeInstructor")
    public ResponseEntity<?> makeInstructor(Principal principal) {
        String username = principal.getName();
        try {

            User userInstructor = userService.makeInstructor(username);
            if(userInstructor == null) {
                return new ResponseEntity<String>("Already Instructor", HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<User>(userInstructor, HttpStatus.ACCEPTED);
        } catch (Exception exception) {
            return new ResponseEntity<>("could'nt make it instructor", HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/current-instructor")
    public ResponseEntity<?> currentInstructor(Principal principal) {
        System.out.println(principal.getName());
        User currentInstructor = userService.getUserByUsername(principal.getName());
        return new ResponseEntity<>("no", HttpStatus.OK);
    }
}
