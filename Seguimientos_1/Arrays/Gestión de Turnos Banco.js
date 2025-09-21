let cola = [];
let contador = 0;

function tomarTurno() {
  contador++;
  cola.push(contador);
  console.log(`Turno tomado: ${contador}`);
}

function llamarCliente() {
  if (cola.length === 0) {
    console.log("No hay clientes en la cola.");
  } else {
    let turno = cola.shift();
    console.log(`Llamando al turno: ${turno}`);
  }
}

function mostrarCola() {
  console.log("Cola actual:", cola);
}

function mostrarContador() {
  console.log(`Total turnos tomados: ${contador}`);
}

// Ejemplo
tomarTurno();
tomarTurno();
mostrarCola();
llamarCliente();
mostrarContador();
