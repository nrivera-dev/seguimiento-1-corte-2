// 5. Selector de tipo de boletas para eventos
function boletasEvento() {
  let tipoBoleta = parseInt(prompt("Selecciona tipo de boleta:\n1. General ($20)\n2. VIP ($50)\n3. Platinum ($100)\n4. Niño ($10)"));
  let mensaje;
  switch (tipoBoleta) {
    case 1: mensaje = "General: $20 - Acceso estandar"; break;
    case 2: mensaje = "VIP: $50 - Acceso preferencial + bebidas"; break;
    case 3: mensaje = "Platinum: $100 - Acceso premium + backstage"; break;
    case 4: mensaje = "Niño: $10 - Acceso para menores de 12 años"; break;
    default: mensaje = "Tipo de boleta invalido";
  }
  alert(mensaje);
}
boletasEvento()