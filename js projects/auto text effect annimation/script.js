const carrers = ["youtuber", "web developer", "freelancer", "instructor"];
const container = document.querySelector(".container");
let carrerIndex = 0;
let characterIndex = 0;

function updateText() {
    characterIndex++
    let aOran=carrers[carrerIndex].slice(0,1)==('i') ? 'an':'a'
    // add eachcharacter
    container.innerHTML = `<div class="container">
    <p>i am ${aOran} ${carrers[carrerIndex].slice(0, characterIndex)}</p>
    </div>`;
    // start new word
    if(characterIndex==carrers[carrerIndex].length){
        carrerIndex++
        characterIndex=0
    }
    // last career typed
    if(carrerIndex==carrers.length)carrerIndex=0
    // do for every 300 ms
setTimeout(updateText,300)
}
updateText();
