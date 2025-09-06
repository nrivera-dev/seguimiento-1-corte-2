function programaLavado() {
  let programa = parseInt(prompt("Selecciona programa de lavado:\n1. Rápido (30min - $5)\n2. Normal (45min - $7)\n3. Pesado (60min - $10)\n4. Delicado (40min - $8)"));
  let mensaje;
  switch (programa) {
    case 1: mensaje = "Rápido (30min - $5)"; break;
    case 2: mensaje = "Normal (45min - $7)"; break;
    case 3: mensaje = "Pesado (60min - $10)"; break;
    case 4: mensaje = "Delicado (40min - $8)"; break;
    default: mensaje = "Opción no válida";
  }
  alert(mensaje);
}
programaLavado()