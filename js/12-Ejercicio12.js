/*
Realiza un script que genere un número aleatorio entre 1 y 99
*/

//Math.floor --> redondea hacia abajo
//Math.random --> genera números aleatorios entre 0 y 1

const numAleatorio = Math.floor(Math.random()*99);

document.write(`<h2 class="ms-4">Número aleatorio generado: ${numAleatorio}</h2>`);