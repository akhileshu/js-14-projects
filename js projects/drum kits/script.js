const kits = ["crash", "kick", "snare", "tommy"];

const container = document.querySelector(".container");
function plysound(drum, audio) {
  audio.currentTime = 0;
  audio.play();
  drum.style.transform = `scale(.9)`;
  setTimeout(() => {
    drum.style.transform = `scale(1)`;
  }, 100);
}
kits.forEach((kit) => {
  // creating a drum element to show in dom
  // and audio element to play
  // after appending in dom

  // and add event listener on drum
  // and add event listener on window ,play sound if key match to first char of drum

  const drum = document.createElement("button");
  const audio = document.createElement("audio");
  drum.classList.add("drum");
  drum.innerText = kit;
  audio.src = `${kit}.wav`;
  container.append(drum);
  drum.addEventListener("click", () => {
    plysound(drum, audio);
  });
  window.addEventListener("keydown", (event) => {
    if (event.key == kit.slice(0, 1)) {
      plysound(drum, audio);
    }
  });
});
