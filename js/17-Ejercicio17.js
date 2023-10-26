/*
Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
*/

let texto = prompt("Ingrese un texto");
texto = texto.toLowerCase();

let posición = 0;

for (let i = 0; i <= texto.length; i++) {
  if (
    texto.charAt(i) === "a" ||
    texto.charAt(i) === "e" ||
    texto.charAt(i) === "i" ||
    texto.charAt(i) === "o" ||
    texto.charAt(i) === "u"
  ) {
    posición = i;
    document.write(
      `<h2 class="ms-4">La vocal "${texto.charAt(
        i
      )}" está en la posición ${i}</h2>`
    );
    break;
  }
}
