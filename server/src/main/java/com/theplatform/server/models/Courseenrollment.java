package com.theplatform.server.models;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Courseenrollment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long  id;
}
