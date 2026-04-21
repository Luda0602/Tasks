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
//5)Підрахувати кількість змін цін
let changingOfPrices = total.reduce(
  (counter, current, index, arr) =>
    index > 0 && current !== arr[index - 1] ? counter + 1 : counter,
  0,
);

document.write(`Кількість змін ціни: ${changingOfPrices}<br><br>`);
//6)Визначити, чи є ціна, що менше 1000
const hasLessThan1000 = total.some((n) => n < 1000);
document.write(`Є ціна менше 1000: ${hasLessThan1000}<br><br>`);
//  7)Визначати, чи усі ціни більше за 1000
const allMoreThan1000 = total.every((n) => n > 1000);
document.write(`Всі ціни більше 1000: ${allMoreThan1000}<br><br>`);
// 8) Підрахувати кількість цін, що більше за 1000
const countMoreThan1000 = total.filter((n) => n > 1000).length;
document.write(`Кількість цін > 1000: ${countMoreThan1000}<br><br>`);

// 9) Підрахувати суму цін, що більше за 1000
const sumMoreThan1000 = total
  .filter((n) => n > 1000)
  .reduce((sum, n) => sum + n, 0);

document.write(`Сума цін > 1000: ${sumMoreThan1000}<br><br>`);

// 10) Знайти першу ціну, що більше за 1000
const firstMoreThan1000 = total.find((n) => n > 1000);
document.write(`Перша ціна > 1000: ${firstMoreThan1000}<br><br>`);

// 11) Знайти індекс першої ціни, що більше за 1000
const indexFirstMoreThan1000 = total.findIndex((n) => n > 1000);
document.write(`Індекс першої ціни > 1000: ${indexFirstMoreThan1000}<br><br>`);

// 12) Знайти останню ціну, що більше за 1000
const lastMoreThan1000 = total.findLast((n) => n > 1000);
document.write(`Остання ціна > 1000: ${lastMoreThan1000}<br><br>`);

// 13) Знайти індекс останньої ціни, що більше за 1000
const lastIndexMoreThan1000 = total.findLastIndex((n) => n > 1000);
document.write(
  `Індекс останньої ціни > 1000: ${lastIndexMoreThan1000}<br><br>`,
);
