package com.theplatform.server.repositories;

import com.theplatform.server.models.Role;
import com.theplatform.server.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);
    User findByEmail(String email);
    User findByPasswordResetCode(String code);
};
