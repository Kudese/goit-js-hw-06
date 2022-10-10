const buttons = document
  .getElementById("counter")
  .getElementsByTagName("button");

const counterValue = document.getElementById("value");

counterValue.textContent = 0;

for (const button of buttons) {
  button.addEventListener("click", () => {
    if (button.dataset.action === "decrement") {
      counterValue.textContent -= Number(-button.textContent);
    } else {
      counterValue.textContent -= Number(-button.textContent);
    }
  });
}

