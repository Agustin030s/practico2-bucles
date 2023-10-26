/*
Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/

while (true) {
  const filas = parseInt(prompt("Ingrese el número de filas de la tabla"));
  const columnas = parseInt(
    prompt("Ingrese el número de columnas de la tabla")
  );

  if (!isNaN(filas) && filas > 0) {
    if (!isNaN(columnas) && columnas > 0) {
      let numero = filas * columnas;

      document.write(
        `<h2 class="m-3">Tabla de ${filas} filas y ${columnas} columas.</h2>`
      );
      document.write(`<table class="border border-warning mx-4"><tbody>`);
      for (let i = 1; i <= filas; i++) {
        document.write(`<tr>`);
        for (let j = 1; j <= columnas; j++) {
          document.write(
            `<td class="border border-primary p-2">${numero}</td>`
          );
          numero--;
        }
        document.write(`</tr>`);
      }
      document.write(`</tbody></table>`);

      break;
    } else {
      alert("Ingrese un número válido para las columnas");
    }
  } else {
    alert("Ingrese un número válido para las filas");
  }
}
