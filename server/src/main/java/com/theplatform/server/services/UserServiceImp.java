package com.theplatform.server.services;


import com.theplatform.server.models.User;
import com.theplatform.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class UserServiceImp implements UserService {

    private UserRepository userRepository;

    public UserServiceImp(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public User findUserByid(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public Boolean checkIfUserAlreadyExists(String username, String email) {
        User user = userRepository.findByUsername(username);
        User usex = userRepository.findByEmail(email);
        return user != null || usex != null;
    }

}
