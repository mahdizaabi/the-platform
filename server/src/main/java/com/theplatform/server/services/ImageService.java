package com.theplatform.server.services;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ImageService {
    String uploadImage(byte[] image) throws IOException;
    void deleteImage(String BlobName);
}
