package com.theplatform.server.controller;

import com.theplatform.server.models.ImageRequestDto;
import com.theplatform.server.services.ImageService;
import io.netty.handler.codec.base64.Base64Decoder;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
    private final ImageService imageService;

    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @PostMapping(value = "/course/upload-image", produces = {MediaType.IMAGE_JPEG_VALUE, "application/json"})
    public ResponseEntity<?> uplaoddImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
        try {
            String uploaded_image_url = imageService.uploadImage(file.getBytes());
            HashMap<String, String> map = new HashMap<>();
            map.put("imageUri", uploaded_image_url);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } catch (Exception exception) {
            return new ResponseEntity<>(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/course/upload-image-base64")
    public ResponseEntity<?> uploadImageToTheCloud(@RequestBody ImageRequestDto imageDto) {
        try {

            System.out.println("======>" + imageDto.getBase64EncodedImage());


            byte[] name = Base64.getEncoder().encode(imageDto.getBase64EncodedImage().getBytes());
            byte[] decodedString = Base64.getDecoder().decode(new String(imageDto.getBase64EncodedImage()).getBytes(StandardCharsets.UTF_8));

            //System.out.println(new String(decodedString));
            String uploaded_image_url = imageService.uploadImage(name);
            HashMap<String, String> map = new HashMap<>();
            map.put("imageUri", uploaded_image_url);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } catch (Exception exc) {
            exc.getStackTrace();
            return new ResponseEntity<String>(exc.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/image/image-preview/delete")
    public ResponseEntity<?> imagePreviewDelete(@RequestBody String blobName) {
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
