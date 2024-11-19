const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const imageContainer = document.querySelector(".image-container");
const imagesElement = document.querySelectorAll("img");

let currentImg = 1;
let timeout;

const UpdateImgage = () => {
    if (currentImg > imagesElement.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = imagesElement.length;
    }

    imageContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

    timeout = setTimeout(() => {
        currentImg++;
        UpdateImgage();
    }, 5000);
};

UpdateImgage();

nextBtn.addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeout);
    UpdateImgage();
});

prevBtn.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeout);
    UpdateImgage();
});