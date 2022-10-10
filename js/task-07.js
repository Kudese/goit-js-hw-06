const slider = document.getElementById("font-size-control");
const textFrontSize = document.getElementById("text");
slider.addEventListener("input", () => {
  textFrontSize.style.fontSize = `${slider.value}px`;
});
