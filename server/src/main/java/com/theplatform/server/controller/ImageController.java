package com.theplatform.server.controller;

import com.theplatform.server.services.ImageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashMap;


@RestController
@RequestMapping("/api")
public class ImageController {
    private ImageService imageService;

    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @PostMapping("/course/upload-image")
    public ResponseEntity<?> uploadImageToTheCloud(@RequestBody String image) {
        try {
            byte[] name = Base64.getEncoder().encode(image.getBytes());
            byte[] decodedString = Base64.getDecoder().decode(new String(name).getBytes(StandardCharsets.UTF_8));
            System.out.println(new String(decodedString));
            String uploaded_image_url = imageService.uploadImage(decodedString);
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
