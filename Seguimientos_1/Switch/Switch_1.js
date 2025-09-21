function recompensasPorNivel() {
  let nivel = parseInt(prompt("Ingresa tu nivel actual (1-5):"));
  let mensaje;
  switch (nivel) {
    case 1: mensaje = "Recompensa: 100 monedas"; break;
    case 2: mensaje = "Recompensa: 200 monedas y 1 poción"; break;
    case 3: mensaje = "Recompensa: 300 monedas y 2 pociones"; break;
    case 4: mensaje = "Recompensa: 400 monedas y 1 arma especial"; break;
    case 5: mensaje = "Recompensa: 500 monedas y 1 armadura épica"; break;
    default: mensaje = "Nivel inválido";
  }
  alert(mensaje);
}
recompensasPorNivel()