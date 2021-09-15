package com.theplatform.server.dto;
import com.theplatform.server.models.LessonDto;
import com.theplatform.server.models.User;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class CourseDto {
    private String name;
    private String description;
    private Float price;
    private String image_preview;
    private Boolean published;
    private Boolean paid;
    private String category;
    private String username;
    private String slug;
    private Long user_id;
    private List<LessonDto> lessons;
}
