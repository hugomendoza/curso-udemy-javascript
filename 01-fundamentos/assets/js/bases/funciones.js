function saludar(nombre) {
  console.log(arguments);
  console.log("Hola " + nombre);
  return 10;
}

const saludar2 = function ( nombre ) {
  console.log("Hola " + nombre)
}

const retornodeSaludar = saludar("Hugo", 37, false, "Colombia");
console.log({retornodeSaludar});
// saludar2("Hugo");

const saludarFlecha = () => {
  console.log("Hola Flecha")
}

const saludarFlecha2 = (nombre) => {
  console.log("Hola " + nombre)
}

// saludarFlecha()
// saludarFlecha2("Melissa")

function sumar(a, b) {
  return a + b;
}

// const sumar2 = (a, b) => {
//   return a + b;
// }

const sumar2 = (a, b) => a + b;

function getAleatorio() {
  return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2())