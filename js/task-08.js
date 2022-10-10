const form = document.querySelector(".login-form");

form.addEventListener("submit", onSellForm);

function onSellForm(submitForm) {
  submitForm.preventDefault();
  const {
    elements: { email, password },
  } = submitForm.currentTarget;

  if (email.value !== "" && password.value !== "") {
    const formSell = { email: email.value, password: password.value };
    console.log(formSell);
    submitForm.currentTarget.reset();
  } else {
    alert("You missed something");
  }
}