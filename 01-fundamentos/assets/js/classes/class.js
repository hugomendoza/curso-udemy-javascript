class Persona{

  static _conteo = 0;

  static get getConteo () {
    return Persona._conteo + " instancias";
  }

  static mensaje() {
    console.log(this.nombre);
    console.log("Soy un método stático");
  }
  
  nombre = "";
  codigo = "";
  frase = "";
  comida = "";
  
  constructor(nombre = "Sin nombre", codigo = "Sin código", frase = "Sin frase") {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++;
  }

  set setComidaFavorita( comida ) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y  mi identidad es ${ this.codigo }`)
  }
  miFrase() {
    this.quienSoy();
    console.log(`${this.codigo} dice: ${ this.frase }`)
  }
}

const spiderman = new Persona("Peter Paker", "Spiderman", "Soy tu amigo");
const ironman = new Persona("Tony Stark", "Ironman", "Soy Ironman");


// console.log(spiderman);
// console.log(ironman);

spiderman.miFrase();
// ironman.miFrase();
spiderman.setComidaFavorita = "Pie de cereza";

// console.log(spiderman.getComidaFavorita)
// console.log(spiderman);

// Persona._conteo = 2;
console.log("Conteo stático", Persona._conteo);
console.log(Persona.getConteo);

Persona.mensaje();

Persona.propiedadExterna = "Hola Mundo";

console.log(Persona.propiedadExterna);
console.log(Persona);

