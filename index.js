const input = document.getElementById("guess-input");
const valor = input.value;
const grid = document.getElementById("grid");
const colores = {
  verde: "green",
  amarrillo: "rgb(247, 230, 98)",
  gris: "rgb(224, 224, 224)",
};
let intentos = 6;
let palabra = "APPLE";

window.addEventListener("load", init);

function init() {
  crearTablero();
}

const button = document.getElementById("guess-button");

button.addEventListener("click", intentar);

function crearTablero() {
  for (let j = 0; j < 6; j++) {
    for (let i = 0; i < 5; i++) {
      const square = document.createElement("div");
      square.className = "square";
      grid.appendChild(square);
    }
  }
}

function intentar() {
  const casillas = document.querySelectorAll(".square");
  const INTENTO = leerIntento();
  if (INTENTO === palabra) {
    console.log("GANASTE!");
    return;
  }
  for (let i in palabra) {
    if (INTENTO[i] === palabra[i]) {
      console.log(INTENTO[i], "VERDE");
      const contenedorLetra = document.createElement("div");
      contenedorLetra.className = "letter-container";
      contenedorLetra.style.backgroundColor = colores.verde;
      contenedorLetra.innerHTML = INTENTO[i];
      casillas[i].appendChild(contenedorLetra);
    } else if (palabra.includes(INTENTO[i])) {
      console.log(INTENTO[i], "AMARILLO");
      const contenedorLetra = document.createElement("div");
      contenedorLetra.className = "letter-container";
      contenedorLetra.style.backgroundColor = colores.amarrillo;
      contenedorLetra.innerHTML = INTENTO[i];
      casillas[i].appendChild(contenedorLetra);
    } else {
      console.log(INTENTO[i], "GRIS");
      const contenedorLetra = document.createElement("div");
      contenedorLetra.className = "letter-container";
      contenedorLetra.style.backgroundColor = colores.gris;
      contenedorLetra.innerHTML = INTENTO[i];
      casillas[i].appendChild(contenedorLetra);
    }
  }
  intentos--;

  if (intentos == 0) {
    console.log("PERDISTE!");
  }
}
function leerIntento() {
  let intento = document.getElementById("guess-input");
  intento = intento.value;
  intento = intento.toUpperCase();
  return intento;
}

function insertarLetra(letra, color) {}
