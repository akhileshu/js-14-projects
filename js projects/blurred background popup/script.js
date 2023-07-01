const container=document.querySelector('.container')
const join=document.querySelector('.join')
const popUpContainer=document.querySelector('.popUp')
const close=document.querySelector('.close')

// on container class=active then blur it
// on popUpContainer class=active then hide it
function showPopUp(){
    container.classList.add('active')
    popUpContainer.classList.remove('active')
}
function closePopUp(){
    popUpContainer.classList.add('active')
    container.classList.remove('active')
}
join.addEventListener('click',showPopUp)
close.addEventListener('click',closePopUp)