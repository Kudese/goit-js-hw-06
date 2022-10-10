const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const gallery = document.querySelector(".gallery");
const listArt = [];

for (let i = 0; i < images.length; i++) {
  const liGallery = document.createElement("li");
  liGallery.classList.add("gallary__iteam");
  const iteamLi = document.createElement("img");
  iteamLi.classList.add("gallary__foto");
  iteamLi.src = images[i].url;
  iteamLi.alt = images[i].alt;
  liGallery.append(iteamLi);
  listArt.push(liGallery);
}

gallery.append(...listArt);
