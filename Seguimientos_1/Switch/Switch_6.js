// 6. Sistema de planes de internet
function planesInternet() {
  let plan = parseInt(prompt("Selecciona tu plan de internet:\n1. Básico (10MB - $15)\n2. Intermedio (50MB - $30)\n3. Premium (100MB - $50)"));
  let mensaje;
  switch (plan) {
    case 1: mensaje = "Plan Basico: 10MB por $15"; break;
    case 2: mensaje = "Plan Intermedio: 50MB por $30"; break;
    case 3: mensaje = "Plan Premium: 100MB por $50"; break;
    default: mensaje = "Plan no valido";
  }
  alert(mensaje);
}
planesInternet()