const regresaTrue = () => {
  console.log("Regresa true");
  return true;
}

const regresaFalse = () => {
  console.log("Regresa false");
  return false;
}

console.warn("Not o la negación");
console.log(true);
console.log( !true );
console.log(!false);

console.log("Asignaciones");
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && "Hola Mundo" && 150;
const a2 = "Hola" && "Mundo" && soyFalso;
const a3 = soyFalso || "Ya no soy falso";
const a4 = soyFalso || soyUndefined || soyNull || "Ya no soy falso de nuevo" || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || "Ya no soy falso de nuevo" || true;

console.log({a1, a2, a3, a4, a5});