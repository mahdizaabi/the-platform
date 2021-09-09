package com.theplatform.server.repositories;

import com.theplatform.server.models.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {

    Role findByName(String name);
}
