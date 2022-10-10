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

// const ingredient0 = document.createElement("li")
//  ingredient0.textContent=ingredients[0]
// const ingredient1 = document.createElement("li")
//  ingredient1.textContent=ingredients[1]
// const ingredient2 = document.createElement("li")
//  ingredient2.textContent=ingredients[2]
// const ingredient3 = document.createElement("li")
//  ingredient3.textContent=ingredients[3]
// const ingredient4 = document.createElement("li")
//  ingredient4.textContent=ingredients[4]
// const ingredient5 = document.createElement("li")
//  ingredient5.textContent=ingredients[5]

// listIngredients.append(ingredient0, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5)
