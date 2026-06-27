let slideImages = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg"
];

let currentIndex = 0;

function changeSlide() {
    currentIndex++;

    if (currentIndex >= slideImages.length) {
        currentIndex = 0;
    }

    document.getElementById("slideImage").src = slideImages[currentIndex];
}

setInterval(changeSlide, 2000);

function showImage(selectedImage) {
    document.getElementById("mainImage").src = selectedImage.src;
}