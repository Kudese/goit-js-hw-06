function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonChandeColor = document.querySelector(".change-color");
const spanLookColor = document.querySelector(".color");
const sectionChengeColor = document.querySelector(".widget");

buttonChandeColor.addEventListener("click", onButtonChengeColor);

function onButtonChengeColor() {
  let currentColor = getRandomHexColor();
  sectionChengeColor.style.backgroundColor = currentColor;
  spanLookColor.textContent = currentColor;
}
