// 3. Simulador de ahorro semanal
function ahorroSemanal() {
  let total = 0, semana = 1;
  while (semana <= 4) {
    let aporte = parseFloat(prompt("Semana " + semana + ": ¿Cuánto vas a ahorrar?"));
    total += aporte;
    semana++;
  }
  alert("Total ahorrado:", total);
}
ahorroSemanal()