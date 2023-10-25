/*
Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

let texto = prompt("Ingrese un texto");
let textoAlReves = "";

for(let i = texto.length; i >= 0; i--){
    textoAlReves += texto.charAt(i);
}

document.write(`<h2 class="ms-4">${textoAlReves}</h2>`);