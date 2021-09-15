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
            //String blobName = imageService.uploadImage(file.getBytes());
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


            //String test = "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAYUCvAMBEQACEQEDEQH/xAAfAAEAAQMFAQEAAAAAAAAAAAAABwYICQECBAUKAwv/xAA6EAABAwQCAQMCBAUEAQIHAAAAAQIDBAUGBwgRCRITIQoxFCJBURUWI2FxFzKBkSRSsRkaJXKhwfD/xAAcAQEAAQUBAQAAAAAAAAAAAAAABgMEBQcIAQL/xAAuEQEAAQMDAwQBAwMFAAAAAAAAAQIDEQQhMQUSQQZRYXETByIyFZHwM4GisdH/2gAMAwEAAhEDEQA/APAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k=";
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
