//Part 1:
const title = document.querySelector("#main-title");
title.textContent = "Welcome to the Cozy Cafe";
title.style.textAlign = "center";

//Part 2:
const body = document.querySelector("body");
body.style.backgroundColor = "bisque";

//Pary 3:
const quote = document.querySelector("#quote-of-the-day");
quote.textContent = "Never Give Up";
quote.style.fontSize = "20px";

//Part 4:
const highlightTitle = document.querySelectorAll(".highlight-title");
highlightTitle.forEach((subTtile) => {
    subTtile.style.fontStyle = "italic";
})

//Part 5:
const ulElement = document.querySelector("#past-menu-items");
const roseCakeLi = document.createElement("li");
roseCakeLi.textContent = "Rose Cake";
ulElement.appendChild(roseCakeLi);

//Part 6:
const ulElement2 = document.querySelector("#cafe-specialties");
const karakLi = document.createElement("li");
karakLi.textContent = "Karak Tea";
ulElement2.appendChild(karakLi);

//Part 7:
const blogSection = document.querySelector("#blogs");
const divElement = document.createElement("div");
divElement.classList.add("blog-post");
blogSection.appendChild(divElement);

const h3Element = document.createElement("h3");
h3Element.textContent = "Karak Tea Tasting Event";
divElement.appendChild(h3Element);

const pElement = document.createElement("p");
pElement.textContent = "Join us for our Karak Tea Tasting Event, where you can explore the rich flavors and traditions of this beloved beverage while sampling various delightful blends!";
h3Element.after(pElement);

