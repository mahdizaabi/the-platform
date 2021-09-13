package com.theplatform.server.services;

import com.azure.storage.blob.BlobClient;
import com.azure.storage.blob.BlobContainerClient;
import com.azure.storage.blob.BlobContainerClientBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.*;


@Service
public class ImageServiceImpl implements ImageService{
    @Override
    public String uploadImage(byte[] imagex) throws IOException {

        String constr = "";
        String blobName = "img_" + java.util.UUID.randomUUID() + ".JPG";
        //BufferedImage image = ImageIO.read(imagex.getInputStream());
        //ByteArrayOutputStream baos = new ByteArrayOutputStream();

        //ImageIO.write(image, "jpg", baos);
        //byte[] bytes = baos.toByteArray();
        BlobContainerClient container = new BlobContainerClientBuilder()
                .connectionString("DefaultEndpointsProtocol=https;AccountName=basicstorage1414;AccountKey=W4/q0164K3iX7en1J3c1nWj54p7PPCOH5Rx969K7WYibgzC7VdTNIl/9qkCfJPjWZBt0Vr9fMt0eygYKAnTF2A==;EndpointSuffix=core.windows.net")
                .containerName("epimages")
                .buildClient();
        BlobClient blob = container.getBlobClient(blobName);
        InputStream targetStream = new ByteArrayInputStream(imagex);
        System.out.println("....===>Uploading to Azure Storage as blob....===>");
        blob.upload(targetStream, targetStream.available(), true);
        System.out.println("succefully uploaded to azure");
        return blobName;
    }


    @Override
    public void deleteImage(String blobName) {
            BlobContainerClient container = new BlobContainerClientBuilder()
                    .connectionString("DefaultEndpointsProtocol=https;AccountName=basicstorage1414;AccountKey=W4/q0164K3iX7en1J3c1nWj54p7PPCOH5Rx969K7WYibgzC7VdTNIl/9qkCfJPjWZBt0Vr9fMt0eygYKAnTF2A==;EndpointSuffix=core.windows.net")
                    .containerName("test-container")
                    .buildClient();
            BlobClient blob = container.getBlobClient(blobName);
            blob.delete();
    }


}
