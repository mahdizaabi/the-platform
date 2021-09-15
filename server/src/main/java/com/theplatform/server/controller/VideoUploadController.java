package com.theplatform.server.controller;

import com.theplatform.server.services.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.websocket.server.PathParam;

@RequestMapping("/api")
@RestController
public class VideoUploadController {
    @Autowired
    private VideoService videoService;

    @PostMapping(value = "/video/upload")
    public ResponseEntity<?> uploadVideo(@RequestParam("video")MultipartFile video) {
        if(video == null) {
            return new ResponseEntity<>("no video has been sent", HttpStatus.NOT_FOUND);
        }
        try {
            String videoUrl = videoService.uploadVideoToContainer(video);
            return new ResponseEntity<String>(videoUrl, HttpStatus.OK);
        } catch(Exception exception) {
                return new ResponseEntity<>(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/video/remove/{slug}/{blobName}")
    public ResponseEntity<?> deleteVideo(@PathVariable String slug, @PathVariable String blobName) {
        if(slug == null || blobName == null) {
            return new ResponseEntity<>("video not found", HttpStatus.NOT_FOUND);
        }
        try{
            videoService.deleteVideo(blobName);
            return new ResponseEntity<>("Video has been succefullly deleted", HttpStatus.OK);
        }catch(Exception exception) {
            exception.printStackTrace();
            return new ResponseEntity<>(exception.getMessage(), HttpStatus.OK);
        }
    }
}
