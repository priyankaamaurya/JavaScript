let images = document.querySelectorAll(".b img");
let sideBox = document.querySelector(".sideBox");

// Show first image by default
sideBox.innerHTML = `<img src="${images[0].src}" style="width:100%; height:100%; object-fit:cover; border-radius:15px;">`;

images.forEach(function(img) {
    img.addEventListener("click", function() {
        sideBox.innerHTML = `<img src="${img.src}" style="width:100%; height:100%; object-fit:cover; border-radius:15px;">`;
    });
});
