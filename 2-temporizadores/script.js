"use strict";

let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;

// setInterval() ejecuta una función o un fragmento de código de forma repetitiva cada vez que termina el periodo de tiempo determinado.
// Devuelve un ID de proceso.
const intervalID = setInterval(function () {
  // Cada vez que se ejecuta el intervalo sumamos 5 segundos al tiempo total que ha pasado desde el principio de la ejecución
  seconds += 5;

  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes === 60) {
    hours++;
    minutes = 0;
  }

  if (hours === 24) {
    days++;
    hours = 0;
  }

  console.log(
    `Han pasado ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`
  );
}, 5000);

function timer(num, letter) {
  const ms = computeMiliseconds(num, letter);
  // El método clearInterval() borra un temporizador establecido con el método setInterval().
  // Para borrar un intervalo, use el id devuelto por setInterval(). Luego puede detener la ejecución llamando a clearInterval().
  setTimeout(() => {
    clearInterval(intervalID);
  }, ms);
}

timer(50, "S");

function computeMiliseconds(num, letter) {
  if (letter === "S") {
    return num * 1000;
  }
  if (letter === "M") {
    return num * 1000 * 60;
  }
  if (letter === "H") {
    return num * 1000 * 60 * 60;
  }
  if (letter === "D") {
    return num * 1000 * 60 * 60 * 24;
  }
}

// OPCIÓN 2

/* let elapsedTimeSeconds = 0;

const intervalID = setInterval(function () {
  elapsedTimeSeconds += 5;

  // Lo siguiente es pintar cuanto tiempo ha pasado en formato humano dias
  printTime(elapsedTimeSeconds);
}, 5000);

// Función auxiliar que imprime por pantalla cuanto tiempo ha pasado, ejemplo:
function printTime(timeInSeconds) {
  const days = Math.floor(timeInSeconds / (3600 * 24));
  const hours = Math.floor((timeInSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  console.log(
    `Han pasado ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`
  );
}

function timer(num, letter) {
  const ms = computeMiliseconds(num, letter);
  setTimeout(() => {
    clearInterval(intervalID);
  }, ms);
}

function computeMiliseconds(num, letter) {
  if (letter === "S") {
    return num * 1000;
  }
  if (letter === "M") {
    return num * 1000 * 60;
  }
  if (letter === "H") {
    return num * 1000 * 60 * 60;
  }
  if (letter === "D") {
    return num * 1000 * 60 * 60 * 24;
  }
}

timer(10, "S");
 */
