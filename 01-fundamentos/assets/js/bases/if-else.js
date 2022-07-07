const hoy = new Date();
let dia = hoy.getDay();

const diaLetrasObjeto = {
  0: "domingo",
  1: "lunes",
  2: "martes",
  3: "miércoles",
  4: "jueves",
  5: "viernes",
  6: "sábado"
}

const diaLetrasArreglo = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

console.log(diaLetrasObjeto[dia]);
console.log(diaLetrasArreglo[dia]);