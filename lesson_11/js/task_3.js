"use strict";
//Задача 3. Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.

const SIZE = 6;
const SHIPS = 5;

const field = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));

// розстановка кораблів
let placed = 0;
while (placed < SHIPS) {
  let r = Math.floor(Math.random() * SIZE);
  let c = Math.floor(Math.random() * SIZE);
  if (field[r][c] === 0) {
    field[r][c] = 1;
    placed++;
  }
}

function playGame(field, ships) {
  let shipsLeft = ships;
  let bullets = parseInt(prompt("Снаряди:", "10"));

  if (isNaN(bullets) || bullets <= 0) return "Некоректні дані";

  while (bullets > 0 && shipsLeft > 0) {
    let r = prompt("Рядок 1-6");
    let c = prompt("Стовпець 1-6");

    if (r === null || c === null) return "Гру скасовано";

    r = parseInt(r) - 1;
    c = parseInt(c) - 1;

    if (r < 0 || r >= SIZE || c < 0 || c >= SIZE) {
      alert("Помилка координат");
      continue;
    }

    if (field[r][c] === 2 || field[r][c] === -1) {
      alert("Вже стріляли");
      continue;
    }

    bullets--;

    if (field[r][c] === 1) {
      field[r][c] = 2;
      shipsLeft--;
      alert(`Влучив! Залишилось ${shipsLeft}`);
    } else {
      field[r][c] = -1;
      alert("Промах");
    }
  }

  return shipsLeft === 0 ? "Перемога" : `Програш. Залишилось ${shipsLeft}`;
}

const result = playGame(field, SHIPS);
alert(result);

document.write(`<pre>${field.map((r) => r.join(" ")).join("\n")}</pre>`);
