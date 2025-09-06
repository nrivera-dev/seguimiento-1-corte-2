// 6. Simulador de Cajero Automatico
function cajeroAutomatico() {
  let saldo = 1000; // saldo inicial
  let opcion;
  do {
    opcion = parseInt(prompt("Selecciona operacion:\n1. Consultar saldo\n2. Retirar\n3. Depositar\n4. Salir"));
    switch (opcion) {
      case 1:
        alert("Saldo actual: $" + saldo);
        break;
      case 2:
        let retiro = parseFloat(prompt("Cuanto deseas retirar?"));
        if (retiro <= saldo) {
          saldo -= retiro;
          alert("Retiro exitoso. Nuevo saldo: $" + saldo);
        } else {
          alert("Fondos insuficientes.");
        }
        break;
      case 3:
        let deposito = parseFloat(prompt("Cuanto deseas depositar?"));
        saldo += deposito;
        alert("Deposito exitoso. Nuevo saldo: $" + saldo);
        break;
      case 4:
        alert("Saliendo del cajero...");
        break;
      default:
        alert("Opcion invalida");
    }
  } while (opcion !== 4);
}
cajeroAutomatico()