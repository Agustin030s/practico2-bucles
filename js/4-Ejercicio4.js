/*
Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

let resultadoSuma = 0;

let confirmacion = true;

while(confirmacion){
    let numero = prompt("Ingrese un numero");

    if(numero === null){
        break;
    }

    numero = parseInt(numero);

    if(!isNaN(numero)){
        resultadoSuma += numero;
    } else {
        alert("El numero ingresado, no es número valido, ingrese el número nuevamente");
    }

    confirmacion = confirm("Desea ingresar otro número?")
}

document.write(`<h2>La suma total de los números ingresados es: ${resultadoSuma}.</h2>`);