/*
Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
*/
let resultado = "";

do {
  const cadena = prompt("Ingrese una cadena de texto");

  if (cadena === null) {
    break;
  }

  if (resultado.length === 0) {
    resultado += cadena;
  } else {
    resultado += "-" + cadena;
  }
} while (confirm("Desea ingresar otra cadena de texto?"));

document.write(`<h2>La frase completa es: ${resultado} </h2>`);
