## indexx.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Photo Gallery</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="gallery">
        <img src="assets/images/image1.jpg" alt="Description of image 1" tabindex="0">
        <img src="assets/images/image2.jpg" alt="Description of image 2" tabindex="0">
        <img src="assets/images/image3.jpg" alt="Description of image 3" tabindex="0">
        <img src="assets/images/image4.jpg" alt="Description of image 4" tabindex="0">
        <img src="assets/images/image3.jpg" alt="Description of image 5" tabindex="0">
        <img src="assets/images/image3.jpg" alt="Description of image 6" tabindex="0">
    </div>
    <script src="script.js"></script>
</body>
</html>
```
## styles.css
```
/* styles.css */
body {
    font-family: Arial, sans-serif;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.gallery img {
    width: 200px;
    height: auto;
    border: 2px solid #000;
    outline: none;
}

.gallery img:focus {
    border-color: blue;
}
```
## script.js
```

function onPageLoad() {
    console.log("Page has loaded");
}

function onImageFocus(event) {
    console.log("Image focused:", event.target.alt);
}

function onImageBlur(event) {
    console.log("Image blurred:", event.target.alt);
}

function onMouseMove(event) {
    console.log(`Mouse moved to: (${event.clientX}, ${event.clientY})`);
}

function addTabFocusAttributes(images) {
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}

window.onload = onPageLoad;

document.addEventListener('mousemove', onMouseMove);

const images = document.querySelectorAll('.gallery img');
addTabFocusAttributes(images);

images.forEach(image => {
    image.addEventListener('focus', onImageFocus);
    image.addEventListener('blur', onImageBlur);
});
```
## OUTPUT
![image](https://github.com/user-attachments/assets/debf219f-fd58-4720-9b59-1582e0f4cbf1)
