// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
//підставляє його поточне значення в span#name - output.Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  nameOutput.textContent = nameInput.value;
  if (nameOutput.textContent.length === 0) {
    nameOutput.textContent = "Ananymos";
  }
});

// const nameInputEl = document.querySelector("#name-input");
// const nameOutputEl = document.querySelector("#name-output");

// nameInputEl.addEventListener("input", () => {
//   const name = nameInputEl.value;

//   nameOutputEl.textContent = name ? name : "Anonymous";
// });
