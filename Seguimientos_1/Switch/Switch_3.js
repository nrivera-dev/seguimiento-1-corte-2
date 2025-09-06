// 3. Sistema de soporte tecnico
function soporteTecnico() {
  let problema = parseInt(prompt("Selecciona el tipo de problema:\n1. Facturación\n2. Problemas técnicos\n3. Ventas\n4. Quejas y sugerencias"));
  let mensaje;
  switch (problema) {
    case 1: mensaje = "Departamento de Facturación - Contacto: facturacion@empresa.com"; break;
    case 2: mensaje = "Departamento Técnico - Contacto: soporte@empresa.com"; break;
    case 3: mensaje = "Departamento de Ventas - Contacto: ventas@empresa.com"; break;
    case 4: mensaje = "Departamento de Quejas - Contacto: quejas@empresa.com"; break;
    default: mensaje = "Opción no válida";
  }
  alert(mensaje);
}
soporteTecnico()