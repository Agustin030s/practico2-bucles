/*
Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 
*/

while(true){

    let numero = parseInt(prompt("Ingrese un número"));

    if(!isNaN(numero) && (numero > 0 && numero <= 50)){

        for(let i = 1; i <= numero; i++){
        
            let linea = "";
            for(let j = 1; j <= i; j++){
                linea += j;
            }
        
            document.write(`<h2 class="ms-4">${linea}</h2>`);
        }

        break;
    } else{
        alert("Ingrese un número válido");
    }
}