// 7. Control de Inventario
function controlInventario() {
  let producto;
  let totalVendido = 0;
  while (true) {
    producto = prompt("Ingresa producto vendido (escribe 'terminar' para finalizar):");
    if (producto === "terminar") break;
    totalVendido++;
  }
  alert("Total de productos vendidos: " + totalVendido);
}
controlInventario()