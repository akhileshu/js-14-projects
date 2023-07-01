const bottomContainer=document.querySelector('.bottom-container')
const navbar=document.querySelector('.navbar')
function changeNavStyle(){
    
    // scroll above a certain limit
    if((window.scrollY) > (bottomContainer.offsetTop -navbar.offsetHeight)){
        navbar.classList.add('active')
    }
    else navbar.classList.remove('active')
}
window.addEventListener('scroll',changeNavStyle)