package com.theplatform.server.services;

import com.azure.core.util.BinaryData;
import com.azure.storage.blob.BlobClient;
import com.azure.storage.blob.BlobContainerClient;
import com.azure.storage.blob.BlobContainerClientBuilder;
import com.azure.storage.blob.models.BlobContainerProperties;
import com.azure.storage.blob.models.BlobHttpHeaders;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.*;
import java.math.BigInteger;


@Service
public class ImageServiceImpl{

    public String uploadImage(byte[] imagex) throws IOException {
/*
        String constr="";

        BufferedImage image = ImageIO.read(new File("./Berghain.JPG"));
        BufferedImage xxx = ImageIO.read(new ByteArrayInputStream(imagex));
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(xxx, "jpg", baos);
        byte[] bytes = baos.toByteArray();

        InputStream targetStream = new ByteArrayInputStream(imagex);
        BlobContainerClient container = new BlobContainerClientBuilder()
                .connectionString("DefaultEndpointsProtocol=https;AccountName=basicstorage1414;AccountKey=W4/q0164K3iX7en1J3c1nWj54p7PPCOH5Rx969K7WYibgzC7VdTNIl/9qkCfJPjWZBt0Vr9fMt0eygYKAnTF2A==;EndpointSuffix=core.windows.net")
                .containerName("test-container")
                .buildClient();
        BlobClient blob=container.getBlobClient("dd.JPG");
        blob.upload(targetStream, targetStream.available(),true);
    return "ok";
    */
        String blobName = "img_" + java.util.UUID.randomUUID() + ".JPG";

        //BufferedImage image = ImageIO.read(imagex)
        //ByteArrayOutputStream baos = new ByteArrayOutputStream();
        //ImageIO.write(image, "jpg", baos);
        //byte[] bytes = baos.toByteArray();

        BlobContainerClient container = new BlobContainerClientBuilder()
                .connectionString("DefaultEndpointsProtocol=https;AccountName=basicstorage1414;AccountKey=W4/q0164K3iX7en1J3c1nWj54p7PPCOH5Rx969K7WYibgzC7VdTNIl/9qkCfJPjWZBt0Vr9fMt0eygYKAnTF2A==;EndpointSuffix=core.windows.net")
                .containerName("test-container")
                .buildClient();
        BlobClient blob = container.getBlobClient(blobName);

        InputStream targetStream = new ByteArrayInputStream(imagex);
        System.out.println("....===>Uploading to Azure Storage as blob....===>");

        //blob.upload(BinaryData.fromBytes(binaryStr.getBytes()));
        //blob.upload(targetStream, targetStream.available(),true);
        blob.upload(targetStream, targetStream.available(),true);

        //BlobHttpHeaders blobHttpHeaders = new BlobHttpHeaders();
        //blobHttpHeaders.setContentType("image/jpeg");
        //blobHttpHeaders.setContentEncoding("Base64");
       //blob.setHttpHeaders(blobHttpHeaders);
        System.out.println("succefully uploaded to azure");
        return blobName;
    }

    public void deleteImage(String blobName) {
            BlobContainerClient container = new BlobContainerClientBuilder()
                    .connectionString("DefaultEndpointsProtocol=https;AccountName=basicstorage1414;AccountKey=W4/q0164K3iX7en1J3c1nWj54p7PPCOH5Rx969K7WYibgzC7VdTNIl/9qkCfJPjWZBt0Vr9fMt0eygYKAnTF2A==;EndpointSuffix=core.windows.net")
                    .containerName("test-container")
                    .buildClient();
            BlobClient blob = container.getBlobClient(blobName);
            blob.delete();
    }
}
