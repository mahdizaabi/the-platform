package com.theplatform.server.controller;


import com.theplatform.server.services.ImageService;
import com.theplatform.server.services.VideoService;
import org.apache.http.protocol.HTTP;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.HashMap;

@RestController
public class VideoController {
    @Autowired
    private VideoService videoService;
    @PostMapping("/course/video/upload")
    public ResponseEntity<?> uploadVideo() {
        try{
            String blobEndpoint = videoService.uploadVideoToContainer("extrack path from request");
            HashMap<String, String> map = new HashMap<>();
            String VIDEO_URL = "https://basicstorage1414.blob.core.windows.net/evideos/" + blobEndpoint;
            map.put("videoUrl", VIDEO_URL);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }catch (IOException exception) {
            exception.getStackTrace();
           return new ResponseEntity<>(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/course/video/remove/{slug}/{blobName}")
    public ResponseEntity<?> deleteVideo(@PathVariable String slug, @PathVariable String blobName) {
        try{
            videoService.deleteVideo(blobName);
            return new ResponseEntity<>("video succefully deleted", HttpStatus.OK);
        }catch(Exception exception) {
            exception.printStackTrace();
            return new ResponseEntity<>(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
