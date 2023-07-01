const darkModeBtn = document.querySelector(".darkModeBtn");
const navbar = document.querySelector(".navbar");
const bottomContainer = document.querySelector(".bottom-container");

// if mode exist in localstorage it will have value true/false
// else it will return null and darkModeBtn.checked =flase
darkModeBtn.checked = JSON.parse(localStorage.getItem("darkMode"));

function updateMode() {
  if (darkModeBtn.checked) {
    document.body.style.backgroundColor = "#CCCCCC";
    navbar.classList.add("darkMode");
    bottomContainer.classList.add("darkMode");
  } else {
    document.body.style.backgroundColor = "white";
    navbar.classList.remove("darkMode");
    bottomContainer.classList.remove("darkMode");
  }
}
updateMode();
function upadateLocalStorage(e) {
  localStorage.setItem("darkMode", JSON.stringify(darkModeBtn.checked));
}

// use input/change event
darkModeBtn.addEventListener("change", () => {
  updateMode();
  upadateLocalStorage();
});
