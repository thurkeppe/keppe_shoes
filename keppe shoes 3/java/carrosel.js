

let currentImage = 1;
showImage(currentImage);

function changeImage(n) {
    showImage(currentImage += n);
}

function showImage(n) {
    const images = document.getElementsByClassName("image-container");

    if (n > images.length) {
        currentImage = 1;
    }

    if (n < 1) {
        currentImage = images.length;
    }

    for (let i = 0; i < images.length; i++) {
        images[i].style.transform = "translateX(" + ((i - currentImage + 1) * 100) + "%)";
    }
}