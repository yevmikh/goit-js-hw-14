// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const addActionEl = document.querySelector(`button`);
const valueEl = document.querySelector("#value");
const counterValue = {
  value: 0,
  decrement(value) {
    this.value -= 1;
  },
  increment(value) {
    this.value += 1;
  },
};

const decreaseBtn = document.querySelector('button[data-action="decrement"]');
decreaseBtn.addEventListener("click", () => {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});
const increaseBtn = document.querySelector('button[data-action="increment"]');
increaseBtn.addEventListener("click", () => {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});
