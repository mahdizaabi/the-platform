package com.theplatform.server.services;


import com.theplatform.server.models.ResetPasswordRequest;
import com.theplatform.server.models.Role;
import com.theplatform.server.models.User;
import com.theplatform.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.UUID;

@Service

public class UserServiceImp implements UserService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    private RoleService roleService;

    public UserServiceImp(UserRepository userRepository, PasswordEncoder passwordEncoder, RoleService roleService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.roleService = roleService;
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

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User getUserByUsername(String usernamme) {
        User usee = userRepository.findByUsername(usernamme);
        return usee;
    }

    @Override
    public User resetPassword(ResetPasswordRequest resetPasswordRequest) {
        User user;
        if (resetPasswordRequest.getEmail() == null) {
            user = userRepository.findByUsername(resetPasswordRequest.getUsername());
        } else {
            user = userRepository.findByEmail(resetPasswordRequest.getEmail());
        }
        if (user == null) {
            return null;
        }
        UUID uuid = UUID.randomUUID();
        String resetCode = uuid.toString().substring(0, 7);
        user.setPasswordResetCode(resetCode);
        return userRepository.save(user);
    }

    @Override
    public User saveNewUser(User user) {
        Role default_role = roleService.getRoleByName("ROLE_STUDENT");
        user.getRoles().add(default_role);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public User checkResetPasswordCode(String code) {
        //Potential caching implementation
        return userRepository.findByPasswordResetCode(code);
    }

    @Override
    public User setNewPassword(HashMap<String, String> map, User user) {
        user.setPasswordResetCode("");
        user.setPassword(passwordEncoder.encode(map.get("hashedPassword")));
        userRepository.save(user);
        return user;
    }

    @Override
    public User makeInstructor(String username) {
        User user = userRepository.findByUsername(username);
        Role instr = roleService.getRoleByName("ROLE_INSTRUCTOR");
        if (!user.getRoles().contains(instr)) {
            Role InstructorRole = roleService.getRoleByName("ROLE_INSTRUCTOR");
            System.out.println(InstructorRole.getName());
            user.getRoles().add(InstructorRole);
            return userRepository.save(user);
        } else return null;
    }
    @Override
    public User saveUpdatedUser(User user) {
       return userRepository.save(user);
    }
}
