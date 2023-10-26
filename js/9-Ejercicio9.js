/*
Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.
*/

for (let i = 1; i <= 500; i++) {
  if (i % 4 === 0 && i % 9 === 0) {
    document.write(`<h2 class="ms-4">${i} (Múltiplo de 4 y 9)</h2>`);
  } else if (i % 4 === 0) {
    document.write(`<h2 class="ms-4">${i} (Múltiplo de 4)</h2>`);
  } else if (i % 9 === 0) {
    document.write(`<h2 class="ms-4">${i} (Múltiplo de 9)</h2>`);
  } else {
    document.write(`<h2 class="ms-4">${i}</h2>`);
  }

  if (i % 5 === 0) {
    document.write("<hr>");
  }
}
