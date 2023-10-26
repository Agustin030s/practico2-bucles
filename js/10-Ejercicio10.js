/*
Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/

while (true) {
  let filas = parseInt(prompt("Ingrese el número de filas de la tabla"));
  let columnas = parseInt(prompt("Ingrese el número de columnas de la tabla"));

  if (!isNaN(filas) && filas > 0) {
    if (!isNaN(columnas) && columnas > 0) {
      let numero = filas * columnas;

      for (let i = 1; i <= filas; i++) {
        let fila = "";
        for (let j = 1; j <= columnas; j++) {
          fila += numero + "\t";
          numero--;
        }

        console.log(fila);
        document.write(`<h2 class="ms-4">${fila}</h2>`);
      }

      break;
    } else {
      alert("Ingrese un número válido para las columnas");
    }
  } else {
    alert("Ingrese un número válido para las filas");
  }
}
