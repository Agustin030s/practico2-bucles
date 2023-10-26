/*
Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
*/

const nota = parseInt(prompt("Ingrese una nota"));

if (nota < 0 || nota > 10 || nota === NaN) {
  alert("La nota ingresada no es valida");
} else if (nota >= 0 && nota <= 2) {
  alert(`Su nota es ${nota}: Muy Deficiente`);
} else if (nota >= 3 && nota <= 4) {
  alert(`Su nota es ${nota}: Insuficiente`);
} else if (nota >= 5 && nota <= 6) {
  alert(`Su nota es ${nota}: Suficiente`);
} else if (nota === 7) {
  alert(`Su nota es ${nota}: Buena`);
} else if (nota >= 8 && nota <= 9) {
  alert(`Su nota es ${nota}: Notable`);
} else {
  alert(`Su nota es ${nota}: Sobresaliente`);
}
