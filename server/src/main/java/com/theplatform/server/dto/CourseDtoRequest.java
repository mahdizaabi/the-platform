package com.theplatform.server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseDtoRequest {
    private String name;
    private String description;
    private Float price;
    private String image_preview;
    private Boolean published;
    private Boolean paid;
    private String category;
}
