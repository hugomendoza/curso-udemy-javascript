const fher = {
  nombre: "Fernando",
  edad: 30,
}

const pedro = {
  nombre: "Pedro",
  edad: 15
}

// const mellisa = {
//   nombre: "Mellisa",
//   edad: 35
// }

// fher.imprimir();
function Persona(nombre, edad) {
  console.log("Se ejecutó esta línea");
  this.nombre = nombre;
  this.edad = edad;
  this.imprimir = function () {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
  }
}

const maria = new Persona("Maria", 18);
const melissa = new Persona("Melissa", 35);
// console.log(maria);
maria.imprimir();
melissa.imprimir();