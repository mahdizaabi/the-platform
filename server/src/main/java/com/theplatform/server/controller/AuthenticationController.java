package com.theplatform.server.controller;


import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.theplatform.server.dto.UserDto;
import com.theplatform.server.dto.converters.UserDtoConverter;
import com.theplatform.server.models.*;
import com.theplatform.server.security.utils.JwtUtil;
import com.theplatform.server.services.SendEmailServiceImpl;
import com.theplatform.server.services.UserService;
import net.bytebuddy.build.Plugin;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "https://the-platform-636e3v6ct-mahdizaabi.vercel.app")
public class AuthenticationController {

    private final AuthenticationManager authenticationManager;
    private final UserDetailsService userDetailsService;
    private final JwtUtil jwtUtil;
    private final UserService userService;
    private final SendEmailServiceImpl sendEmailService;
    /* latest password for Laura : $2a$10$q./BPNS/AUMtoYDn.0.i9u4NA4TI0KYDyjtb1qGwIa/mVruN0sKwG */

    public AuthenticationController(AuthenticationManager authenticationManager, UserDetailsService userDetailsService,
                                    JwtUtil jwtUtil, UserService userService, PasswordEncoder passwordEncoder,
                                    SendEmailServiceImpl sendEmailService
    ) {
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
        this.jwtUtil = jwtUtil;
        this.userService = userService;
        this.sendEmailService = sendEmailService;
    }

    @PostMapping(path = "/register")
    public ResponseEntity<?> RegisterUser(@RequestBody UserDto userDto) {

        User user = UserDtoConverter.DtoToUserConverter(userDto);
        System.out.println("xxxxxxxxxxx");
        if (userService.checkIfUserAlreadyExists(user.getUsername(), user.getEmail())) {
            return new ResponseEntity<String>("User Already Exist", HttpStatus.CONFLICT);
        }

        User saveduser = userService.saveNewUser(user);
        UserDto savedUserDto = UserDtoConverter.UserToDtoConverter(saveduser);
        return new ResponseEntity<>(savedUserDto, null, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest authenticationRequest,
                                          HttpServletResponse httpServletResponse) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
                    authenticationRequest.getPassword()));
        } catch (BadCredentialsException exc) {
            exc.printStackTrace();
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).build();
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        User user = userService.getUserByUsername(authenticationRequest.getUsername());
        List<String> roles = user.getRoles().stream().map(Role::getName).collect(Collectors.toList());
        final String jwt = jwtUtil.generateToken(userDetails);
        httpServletResponse.setHeader("Authorization", jwt);
        Cookie cookie = new Cookie("_jwt", jwt);
        cookie.setPath("/");
        cookie.setSecure(false);
        cookie.setDomain("localhost");
        cookie.setHttpOnly(false);
        httpServletResponse.addCookie(cookie);
        httpServletResponse.addHeader("Access-Control-Allow-Credentials", "true");
        return new ResponseEntity<>(new AuthenticationResponse(jwt, userDetails.getUsername(), roles), HttpStatus.ACCEPTED);

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


    @GetMapping("/loogout")
    public void logout(HttpServletResponse httpServletResponse) {
        httpServletResponse.setHeader("Authorization", "");
        Cookie cookie = new Cookie("_jwt", null);
        cookie.setPath("/");
        cookie.setHttpOnly(true);
        cookie.setMaxAge(0);
        httpServletResponse.addCookie(cookie);
    }

    @GetMapping("/checkuser")
    public ResponseEntity<?> checkCurrentUser(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {
        return new ResponseEntity<String>("user active", null, HttpStatus.OK);
    }

    @PostMapping("/forgot-password")
    private ResponseEntity<?> testEmail(@RequestBody ResetPasswordRequest resetPasswordRequest) throws UnirestException {
        User user = userService.resetPassword(resetPasswordRequest);
        if (user == null) {
            HashMap<String, String> map = new HashMap<>();
            map.put("Error", "User Not found");
            return new ResponseEntity<HashMap<String, String>>(map, HttpStatus.NOT_FOUND);
        }
        try {
            ResponseEntity<?> response = SendEmailServiceImpl.sendSimpleMessage(user);
            return ResponseEntity.ok().build();
        } catch (Exception exception) {
            exception.printStackTrace();
            return new ResponseEntity<>("try later...", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/check-code")
    public ResponseEntity<?> checkCode(@RequestBody HashMap<String, String> code, Principal principal, HttpServletRequest httpServletRequest) {
        User user;
        try {
            user = userService.checkResetPasswordCode(code.get("code"));
            if (user == null) {
                throw new RuntimeException();
            }
            HashMap<String, String> map = new HashMap<>();
            map.put("email", user.getEmail());
            return new ResponseEntity<HashMap<String, String>>(map, HttpStatus.ACCEPTED);

        } catch (Exception exception) {
            exception.printStackTrace();
            return new ResponseEntity<>("code dosen't match", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody HashMap<String, String> map) {
        User user;
        System.out.println(map);
        try {
            user = userService.checkResetPasswordCode(map.get("code"));
            if (user == null) {
                throw new RuntimeException();
            }
            User updatedUser = userService.setNewPassword(map, user);
            HashMap<String, String> mapResponse = new HashMap<>();
            UserDto updatedUserDto = UserDtoConverter.UserToDtoConverter(updatedUser);
            map.put("updatedUserPassword ", user.getPassword());
            return new ResponseEntity<UserDto>(updatedUserDto, HttpStatus.ACCEPTED);
        } catch (RuntimeException runtimeException) {
            runtimeException.printStackTrace();
            return new ResponseEntity<String>("retry", HttpStatus.FORBIDDEN);
        }
    }

}
