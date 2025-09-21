const productos = [
  { nombre: "Camisa", precio: 30000, stock: 10 },
  { nombre: "Pantalón", precio: 50000, stock: 5 }
];

let carrito = [];

function agregarAlCarrito(nombre, cantidad) {
  let producto = productos.find(p => p.nombre === nombre);
  if (!producto || producto.stock < cantidad) {
    console.log("No hay suficiente stock.");
    return;
  }
  producto.stock -= cantidad;
  carrito.push({ nombre, cantidad, subtotal: cantidad * producto.precio });
  console.log(`${cantidad} ${nombre} agregado(s) al carrito.`);
}

function mostrarCarrito() {
  console.log("Carrito actual:", carrito);
}

function totalCompra() {
  let total = carrito.reduce((acc, p) => acc + p.subtotal, 0);
  console.log(`Total de la compra: ${total}`);
}

// Ejemplo
agregarAlCarrito("Camisa", 2);
mostrarCarrito();
totalCompra();
