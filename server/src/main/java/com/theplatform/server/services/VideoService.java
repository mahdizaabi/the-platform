package com.theplatform.server.services;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

public interface VideoService {

    String uploadVideoToContainer(MultipartFile videoFile) throws IOException;
    void deleteVideo(String BlobName);
    File CompressVideo(File file);
}
