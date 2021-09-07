package com.theplatform.server.controller;


import com.theplatform.server.dto.UserDto;
import com.theplatform.server.dto.converters.UserDtoConverter;
import com.theplatform.server.models.AuthenticationRequest;
import com.theplatform.server.models.AuthenticationResponse;
import com.theplatform.server.models.User;
import com.theplatform.server.security.utils.JwtUtil;
import com.theplatform.server.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.security.Principal;

@RestController

public class AuthenticationController {

    private AuthenticationManager authenticationManager;
    private UserDetailsService userDetailsService;
    private JwtUtil jwtUtil;
    private UserService userService;

    public AuthenticationController(AuthenticationManager authenticationManager, UserDetailsService userDetailsService, JwtUtil jwtUtil, UserService userService) {
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
        this.jwtUtil = jwtUtil;
        this.userService = userService;
    }

    @PostMapping("/auth")
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest authenticationRequest,
                                          HttpServletResponse httpServletResponse) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
                    authenticationRequest.getPassword()));
        } catch (BadCredentialsException exc) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).build();
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails);
        System.out.println("==>2" + jwt);
        return new ResponseEntity<>(new AuthenticationResponse(jwt, userDetails.getUsername()), HttpStatus.ACCEPTED);

    }

    @GetMapping(path = "/getuserinfo")
    public ResponseEntity<?> getUSerInfo(@RequestAttribute("id") String str, Principal principal) {
        return new ResponseEntity<>(principal, HttpStatus.OK);
    }

    @GetMapping(path = "/testguest")
    public String testguest() {
        return "heyyy authirozarion works fine!";
    }

    @GetMapping(path = "/hello")
    public String hello() {
        return "hello";
    }

    @PostMapping(path = "/api/v1/register")
    public ResponseEntity<?> RegisterUser(@RequestBody UserDto userDto) {
        User user = UserDtoConverter.DtoToUserConverter(userDto);
        if (userService.checkIfUserAlreadyExists(user.getUsername(), user.getEmail())) {
            return new ResponseEntity<String>("User Already Exist", HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(null, HttpStatus.CREATED);
    }
}
