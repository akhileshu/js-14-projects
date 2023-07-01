const container = document.querySelector(".container");
// generate 42 random color containers
for (let index = 0; index < 42; index++) {
  const colorContainer = document.createElement("div");
  colorContainer.classList.add("color-container");
  container.append(colorContainer);
  let color = getRandomColor();
  colorContainer.style.backgroundColor = color;
  colorContainer.innerText = color;
}

// Add event listener to each container item

Array.from(container.children).forEach(function (item) {
  item.addEventListener("click", function (event) {
    copyToClipboard(event.target.innerText);
  });
});

// Function to generate random color
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Text copied to clipboard!");
    })
    .catch((error) => {
      console.error("Error copying text to clipboard: ", error);
      alert("Error copying text to clipboard.");
    });
}
