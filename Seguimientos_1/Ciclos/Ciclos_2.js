// 2. Registro de temperaturas diarias
function temperaturasSemana() {
  let dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
  let suma = 0;
  let max = -9999;
  let min = 9999;
  let diaMax = "";
  let diaMin = "";

  for (let i = 0; i < dias.length; i++) {
    let temp = parseFloat(prompt("Temperatura maxima de " + dias[i] + ":"));
    suma += temp;

    if (temp > max) {
      max = temp;
      diaMax = dias[i];
    }
    if (temp < min) {
      min = temp;
      diaMin = dias[i];
    }
  }

  let promedio = suma / dias.length;
  alert("Promedio de la semana: " + promedio.toFixed(2));
  alert("Dia mas caloroso: " + diaMax + " con " + max + "°C");
  alert("Dia mas frio: " + diaMin + " con " + min + "°C");
}
temperaturasSemana()