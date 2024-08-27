function downloadImage(url, downloaded) {
    console.log('Image is being downloaded');
    setTimeout(() => {
        const fileName = url.split('/').pop;
        downloaded(fileName);
    } , 2000);
}


const IMAGE_URL = 'https://facebook.com/downloads/aakashrana.jpg';

downloadImage(IMAGE_URL, function(fileName) {
    console.log('File with name', fileName ,'' downloaded successfully');
});