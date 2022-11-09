let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 100;
let vidasEnemigo = 100;
let pokes = [];
let optionPokes;
let pcharmander;
let ptotodile;
let ptrecko;
let jugador;
let inputName;
let ataque;
let resultado;
let optionAtaques;
let botonPlacaje;
let botonArañazo;
let botonFuego;
let botonAgua;
let botonHoja;

const contentTwo = document.getElementById("content2");
const btnPoke = document.getElementById("btn");
btnPoke.addEventListener("click", botonPoke);
const seleccionarPokemon = document.getElementById("select-pokemon");
seleccionarPokemon.addEventListener("click", selectPokemon);

pokes.push(charmander, totodile, trecko);

pokes.forEach((Pokemones) => {
  optionPokes = `
   <input type="radio" name="mascotas"   id=${Pokemones.nombre} />
   <label for=${Pokemones.nombre}>
      <img src=${Pokemones.foto} />
      <p>${Pokemones.nombre}</p>
   </label>
   `;
  seleccionarPokemon.innerHTML += optionPokes;

  pcharmander = document.getElementById("charmander");
  ptotodile = document.getElementById("totodile");
  ptrecko = document.getElementById("trecko");
});

function selectPokemon() {
  if (pcharmander.checked) {
    miPke.innerHTML = pcharmander.id;
    jugador = pcharmander.id;
    btnPoke.style.display = 'block'
    seleccionarEnemigo();
  } else if (ptotodile.checked) {
    miPke.innerHTML = ptotodile.id;
    jugador = ptotodile.id;
        btnPoke.style.display = 'block';
    seleccionarEnemigo();
  } else if (ptrecko.checked) {
    miPke.innerHTML = ptrecko.id;
    jugador = ptrecko.id;
        btnPoke.style.display = 'block';
    seleccionarEnemigo();
  }
  extractAttack(jugador);
}

function extractAttack(jugador) {
  for (let i = 0; i < pokes.length; i++) {
    if (jugador === pokes[i].nombre) {
      ataque = pokes[i].ataques;
    }
  }
  mostrarAtaques(ataque);
}

const contenedorAtaques = document.getElementById("contenedor-ataques");

function mostrarAtaques(ataque) {
  ataque.forEach((ataques) => {
    optionAtaques = `
  <button id=${ataques.id} class="boton-de-ataque">${ataques.nombre} </button>
  `;
    contenedorAtaques.innerHTML += optionAtaques;
  });
  botonPlacaje = document.getElementById("boton-placaje");
  botonArañazo = document.getElementById("boton-arañazo");
  botonFuego = document.getElementById("boton-fuego");
  botonAgua = document.getElementById("boton-agua");
  botonHoja = document.getElementById("boton-hoja");
  botonFuego.addEventListener("click", ataqueFuego);
  botonAgua.addEventListener("click", ataqueAgua);
  botonHoja.addEventListener("click", ataqueHoja);
  botonPlacaje.addEventListener("click", ataquePlacaje);
  botonArañazo.addEventListener("click", ataqueArañazo);
}
function ataquePlacaje() {
  ataqueJugador = "placaje";
  ataqueAleatorioEnemigo();
}
function ataqueArañazo() {
  ataqueJugador = "arañazo";
  ataqueAleatorioEnemigo();
}
function ataqueFuego() {
  ataqueJugador = "lanzallamas";
  ataqueAleatorioEnemigo();
}
function ataqueAgua() {
  ataqueJugador = "lanzaAgua";
  ataqueAleatorioEnemigo();
}

function ataqueHoja() {
  ataqueJugador = "HojasNavajas";
  ataqueAleatorioEnemigo();
}

function seleccionarEnemigo() {
  let enAleatorio = aleatorio(0, pokes.length - 1);
  pokeRivall.innerHTML = pokes[enAleatorio].nombre;
  ataqueAleatorioEnemigo();
}
function botonPoke() {

  contentThree.style.display = "block";
  contentTwo.style.display = "none";
}

const contentThree = document.getElementById("content3");
const miPke = document.getElementById("mio");
const pokeRivall = document.getElementById("rival");
const spanVidasJugador = document.getElementById("mivida");
const spanVidasEnemigo = document.getElementById("vidarival");
const sectionMensajes = document.getElementById("msj");
const botonReiniciar = document.getElementById("boton-reiniciar");
const name2 = document.getElementById("name2");
function nameTwo() {
  inputName = document.querySelector(".input-name").value;

  let name = document.createElement("p");
  name.innerHTML = inputName;
  name2.appendChild(name);

}
botonReiniciar.addEventListener("click", reiniciarJuego);

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 5);
  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "placaje";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "arañazo";
  } else if (ataqueAleatorio == 3) {
    ataqueEnemigo = "lanzallamas";
  } else if (ataqueAleatorio == 4) {
    ataqueEnemigo = "lanzaAgua";
  } else {
    ataqueEnemigo = "hojasNavajas";
  }
  combate();
}

function combate() {
  botonReiniciar.style.display = "none";
  if (ataqueEnemigo == ataqueJugador) {
    resultado = "EMPATE";
  } else if (ataqueJugador == "placaje" && ataqueEnemigo == "arañazo") {
    resultado = "perdiste 10 pts";
    vidasJugador - 10;
    spanVidasJugador.innerHTML = vidasJugador;
  } else if (ataqueJugador == "placaje" && ataqueEnemigo == "lanzallanas") {
    resultado = "perdiste 20 pts";
    vidasJugador - 20;
    spanVidasJugador.innerHTML = vidasJugador;
  } else if (ataqueJugador == "arañazo" && ataqueEnemigo == "placaje") {
    resultado = "tu rival perdio 10 pts";
    vidasEnemigo - 10;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "arañazo" && ataqueEnemigo == "lanzallamas") {
    resultado = "perdiste 10 pts";
    vidasJugador - 10;
    spanVidasJugador.innerHTML = vidasJugador;
  } else if (ataqueJugador == "lanzallamas" && ataqueEnemigo == "placaje") {
    resultado = "tu rival perdio 20 pts";
    vidasEnemigo - 20;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "lanzallamas" && ataqueEnemigo == "arañazo") {
    resultado = "tu rival perdio 10 pts";
    vidasEnemigo - 10;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "lanzallamas" && ataqueEnemigo == "lanzaAgua") {
    resultado = "perdistę 30 pts";
    vidasJugador - 30;
    spanVidasJugador.innerHTML = vidasJugador;
  } else if (
    ataqueJugador == "lanzallamas" &&
    ataqueEnemigo == "hojasNavajas"
  ) {
    resultado = "tu rival perdio 30 pts";
    vidasEnemigo - 30;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "lanzaAgua" && ataqueEnemigo == "placaje") {
    resultado = "tu rival perdio 20 pts";
    vidasEnemigo - 20;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "lanzaAgua" && ataqueEnemigo == "arañazo") {
    resultado = "tu rival perdio 10 pts";
    vidasEnemigo - 10;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "hojasNavajas" && ataqueEnemigo == "placaje") {
    resultado = "tu rival perdio 20 pts";
    vidasEnemigo - 20;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "hojasNavajas" && ataqueEnemigo == "arañazo") {
    resultado = "tu rival perdio 10 pts";
    vidasEnemigo - 10;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  }
  revisarVidas();
}
function revisarVidas() {
  if (vidasEnemigo === 0 || vidasJugador === 0) {
    botonReiniciar.style.display = "block";
    // botonPlacaje.disabled = true;
    // botonFuego.disabled = true;
    // botonFuego.disabled = true;
    // botonAgua.disabled = true;
    // botonHoja.disabled = true;
  }
  crearMensaje();
}
function crearMensaje() {
  let parrafo = document.createElement("p");
  parrafo.innerHTML =
    ataqueJugador +
    "/n" +
    "El Pokemon del enemigo atacó con " +
    ataqueEnemigo +
    " " +
    resultado;
  sectionMensajes.appendChild(parrafo);
}
function reiniciarJuego() {
  location.reload();
}
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
