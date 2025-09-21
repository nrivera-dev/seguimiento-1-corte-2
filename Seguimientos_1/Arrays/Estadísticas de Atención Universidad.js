const atenciones = [];

function registrarAtencion(cedula, tipoModulo, tipoAsesoria = null) {
  atenciones.push({ cedula, tipoModulo, tipoAsesoria });
}

function estadisticas() {
  console.log("Total usuarios atendidos:", atenciones.length);
  let porTipo = atenciones.reduce((acc, a) => {
    let key = a.tipoModulo + (a.tipoAsesoria ? "-" + a.tipoAsesoria : "");
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  console.log("Usuarios por tipo:", porTipo);
}

// Ejemplo
registrarAtencion("123", "llamada");
registrarAtencion("124", "asesoria", "estudiante");
registrarAtencion("125", "asesoria", "directivo");
estadisticas();
