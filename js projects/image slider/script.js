// const sliderContainer = document.querySelector(".sliderContainer");
const imageContainer = document.querySelector(".imageContainer");
const images = document.querySelectorAll("img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentImg = 1;
let timeout;

function slideImage(e) {
  // go left
  if (e.target.classList.contains("prev")) {
    currentImg--;
    // remove automatic slide 
    clearTimeout(timeout);
    updateImg();
  }
  // go right
  else {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
  }
}

function updateImg() {
  //   if you crossed  both sides
  if (currentImg > images.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = images.length;
  }
  imageContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  // add automatic slide
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}
updateImg();
prev.addEventListener("click", slideImage);
next.addEventListener("click", slideImage);
