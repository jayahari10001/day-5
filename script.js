
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
