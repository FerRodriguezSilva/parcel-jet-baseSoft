import sumar from "./sumador";
import multiplicar from "./Multiplicador"

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

// Elementos del formulario de multiplicar
const firstMultiply = document.querySelector("#primer-numero-multiplicar");
const secondMultiply = document.querySelector("#segundo-numero-multiplicar");
const formMultiplicar = document.querySelector("#multiplicar-form");
const divMultiplicar = document.querySelector("#resultado-multiplicar");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
 
});

formMultiplicar.addEventListener("submit", (event)=>{
  event.preventDefault();
  const firstNumber= Number.parseInt(firstMultiply.value);
  const secondNumber= Number.parseInt(secondMultiply.value);
   divMultiplicar.innerHTML="<p>"+multiplicar(firstNumber,secondNumber)+"<p>";
})