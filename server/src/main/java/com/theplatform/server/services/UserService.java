package com.theplatform.server.services;

import com.theplatform.server.models.ResetPasswordRequest;
import com.theplatform.server.models.User;

import java.util.HashMap;

public interface UserService {
    User findUserByid(Long id);

    Boolean checkIfUserAlreadyExists(String username, String Email);
    User saveNewUser(User user);
    User getUserByUsername(String usernamme);
    User getUserByEmail(String email);
    User resetPassword(ResetPasswordRequest resetPasswordRequest);
    User checkResetPasswordCode(String code);
    User setNewPassword(HashMap<String, String> map, User user);
}
