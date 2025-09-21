const reservas = [];
const capacidadHabitaciones = {
  individual: 2,
  doble: 4,
  familiar: 6
};

function reservar(nombre, pais, tipoHabitacion, numPersonas, periodo, mascota) {
  if (numPersonas > capacidadHabitaciones[tipoHabitacion]) {
    console.log("Excede la capacidad de la habitación.");
    return;
  }
  if (mascota && tipoHabitacion !== "familiar") {
    console.log("Las mascotas solo se aceptan en habitaciones familiares.");
    return;
  }
  reservas.push({ nombre, pais, tipoHabitacion, numPersonas, periodo, mascota });
  console.log("Reserva registrada.");
}

function totalReservas() {
  console.log(`El hotel tiene ${reservas.length} reservas.`);
}

// Ejemplo
reservar("Juan", "Colombia", "familiar", 5, "10-15 mayo", true);
reservar("Ana", "México", "individual", 2, "1-5 junio", false);
totalReservas();
