package com.theplatform.server.controller;

import com.theplatform.server.services.ImageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;


@RestController
public class ImageController {
    private ImageService imageService;

    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @PostMapping("/course/upload-image")
    public ResponseEntity<?> uploadImageToTheCloud(@RequestBody MultipartFile image) {
        try {
            String uploaded_image_url = imageService.uploadImage(image);
            HashMap<String, String> map = new HashMap<>();
            map.put("imageUri", uploaded_image_url);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } catch (Exception exc) {
            exc.getStackTrace();
            return new ResponseEntity<String>(exc.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/image/image-preview/delete")
    public ResponseEntity<?> imagePreviewDelete(String blobName) {
        if (blobName == null) {
            return new ResponseEntity<>("image not found", HttpStatus.NOT_FOUND);
        }
        try {
            imageService.deleteImage(blobName);
            return new ResponseEntity<>("succefullt delted", HttpStatus.OK);
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_GATEWAY);
        }
    }


}
