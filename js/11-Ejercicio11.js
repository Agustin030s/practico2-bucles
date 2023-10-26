/*
Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. 
*/

while (true) {
  let edad1 = parseInt(prompt("Ingrese la primer edad"));
  let nombre1 = prompt("Ingrese el primer nombre");

  let edad2 = parseInt(prompt("Ingrese la segunda edad"));
  let nombre2 = prompt("Ingrese el segundo nombre");

  let edad3 = parseInt(prompt("Ingrese la tercer edad"));
  let nombre3 = prompt("Ingrese el tercer nombre");

  let mayor = Math.max(edad1, edad2, edad3);

  if (nombre1 === null || nombre2 === null || nombre3 === null) {
    alert("Ingrese un nombre válido");
  }

  if (!isNaN(edad1) && !isNaN(edad2) && !isNaN(edad3)) {
    if (mayor === edad1) {
      document.write(
        `<h2 class="ms-4">${nombre1} es el mayor, tiene ${edad1} años.</h2>`
      );
    } else if (mayor === edad2) {
      document.write(
        `<h2 class="ms-4">${nombre2} es el mayor, tiene ${edad2} años.</h2>`
      );
    } else {
      document.write(
        `<h2 class="ms-4">${nombre3} es el mayor, tiene ${edad3} años.</h2>`
      );
    }

    break;
  } else {
    alert("Ingrese una edad valida");
  }
}
