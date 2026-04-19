"use strict";

//Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
function generateRandomPrices(quantity) {
  let prices = [];
  for (let i = 0; i < quantity; i++) {
    prices.push(Math.floor(Math.random() * 10000) + 1);
  }
  return prices;
}

let number = parseInt(prompt("Генераці цифр", "5"));
const total = generateRandomPrices(number);

document.write(`Історія цін: ${total.join(", ")}<br><br>`);
//1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
let moreThousand = total.filter((n) => n > 1000);
document.write(`Ціни ,які більші за 1000: ${moreThousand.join(",")}<br><br>`);
//2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
const numMoreThousand = total
  .map((num, i) => (num > 1000 ? i : -1))
  .filter((i) => i !== -1);
document.write(
  `Номери чисел,що більші за 1000: ${numMoreThousand.join(",")}<br><br>`,
);
//3)Сформувати список з тих цін, які більші за попереднє значення
const pricesMoreLast = total.filter((n, i, arr) => i > 0 && n > arr[i - 1]);
document.write(
  `Ціни ,які більші за попереднє значення: ${pricesMoreLast.join(",")}<br><br>`,
);
//4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
const max = Math.max(...total);
const pricesProcentMax = total.map((n) => (n / max) * 100);
document.write(
  `Ціни у відсотках відносно максимальної ціни: ${pricesProcentMax.join(",")}<br><br>`,
);
