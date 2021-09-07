package com.theplatform.server.services;

import com.theplatform.server.models.User;

public interface UserService {
    public User findUserByid(Long id);
    public Boolean checkIfUserAlreadyExists(String username, String Email);
}
