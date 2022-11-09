const contentOne = document.getElementById("content1");
const btnStart = document.getElementById("start");
btnStart.addEventListener("click", botonStart);

function botonStart() {
  cName.style.display = "blok";
  contentOne.style.display = "none";
  contentTwo.style.display = "none";
  contentThree.style.display = "none";
  btnNext.style.display = "none";
}
const cName = document.getElementById("content1-2");

const formName = document.getElementById("form-name");
formName.addEventListener("submit", (e) => {
  e.preventDefault();
  const yourName = document.getElementById('saludo');

  inputName = document.querySelector(".input-name").value;
  let name = document.createElement("p");
  name.innerHTML = "Bienvenid@ " +
  inputName;
  yourName.appendChild(name);
  btnNext.style.display = 'block'

  nameTwo()
});
const btnNext = document.getElementById("btn-next");
btnNext.addEventListener("click", next);

function next() {
  cName.style.display = "none";
  contentTwo.style.display = "flex";
  btnPoke.style.display = "none";
}
