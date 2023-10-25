/*
Realiza un script que cuente el número de vocales que tiene un texto.
*/

let texto = prompt("Ingrese un texto");
let contador = 0;

for (let i = 1; i <= texto.length; i++) {
  if (
    texto.charAt(i) === "a" ||
    texto.charAt(i) === "e" ||
    texto.charAt(i) === "i" ||
    texto.charAt(i) === "o" ||
    texto.charAt(i) === "u"
  ) {
    contador++
  }
}

document.write(`<h2 class="ms-4">El texto ingresado tiene ${contador} vocales.</h2>`);
