const bgImage=document.querySelector('.bgImage')

function handleBgImage(){
    bgImage.style.opacity=1-(window.scrollY /900)
    bgImage.style.backgroundSize=150-window.scrollY /12 +'%'
}
window.addEventListener('scroll',handleBgImage)