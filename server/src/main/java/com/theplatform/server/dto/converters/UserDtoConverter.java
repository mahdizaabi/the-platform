package com.theplatform.server.dto.converters;

import com.theplatform.server.dto.UserDto;
import com.theplatform.server.models.User;

public class UserDtoConverter {

    static public User DtoToUserConverter(UserDto userDto) {
        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setPassword(userDto.getPassword());
        user.setEmail(userDto.getEmail());
        return user;
    }

    static public UserDto UserToDtoConverter(User user) {
        UserDto userDto = new UserDto();
        userDto.setUsername(user.getUsername());
        userDto.setPassword(user.getPassword());
        userDto.setEmail(userDto.getEmail());
        return userDto;
    }
}
