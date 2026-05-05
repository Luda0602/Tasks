"use strict";
//Задача 1. Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)

// генерація рядка
const getRandomRow = (length, min, max) =>
  Array.from(
    { length },
    () => min + Math.floor(Math.random() * (max - min + 1)),
  );

// генерація таблиці
const getRandomMatrix = (rows, cols, min, max) =>
  Array.from({ length: rows }, () => getRandomRow(cols, min, max));

const matrix = getRandomMatrix(4, 6, 1, 100);
document.write(`<pre>${matrix.map((r) => r.join("\t")).join("\n")}</pre>`);

// половинки
const halfRows = Math.floor(matrix.length / 2);
const halfCols = Math.floor(matrix[0].length / 2);

// 1
let sum1 = 0;
for (let r = 0; r < halfRows; r++)
  for (let c = 0; c < halfCols; c++) sum1 += matrix[r][c];

// 2
let sum2 = 0;
for (let r = 0; r < halfRows; r++)
  for (let c = halfCols; c < matrix[r].length; c++) sum2 += matrix[r][c];

// 3
let sum3 = 0;
for (let r = halfRows; r < matrix.length; r++)
  for (let c = 0; c < halfCols; c++) sum3 += matrix[r][c];

// 4
let sum4 = 0;
for (let r = halfRows; r < matrix.length; r++)
  for (let c = halfCols; c < matrix[r].length; c++) sum4 += matrix[r][c];

// 5
let sumEvenRows = 0;
for (let r = 0; r < matrix.length; r += 2)
  for (let c = 0; c < matrix[r].length; c++) sumEvenRows += matrix[r][c];

// 6
let sumOddCols = 0;
for (let r = 0; r < matrix.length; r++)
  for (let c = 1; c < matrix[r].length; c += 2) sumOddCols += matrix[r][c];

// 7
let sumEvenRowsOddCols = 0;
let sumOddRowsEvenCols = 0;

for (let r = 0; r < matrix.length; r++) {
  for (let c = 0; c < matrix[r].length; c++) {
    if (r % 2 === 0 && c % 2 !== 0) sumEvenRowsOddCols += matrix[r][c];
    if (r % 2 !== 0 && c % 2 === 0) sumOddRowsEvenCols += matrix[r][c];
  }
}

document.write(`
1: ${sum1}<br>
2: ${sum2}<br>
3: ${sum3}<br>
4: ${sum4}<br>
5: ${sumEvenRows}<br>
6: ${sumOddCols}<br>
7: ${sumEvenRowsOddCols} | ${sumOddRowsEvenCols}<br>
`);
