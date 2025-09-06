// 1. Encuesta de satisfaccion
function encuestaSatisfaccion() {
  let total = 0;
  for (let i = 1; i <= 10; i++) {
    let calificacion = parseInt(prompt("Cliente " + i + ": Califica (1-5):"));
    total += calificacion;
  }
  alert("Promedio de satisfacción:", (total / 10).toFixed(2));
}
encuestaSatisfaccion()