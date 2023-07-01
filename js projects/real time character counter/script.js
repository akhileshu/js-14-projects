const textArea = document.querySelector(".textarea");
const total = document.querySelector(".total");
const remaining = document.querySelector(".remaining");
const clear = document.querySelector(".clear");
let totalCount;
let remainingCount;
const maxcharacters = 200;

function showCounter() {
  totalCount = textArea.value.length;
  total.innerText = `Total Characters: ${totalCount}`;
  if (totalCount >= maxcharacters) {
    remainingCount = 0;
    textArea.disabled = true;
  } else remainingCount = maxcharacters - totalCount;
  remaining.innerText = `remaining: ${remainingCount}`;
  textArea.focus();
}

function clearTExtArea() {
  textArea.value = "";
  textArea.disabled = false;
  showCounter();
}
showCounter();
textArea.addEventListener("keyup", showCounter);
clear.addEventListener("click", clearTExtArea);
