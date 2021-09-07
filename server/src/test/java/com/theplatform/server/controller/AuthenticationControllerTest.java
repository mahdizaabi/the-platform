package com.theplatform.server.controller;

import com.theplatform.server.dto.UserDto;
import com.theplatform.server.services.UserService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
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
        System.out.println(userService.checkIfUserAlreadyExists("d", "d"));

        mockMvc.perform(post("/api/v1/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{ \"username\": \"SAVINGS\", \"email\": 5000.0 }")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isConflict()).andReturn();

        Mockito.when(userService.checkIfUserAlreadyExists(any(String.class), any(String.class))).thenReturn(false);
        System.out.println(userService.checkIfUserAlreadyExists("d", "d"));

        mockMvc.perform(post("/api/v1/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{ \"username\": \"SAVINGS\", \"email\": 5000.0 }")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated()).andReturn();

    }
}