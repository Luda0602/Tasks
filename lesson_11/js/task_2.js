"use strict";
//Задача 2. Дано інформацію про прибуток К магазинів протягом тижня.

const getRandomRow = (length, min, max) =>
  Array.from(
    { length },
    () => min + Math.floor(Math.random() * (max - min + 1)),
  );

const getRandomMatrix = (rows, cols, min, max) =>
  Array.from({ length: rows }, () => getRandomRow(cols, min, max));

const table = getRandomMatrix(10, 7, 1, 300);

document.write(`<pre>${table.map((row) => row.join("\t")).join("\n")}</pre>`);

// 1) прибуток по магазинах
const profitPerShop = table.map((row) =>
  row.reduce((sum, val) => sum + val, 0),
);

// 2) прибуток по днях
const profitPerDay = [];
for (let d = 0; d < table[0].length; d++) {
  let sum = 0;
  for (let r = 0; r < table.length; r++) {
    sum += table[r][d];
  }
  profitPerDay.push(sum);
}

// 3) робочі дні
let workDaysSum = 0;
for (const row of table) for (let d = 0; d < 5; d++) workDaysSum += row[d];

// 4) вихідні
let weekendSum = 0;
for (const row of table) for (let d = 5; d < 7; d++) weekendSum += row[d];

// 5) макс середа
let maxWednesday = -Infinity;
for (const row of table) if (row[2] > maxWednesday) maxWednesday = row[2];

// 6) >200
const over200 = table.flat().filter((v) => v > 200);

// 7) сортування кожного рядка
const sortedRows = table.map((row) => [...row].sort((a, b) => a - b));

// 8) сортування за max
const sortedByMax = [...table].sort((a, b) => Math.max(...b) - Math.max(...a));

// 9) сортування за сумою
const sortedBySum = [...table].sort(
  (a, b) => b.reduce((s, v) => s + v, 0) - a.reduce((s, v) => s + v, 0),
);

document.write(`
1: ${profitPerShop}<br>
2: ${profitPerDay}<br>
3: ${workDaysSum}<br>
4: ${weekendSum}<br>
5: ${maxWednesday}<br>
6: ${over200}<br>
`);
