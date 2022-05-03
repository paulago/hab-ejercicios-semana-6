"use strict";

//Promesa de la edad. Devuelve un número del 0 al 100, tardando entre 0 y 1 segundos
const agePromise = new Promise((resolve, reject) =>
  setTimeout(
    () => resolve(Math.round(Math.random() * 10)),
    Math.random() * 1000
  )
);

// Para devolver una promesa usamos return new Promise((resolve, reject)=> {})
function checkAge(age) {
  return new Promise(function (resolve, reject) {
    // "Producing Code" (May take some time)
    if (age < 18) {
      reject(`${age} es menor.`);
    }

    if (age % 2 === 0) {
      setTimeout(() => {
        resolve(`${age} es par`);
      }, 1000);
    }

    if (age % 2 !== 0) {
      setTimeout(() => {
        resolve(`${age} es impar`);
      }, 2000);
    }
  });
}

// CON ASYNC Y AWAIT
// "Consuming Code" (Must wait for a fulfilled Promise)
async function ageValidation() {
  try {
    const ageRandom = await agePromise;
    const message = await checkAge(ageRandom);
    console.log(message);
  } catch (err) {
    console.error(err.message);
  }
}

ageValidation();

// CON THEN Y CATCH
// Para consumir una promesa usamos .then
// Se llama al método then, expresando qué es lo que queremos hacer con el valor que devolverá la promesa.
// La promesa cuando es resuelta pasa por parámetro el valor resuelto.
// Cuando es rechazada ejecuta la función que tú le pasas en el catch pasándole como argumento el error o valor rechazado.
/* agePromise
  .then((ageRandom) => {
    checkAge(ageRandom)
      .then((message) => console.log(message))
      .catch((err) => {
        console.error(err);
      });
  })
  .catch((err) => {
    console.error(err);
  });
 */
