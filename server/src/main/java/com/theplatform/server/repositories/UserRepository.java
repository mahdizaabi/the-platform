package com.theplatform.server.repositories;

import com.theplatform.server.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    public User findByUsername(String username);
    public Boolean existsByUsername(String username);
    public Boolean existsByEmail(String email);
    public User findByEmail(String email);
};
