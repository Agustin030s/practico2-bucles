/*
Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
*/

const texto = prompt("Ingrese un texto");
let result = "";

for (let i = 0; i < texto.length; i++) {
  if(result.length === 0){
    result += texto.charAt(i)
  }else{
    result += "-" + texto.charAt(i);
  }
}

document.write(`<h2 class="ms-4">${result}</h2>`);
