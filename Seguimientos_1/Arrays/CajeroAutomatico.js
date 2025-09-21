// Datos simulados del banco
const clientes = [
  {
    documento: "123456",
    pin: "1234",
    cuentas: [
      { numero: "001", saldo: 500000 },
      { numero: "002", saldo: 1000000 }
    ]
  }
];

function validarCliente(documento, pin) {
  return clientes.find(c => c.documento === documento && c.pin === pin);
}

function retirar(cliente, cuentaNumero, monto) {
  let cuenta = cliente.cuentas.find(c => c.numero === cuentaNumero);
  if (monto % 50000 !== 0) {
    console.log("Monto inválido. Debe ser múltiplo de 50000");
    return;
  }
  if (cuenta.saldo >= monto) {
    cuenta.saldo -= monto;
    console.log(`Retiro exitoso. Puede tomar ${monto} de la bandeja.`);
  } else {
    console.log("Saldo insuficiente.");
  }
}

function depositar(cliente, cuentaNumero, monto, tipo) {
  let cuenta = cliente.cuentas.find(c => c.numero === cuentaNumero);
  cuenta.saldo += monto;
  console.log(`Depósito de ${monto} (${tipo}) realizado con éxito.`);
}

function transferir(cliente, cuentaOrigen, cuentaDestino, monto) {
  let origen = cliente.cuentas.find(c => c.numero === cuentaOrigen);
  let destino = cliente.cuentas.find(c => c.numero === cuentaDestino);
  if (origen.saldo >= monto) {
    origen.saldo -= monto;
    destino.saldo += monto;
    console.log(`Transferencia de ${monto} realizada con éxito.`);
  } else {
    console.log("Saldo insuficiente para transferir.");
  }
}

function consultarSaldo(cliente, cuentaNumero) {
  let cuenta = cliente.cuentas.find(c => c.numero === cuentaNumero);
  console.log(`Saldo actual en cuenta ${cuenta.numero}: ${cuenta.saldo}`);
}

// Simulación
let intentos = 0;
let usuario;
while (intentos < 3 && !usuario) {
  let doc = prompt("Ingrese su documento");
  let pin = prompt("Ingrese su pin");
  usuario = validarCliente(doc, pin);
  if (!usuario) {
    console.log("Datos incorrectos");
    intentos++;
  }
}

if (usuario) {
  // menú simple
  let opcion;
  do {
    opcion = prompt("1-Retirar 2-Depositar 3-Transferir 4-Consultar saldo 5-Salir");
    switch (opcion) {
      case "1":
        retirar(usuario, "001", parseInt(prompt("Monto a retirar")));
        break;
      case "2":
        depositar(usuario, "001", parseInt(prompt("Monto a depositar")), prompt("Tipo: efectivo o cheque"));
        break;
      case "3":
        transferir(usuario, "001", "002", parseInt(prompt("Monto a transferir")));
        break;
      case "4":
        consultarSaldo(usuario, "001");
        break;
    }
  } while (opcion !== "5");
} else {
  console.log("Se excedieron los intentos");
}
