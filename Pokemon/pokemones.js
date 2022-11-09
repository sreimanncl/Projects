
class Pokemones {
    constructor(nombre, foto) {  
      this.nombre = nombre;
      this.foto = foto;
      this.ataques = [];
    }
  }
  let charmander = new Pokemones('charmander', './img/charmander.png');
  let totodile = new Pokemones("totodile", "./img/totodile.png");
  let trecko = new Pokemones("trecko", "./img/trecko.png");
  
  pcharmander = document.getElementById("charmander");
  ptotodile = document.getElementById("totodile");
  ptrecko = document.getElementById("trecko");

  charmander.ataques.push(
    { nombre: "placaje", id: "boton-placaje" },
    { nombre: "arañazo", id: "boton-arañazo" },
    { nombre: "lanzallamas", id: "boton-fuego" }
  );
  totodile.ataques.push(
    { nombre: "placaje", id: "boton-placaje" },
    { nombre: "arañazo", id: "boton-arañazo" },
    { nombre: "lanzaAgua ", id: "boton-agua" }
  );
  trecko.ataques.push(
    { nombre: "placaje", id: "boton-placaje" },
    { nombre: "arañazo", id: "boton-arañazo" },
    { nombre: "hojasNavajas", id: "boton-hoja" }
  );
  