package com.theplatform.server.services;

import com.theplatform.server.models.Role;
import com.theplatform.server.repositories.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.User;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
       com.theplatform.server.models.User user = userRepository.findByUsername(s);
        log.info("loadUserByUsername:");
        //log.info("user: " + user);
        /*if(user != null){
            log.info("extracted username: " + user.getUsername());
            log.info("extracted password: " + user.getPassword());
        }*/
        List<SimpleGrantedAuthority> auth = new ArrayList<>();
        List<Role> rolex =  user.getRoles();
        rolex.forEach(role->auth.add(new SimpleGrantedAuthority(role.getName())));
        return new User(user.getUsername(), user.getPassword(), auth);
    }
}
