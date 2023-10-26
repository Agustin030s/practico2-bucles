/*
Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. 
*/

while (true) {
  let primerEdad = parseInt(prompt("Ingrese la primer edad"));
  let primerNombre = prompt("Ingrese el primer nombre");

  let segundaEdad = parseInt(prompt("Ingrese la segunda edad"));
  let segundoNombre = prompt("Ingrese el segundo nombre");

  let tercerEdad = parseInt(prompt("Ingrese la tercer edad"));
  let tercerNombre = prompt("Ingrese el tercer nombre");

  let mayor = Math.max(primerEdad, segundaEdad, tercerEdad);

  if (primerNombre === null || segundoNombre === null || tercerNombre === null) {
    alert("Ingrese un nombre válido");
  }

  if (!isNaN(primerEdad) && !isNaN(segundaEdad) && !isNaN(tercerEdad)) {
    if (mayor === primerEdad) {
      document.write(
        `<h2 class="ms-4">${primerNombre} es el mayor, tiene ${primerEdad} años.</h2>`
      );
    } else if (mayor === segundaEdad) {
      document.write(
        `<h2 class="ms-4">${segundoNombre} es el mayor, tiene ${segundaEdad} años.</h2>`
      );
    } else {
      document.write(
        `<h2 class="ms-4">${tercerNombre} es el mayor, tiene ${tercerEdad} años.</h2>`
      );
    }

    break;
  } else {
    alert("Ingrese una edad valida");
  }
}
