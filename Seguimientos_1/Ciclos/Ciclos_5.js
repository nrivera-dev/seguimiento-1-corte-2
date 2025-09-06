// 5. Calculadora de Promedio de Calificaciones
function promedioCalificaciones() {
  let cantidad = parseInt(prompt("Cuantas asignaturas tienes?"));
  let suma = 0;
  for (let i = 1; i <= cantidad; i++) {
    let nota = parseFloat(prompt("Ingresa la nota de la asignatura " + i + ":"));
    suma += nota;
  }
  let promedio = suma / cantidad;
  alert("Promedio final: " + promedio.toFixed(2));
}
promedioCalificaciones()