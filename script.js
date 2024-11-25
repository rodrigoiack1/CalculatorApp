document.querySelector(".theme-btn").addEventListener("click", function () {
  const htmlElement = document.documentElement;
  const currentTheme = htmlElement.classList[0];
  const themes = ["theme1", "theme2", "theme3"];
  const currentIndex = themes.indexOf(currentTheme);
  const nextIndex = (currentIndex + 1) % themes.length;
  const nextTheme = themes[nextIndex];
  htmlElement.classList.remove(currentTheme);
  htmlElement.classList.add(nextTheme);
  const translateXValues = ["0px", "22px", "40px"];
  const translateX = translateXValues[nextIndex];
  this.style.transform = `translateX(${translateX})`;
});

const display = document.querySelector(".display .result");

function appendToDisplay(input) {
  display.value += input;
}

function del() {
  display.value = display.value.slice(0, -1);
}

function reset() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
