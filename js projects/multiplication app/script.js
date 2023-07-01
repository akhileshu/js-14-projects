const container = document.querySelector(".container");
const score = document.querySelector("#score");
const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
const submit = document.querySelector("#submit");
const round = document.querySelector(".round");

let x = Math.floor(Math.random() * 15) + 1;
let y = Math.floor(Math.random() * 15) + 1;
let played = 1;
round.innerText = `round : ${played}/10`;
question.textContent = `what is ${x} multiplied by ${y} ?`;
answer.focus();

function start() {
// here sequence of steps matter
    if (answer.value == "") alert("please enter valid answer");
    else {
      if (Number(answer.value) == x * y) score.textContent++;
      else score.textContent--;

      x = Math.floor(Math.random() * 15) + 1;
      y = Math.floor(Math.random() * 15) + 1;
      question.textContent = `what is ${x} multiplied by ${y}?`;
      answer.value = "";
      answer.focus();
      played++;
      round.innerText = `round : ${played}/10`;
      if (played > 10) {
        container.innerHTML = `<div class="score">Final Score: ${Number(
          score.innerText
        )}</div><p>Congratulations! You completed the game.</p><button id="restartButton">Restart</button>`;
        const Restart = document.querySelector("#restartButton");
        const reloadPage = location.reload.bind(location);
        Restart.addEventListener("click", reloadPage);
      }
    }
  }


submit.addEventListener("click", start);
// ENTER button
answer.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    // Enter key code
    submit.click(); // Trigger submit button click
  }
});
