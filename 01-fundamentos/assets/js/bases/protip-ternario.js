const elMayor = (a, b) => (a > b) ? a : b;

const tieneMemresia = (miembro) => miembro ? "2 Dólares" : "10 Dólares";


console.log(elMayor(20, 15));
console.log(tieneMemresia(false));

const amigo = false;
const amigosArr = [
  "Peter",
  "Tony",
  "Dr. Strange",
  amigo ? "Thor" : "Loki"
]

console.log(amigosArr);

const nota = 82.5;
const grado = nota >= 95 ? "A+" :
              nota >= 95 ? "A" :
              nota >= 85 ? "B+" :
              nota >= 80 ? "B" :
              nota >= 75 ? "C+" :
              nota >= 70 ? "C" : "F";

console.log({ nota, grado });