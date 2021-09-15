package com.theplatform.server.services;

import com.azure.storage.blob.BlobClient;
import com.azure.storage.blob.BlobContainerClient;
import com.azure.storage.blob.BlobContainerClientBuilder;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;

@Service
public class ImageServiceFormFileImp implements ImageService{
    @Override
    public String uploadImage(byte[] image) throws IOException {
        String blobName = "img_" + java.util.UUID.randomUUID() + ".JPG";
        BlobContainerClient container = new BlobContainerClientBuilder()
                .connectionString("DefaultEndpointsProtocol=https;AccountName=basicstorage1414;AccountKey=W4/q0164K3iX7en1J3c1nWj54p7PPCOH5Rx969K7WYibgzC7VdTNIl/9qkCfJPjWZBt0Vr9fMt0eygYKAnTF2A==;EndpointSuffix=core.windows.net")
                .containerName("test-container")
                .buildClient();
        BlobClient blob = container.getBlobClient(blobName);
        InputStream targetStream = new ByteArrayInputStream(image);
        System.out.println("....===>Uploading to Azure Storage as blob....===>");
        blob.upload(targetStream, targetStream.available(),true);
        return blobName;
    }

    @Override
    public void deleteImage(String BlobName) {
        System.out.println("delete image... ");
    }
}
