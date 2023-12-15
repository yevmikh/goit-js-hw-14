const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newArrayIngridients = ingredients.map((ingridient) => {
  const newElementLi = document.createElement("li");
  newElementLi.textContent = ingridient;
  newElementLi.classList.add("item");
  return newElementLi;
});
const newElementUl = document.querySelector("ul");
newElementUl.append(...newArrayIngridients);

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// const ingrList = document.querySelector("#ingredients");
// const ingrArr = [];

// ingredients.forEach((ingridient) => {
//   const ingrItem = document.createElement("li");

//   ingrItem.textContent = ingridient;
//   ingrItem.classList.add("item");
//   ingrArr.push(ingrItem);
// });
// ingrList.append(...ingrArr);
