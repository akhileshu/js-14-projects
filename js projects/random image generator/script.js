const container = document.querySelector(".container");
let currentnum = 0;
let nextnum = currentnum + 6;
function setimage() {
  // display 6 random images on dom
  for (let i = currentnum; i < nextnum; i++) {
    const image = document.createElement("img");
    image.src = `https://picsum.photos/300?random=${i}`;
    image.classList.add("image");
    container.append(image)
  }
  currentnum+=6
  nextnum+=6
}
setimage()
const loadMore = document.querySelector(".loadMore");
loadMore.addEventListener("click",setimage);
