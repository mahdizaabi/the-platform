package com.theplatform.server.models;

import com.github.slugify.Slugify;

public class LessonDtoConverter {
    static public Lesson lessonDtoToLesson(LessonDto lessonDto) {

        Slugify slg = new Slugify();
        Lesson lesson = new Lesson();
        lesson.setTitle(lessonDto.getTitle());
        lesson.setContent(lessonDto.getContent());
        lesson.setVideo_preview(lessonDto.getVideo());
        lesson.setSlug(slg.slugify(lessonDto.getTitle()));
        return lesson;
    }

    static public LessonDto lessonToDtoLesson(Lesson lesson) {
        LessonDto lessonDto = new LessonDto();
        lessonDto.setTitle(lesson.getTitle());
        lessonDto.setContent(lesson.getContent());
        lessonDto.setVideo(lesson.getVideo_preview());
        lessonDto.setFree_preview(lesson.getFree_preview());
        return lessonDto;
    }
}
