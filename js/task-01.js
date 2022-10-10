const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);

const iteamCategories = document.getElementsByTagName("h2");
for (let i = 0; i < iteamCategories.length; i++) {
  console.log(`Category: ${iteamCategories[i].textContent}`);
  console.log(
    `Elements: ${iteamCategories[i].nextElementSibling.children.length}`
  );
}
