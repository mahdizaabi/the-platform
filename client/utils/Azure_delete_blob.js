export async function deleteBlob(blobName) {
        const containerName = "epimages"
        const containerClient = blobServiceClient.getContainerClient(containerName);
        const response = await containerClient.deleteBlob(blobName)
        console.log('\ndeleting blob:\n\t', blobName);
        console.log("response body from Azure ===>", uploadBlobResponse)
        console.log("Blob was deletes successfully. requestId: ", uploadBlobResponse.requestId);
        return response;
}

