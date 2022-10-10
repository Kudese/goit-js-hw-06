const nameInput = document.getElementById("name-input");
const messageName = document.getElementById("name-output");
const initialName = document.getElementById("name-output").textContent;

nameInput.addEventListener("input", () => {
  messageName.textContent = nameInput.value;
  if (messageName.textContent === "") {
    messageName.textContent = initialName;
  }
});
