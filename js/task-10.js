function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const numberBoxCreate = document.querySelector("input");
const createPlace = document.getElementById("boxes");
const buttonCreateBox = document.querySelector("[data-create]");
const buttonDestroidBox = document.querySelector("[data-destroy]");

let amount = numberBoxCreate.value;

buttonCreateBox.addEventListener("click", createBoxes);
buttonDestroidBox.addEventListener("click", onDestrodbox);

function createBoxes(amount) {
  let listBox = [];
  createPlace.innerHTML = "";

  for (let i = 0; i < numberBoxCreate.value; i++) {
    const iteamBox = document.createElement("div");
    iteamBox.style.width = `${30 + 10 * i}px`;
    iteamBox.style.height = `${30 + 10 * i}px`;
    iteamBox.style.backgroundColor = getRandomHexColor();
    listBox.push(iteamBox);
  }
  createPlace.append(...listBox);
}
function onDestrodbox() {
  createPlace.innerHTML = "";
  numberBoxCreate.value = "";
}
