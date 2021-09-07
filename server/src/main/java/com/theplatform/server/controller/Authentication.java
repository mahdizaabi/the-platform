package com.theplatform.server.controller;


import com.theplatform.server.models.AuthenticationRequest;
import com.theplatform.server.models.AuthenticationResponse;
import com.theplatform.server.security.utils.JwtUtil;
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
public class Authentication {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private JwtUtil jwtUtil;
    @PostMapping("/auth")
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest authenticationRequest,
                                          HttpServletResponse httpServletResponse) throws Exception {
        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
                    authenticationRequest.getPassword()));
        }catch(BadCredentialsException exc){
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).build();
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails);
        System.out.println("==>2" + jwt);
        return new ResponseEntity<>(new AuthenticationResponse(jwt, userDetails.getUsername()), HttpStatus.ACCEPTED);

    }
    @GetMapping(path = "/getuserinfo")
    public ResponseEntity<?> getUSerInfo(@RequestAttribute("id") String str, Principal principal){
        return new ResponseEntity<>(principal, HttpStatus.OK);
    }
}
