let citas = [];

function programarCita(nombrePaciente, fecha, hora, medico) {
  citas.push({ nombrePaciente, fecha, hora, medico });
  console.log("Cita programada con éxito.");
}

function verCitas() {
  let ordenadas = citas.sort((a, b) => (a.fecha + a.hora).localeCompare(b.fecha + b.hora));
  console.log("Citas programadas:", ordenadas);
}

function cancelarCita(nombrePaciente, fecha, hora) {
  citas = citas.filter(c => !(c.nombrePaciente === nombrePaciente && c.fecha === fecha && c.hora === hora));
  console.log("Cita cancelada.");
}

// Ejemplo
programarCita("Juan", "2025-09-22", "10:00", "Dr. Pérez");
programarCita("Ana", "2025-09-21", "09:00", "Dra. Gómez");
verCitas();
cancelarCita("Ana", "2025-09-21", "09:00");
verCitas();
