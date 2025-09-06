// 4. Sistema de descuentos por dia de la semana
function descuentosPorDia() {
  let dia = parseInt(prompt("Ingresa el día (1: Lunes, 2: Martes, 3: Miércoles, 4: Jueves, 5: Viernes, 6: Sábado, 7: Domingo):"));
  let mensaje;
  switch (dia) {
    case 1: mensaje = "Lunes: 10% de descuento"; break;
    case 3: mensaje = "Miércoles: 15% de descuento"; break;
    case 5: mensaje = "Viernes: 20% de descuento"; break;
    default: mensaje = "Hoy no hay descuentos"; 
  }
  alert(mensaje);
}
descuentosPorDia()