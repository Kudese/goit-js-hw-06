const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listIngredients = document.getElementById("ingredients");
const iteamList = [];
for (let i = 0; i < ingredients.length; i++) {
  const positiolist = document.createElement("li");
  positiolist.textContent = ingredients[i];
  iteamList.push(positiolist);
}
listIngredients.append(...iteamList);

