"use strict";

const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

function dniValidation(dni) {
  try {
    if (dni.length !== 10) {
      throw new Error("El DNI debe tener 10 caracteres.");
    }

    const dniParts = dni.split("-");
    if (dniParts.length !== 2) {
      throw new Error("El DNI debe tener 2 partes separadas por un guión.");
    }

    const dniNumbers = dniParts[0];

    if (!is8DigitNumber(dniNumbers)) {
      throw new Error("Los primeros ocho dígitos tienen que ser números.");
    }

    const givenLetter = dniParts[1];
    if (!isLastDigitALetter(givenLetter)) {
      throw new Error("El último dígito tiene que ser una letra.");
    }

    const position = +dniNumbers % 23;
    let expectedLetter = letras[position];

    if (givenLetter.toLocaleUpperCase() !== expectedLetter) {
      throw new Error("La letra no es correcta.");
    }

    /*    if (givenLetter.toLocaleUpperCase() !== computeLetter(expectedLetter)) {
      throw new Error("La letra no es correcta.");
    } */

    console.log("El DNI es válido.");
  } catch (err) {
    // La variable err podemos usar cualquier nombre para ella.
    // Cuando se produce un error, JavaScript genera un objeto que contiene los detalles al respecto.
    // El objeto se pasa como argumento para catch.
    console.error("Se ha producido un error: " + err.message);
  }
}

function is8DigitNumber(value) {
  if (value.length !== 8) {
    return false;
  }

  if (typeof +value !== "number") {
    return false;
  }

  return true;
}

function isLastDigitALetter(value) {
  if (value.length !== 1) {
    return false;
  }

  if (typeof value !== "string") {
    return false;
  }

  return true;
}

// function computeLetter(dniNumber) {
//   const position = +dniNumber % 23;
//   const expectedLetter = letras[position];

//   return expectedLetter;
// }

console.log(dniValidation("76926426-m"));
