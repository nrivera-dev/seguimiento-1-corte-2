// 8. Sistema de Reservas
function sistemaReservas() {
  let mesasReservadas = 0;
  for (let mesa = 1; mesa <= 5; mesa++) {
    let reservada = prompt("Esta reservada la mesa " + mesa + "? (si/no)");
    if (reservada.toLowerCase() === "si") {
      mesasReservadas++;
    }
  }
  let disponibles = 5 - mesasReservadas;
  alert("Mesas reservadas: " + mesasReservadas);
  alert("Mesas disponibles: " + disponibles);
}
sistemaReservas()