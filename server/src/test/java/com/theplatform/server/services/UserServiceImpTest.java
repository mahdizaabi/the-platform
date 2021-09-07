package com.theplatform.server.services;

import com.theplatform.server.models.User;
import com.theplatform.server.repositories.UserRepository;
import io.jsonwebtoken.lang.Assert;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import static org.mockito.ArgumentMatchers.any;

import static org.junit.jupiter.api.Assertions.*;

class UserServiceImpTest {

    @Mock
    UserRepository userRepository;

    @InjectMocks
    UserService userService = new UserServiceImp(userRepository);

    @BeforeEach
    void setUp() throws Exception{
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void checkIfUserAlreadyExists() {
        Mockito.when(userRepository.findByUsername(any(String.class))).thenReturn(null);
        Assert.isTrue(!userService.checkIfUserAlreadyExists("mahdi", "lklk"));

        Mockito.when(userRepository.findByUsername(any(String.class))).thenReturn(new User());
        Mockito.when(userRepository.findByEmail(any(String.class))).thenReturn(new User());
        Assertions.assertTrue(userService.checkIfUserAlreadyExists("mahdi", "lklk"));
    }
}