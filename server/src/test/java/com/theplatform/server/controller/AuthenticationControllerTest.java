package com.theplatform.server.controller;

import com.theplatform.server.dto.UserDto;
import com.theplatform.server.dto.converters.UserDtoConverter;
import com.theplatform.server.models.User;
import com.theplatform.server.security.utils.JwtUtil;
import com.theplatform.server.services.SendEmailServiceImpl;
import com.theplatform.server.services.UserService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.springframework.http.MediaType;
import org.springframework.util.Assert;


class AuthenticationControllerTest {

    @Mock
    UserService userService;

    @Mock
    UserDetailsService userDetailsService;
    @InjectMocks
    AuthenticationController authenticationController;

    //MockedStatic<UserDtoConverter> dummy = Mockito.mockStatic(UserDtoConverter.class) ;
    JwtUtil jwtUtil;
    SendEmailServiceImpl sendEmailService;
    MockMvc mockMvc;

    @BeforeEach
    void setUp() throws Exception{
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(authenticationController)
                .build();
    }

    @Test
    void authenticate() {
    }

    @Test
    void getUSerInfo() {
    }

    @Test
    void testguest() throws Exception {
        mockMvc.perform(get("/hello")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string("hello"));

    }

    @Test
    void registerUser() throws Exception {
        Mockito.when(userService.checkIfUserAlreadyExists(any(String.class), any(String.class))).thenReturn(true);
        mockMvc.perform(post("/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{ \"username\": \"SAVINGS\", \"email\": 5000.0 }")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isConflict()).andReturn();
    }

    @Test
    void registerUserWhenNotAlreadyExist() throws Exception {
        User userTest = new User();
        userTest.setUsername("test");
        userTest.setPassword("test");
        userTest.setEmail("test");
        UserDto userDtoTest = new UserDto();
        userDtoTest.setUsername("test");
        userDtoTest.setPassword("test");
        userDtoTest.setEmail("test");
        Mockito.when(userService.checkIfUserAlreadyExists(any(String.class), any(String.class))).thenReturn(false);
        //dummy.when(() -> UserDtoConverter.DtoToUserConverter(any(UserDto.class))).thenReturn(userTest);
        Mockito.when(userService.saveNewUser(any(User.class))).thenReturn(userTest);
        mockMvc.perform(post("/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{ \"username\": \"test\", \"password\": \"SAVINGS\",\"email\": \"SAVINGS\" }")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated()).andReturn();
    }
}