/*
Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
*/

let confirmacion = true;
let resultado = "";

while (confirmacion) {
  let cadena = prompt("Ingrese una cadena de texto");

  if (cadena === null) {
    break;
  }

  resultado += cadena + "-";

  confirmacion = confirm("desea ingresar otra cadena de texto?");
}

document.write(`<h2> ${resultado} </h2>`);
