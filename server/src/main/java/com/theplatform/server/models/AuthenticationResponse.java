package com.theplatform.server.models;

import lombok.Data;

import java.util.List;

@Data
public class AuthenticationResponse {
    private String jwt;
    private String username;
    private List<String> role;
    public AuthenticationResponse(String jwt, String username, List<String> role) {
        this.jwt = jwt;
        this.username = username;
        this.role = role;
    }
}
