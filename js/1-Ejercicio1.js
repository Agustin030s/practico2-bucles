/*
Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/ 

let edad = parseInt(prompt("Ingrese una edad"));

if(edad > 100){
    alert("La edad ingresada no es un número valido");
} else if (edad >= 18){
    alert("Ya puede conducir");
} else{
    alert("Aún no puede conducir");
}