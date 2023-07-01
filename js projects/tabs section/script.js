const buttons = document.querySelectorAll(".button");
const contents = document.querySelectorAll(".content");

// show 1st tab

display(contents[0]);
addClass(buttons[0]);

function display(element) {
  element.style.display = "flex";
}
function hide(element) {
  element.style.display = "none";
}
function addClass(element) {
  element.classList.add("active");
}
function removeClass(element) {
  element.classList.remove("active");
}

Array.from(buttons).forEach((button, index) => {
  button.addEventListener("click", () => {
    // remove active class from remaining buttons
    Array.from(buttons).forEach((button) => {
      removeClass(button);
    });
    // handle clicked button
    addClass(button);
    Array.from(contents).forEach((content) => {
      hide(content);
    });
    // handle clicked content
    display(contents[index]);
  });
});
