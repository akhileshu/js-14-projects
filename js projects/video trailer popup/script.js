const container = document.querySelector(".container");
const watch = document.querySelector(".watch");
const vidoContainer = document.querySelector(".video");
const close = document.querySelector(".close");
const video=document.querySelector('video')

// for applying methods of video select using queryselector
function videoPopUp(e) {
  container.classList.add("hide");
  vidoContainer.classList.remove("hide");
  video.play()
 
}
function closePopUp(e) {
  vidoContainer.classList.add("hide");
  container.classList.remove("hide");
  video.pause()
  video.currentTime=0
  
  
}

watch.addEventListener("click", videoPopUp);
close.addEventListener("click", closePopUp);
