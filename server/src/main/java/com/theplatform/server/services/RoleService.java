package com.theplatform.server.services;

import com.theplatform.server.models.Role;
import com.theplatform.server.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    public void saveNewRole(Role role) {
        roleRepository.save(role);
    }

    public Role getRoleByName(String roleName) {
        return roleRepository.findByName(roleName);
    }
}
