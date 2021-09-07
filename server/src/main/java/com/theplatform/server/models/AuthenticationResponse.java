package com.theplatform.server.models;

import lombok.Data;

@Data
public class AuthenticationResponse {
    private String jwt;
    private String username;

    public AuthenticationResponse(String jwt, String username) {
        this.jwt = jwt;
        this.username = username;
    }
}
