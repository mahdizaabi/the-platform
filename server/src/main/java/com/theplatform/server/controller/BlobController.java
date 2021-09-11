package com.theplatform.server.controller;

import com.azure.storage.blob.BlobClient;
import com.azure.storage.blob.BlobContainerClient;
import com.azure.storage.blob.BlobContainerClientBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.WritableResource;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.*;
import java.nio.charset.Charset;

@RestController
@RequestMapping("blob")
public class BlobController {
    /*@Value("azure-blob://test-container/img.JPG")
    private Resource blobFile;

    @GetMapping("/readBlobFile")
    public String readBlobFile() throws IOException {
        return StreamUtils.copyToString(this.blobFile.getInputStream(), Charset.defaultCharset());
    }

    @PostMapping("/writeBlobFile")
    public String writeBlobFile(@RequestBody String data) throws IOException {
        BufferedImage image = ImageIO.read(new File("./za.JPG"));

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(image, "jpg", baos);

        byte[] bytes = baos.toByteArray();
        try (OutputStream os = ((WritableResource) this.blobFile).getOutputStream()) {
            os.write(bytes);
        }
        return "file was updated";

    }*/
    @GetMapping("/upload")
    public String uploadFile() throws IOException {
        String constr="";

        BufferedImage image = ImageIO.read(new File("./za.JPG"));

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(image, "jpg", baos);

        byte[] bytes = baos.toByteArray();
        BlobContainerClient container = new BlobContainerClientBuilder()
                .connectionString("DefaultEndpointsProtocol=https;AccountName=basicstorage1414;AccountKey=W4/q0164K3iX7en1J3c1nWj54p7PPCOH5Rx969K7WYibgzC7VdTNIl/9qkCfJPjWZBt0Vr9fMt0eygYKAnTF2A==;EndpointSuffix=core.windows.net")
                .containerName("test-container")
                .buildClient();
        BlobClient blob=container.getBlobClient("dd.JPG");
        InputStream targetStream = new ByteArrayInputStream(bytes);
        blob.upload(targetStream, targetStream.available(),true);

    return "ok";
    }
}
