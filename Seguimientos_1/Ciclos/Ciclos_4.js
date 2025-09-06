// 4. Sistema de intentos de login
function login() {
  const PASS_CORRECTA = "seguro123";
  let intentos = 0, acceso = false;
  do {
    let intento = prompt("Ingresa tu contraseña:");
    if (intento === PASS_CORRECTA) {
      acceso = true;
      break;
    }
    intentos++;
  } while (intentos < 3);
  alert(acceso ? "Acceso permitido" : "Acceso bloqueado");
}
login()