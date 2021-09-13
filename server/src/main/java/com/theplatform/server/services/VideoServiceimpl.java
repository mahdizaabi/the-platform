package com.theplatform.server.services;

import com.azure.storage.blob.BlobClient;
import com.azure.storage.blob.BlobContainerClient;
import com.azure.storage.blob.BlobContainerClientBuilder;
import org.springframework.stereotype.Service;

import java.io.*;


@Service
public class VideoServiceimpl implements VideoService{
    @Override
    public String uploadVideoToContainer(String videoPath) throws IOException {
        String constr = "";

        final File initialFile = new File("./vid0215.mp4");
        final InputStream targetStream =
                new DataInputStream(new FileInputStream(initialFile));


        String blobName = "vid_" + java.util.UUID.randomUUID() + ".mp4";
        BlobContainerClient container = new BlobContainerClientBuilder()
                .connectionString("DefaultEndpointsProtocol=https;AccountName=basicstorage1414;AccountKey=W4/q0164K3iX7en1J3c1nWj54p7PPCOH5Rx969K7WYibgzC7VdTNIl/9qkCfJPjWZBt0Vr9fMt0eygYKAnTF2A==;EndpointSuffix=core.windows.net")
                .containerName("evideos")
                .buildClient();
        BlobClient blob = container.getBlobClient(blobName);
        //InputStream targetStream = new ByteArrayInputStream(bytes);
        System.out.println("....===>Uploading to Azure Storage as blob....===>");
        blob.upload(targetStream, targetStream.available(), true);
        return blobName;
    }

    @Override
    public void deleteVideo(String blobName) {
        BlobContainerClient container = new BlobContainerClientBuilder()
                .connectionString("DefaultEndpointsProtocol=https;AccountName=basicstorage1414;AccountKey=W4/q0164K3iX7en1J3c1nWj54p7PPCOH5Rx969K7WYibgzC7VdTNIl/9qkCfJPjWZBt0Vr9fMt0eygYKAnTF2A==;EndpointSuffix=core.windows.net")
                .containerName("evideos")
                .buildClient();
        BlobClient blob = container.getBlobClient(blobName);
        blob.delete();
    }
}
