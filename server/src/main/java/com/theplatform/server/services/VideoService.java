package com.theplatform.server.services;

import java.io.FileNotFoundException;
import java.io.IOException;

public interface VideoService {

    String uploadVideoToContainer(String videoPath) throws IOException;
    void deleteVideo(String BlobName);
}
