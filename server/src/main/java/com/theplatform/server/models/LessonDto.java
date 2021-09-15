package com.theplatform.server.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LessonDto {
    private String title;
    private String content;
    private String video;
    private Boolean free_preview;
}
