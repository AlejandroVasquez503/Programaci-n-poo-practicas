class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombrenombre = nombre;
  }

  get precio() {
    return this._precio;
  }

  set precio(precio) {
    this._precio = precio;
  }

  get cantidad() {
    return this._cantidad;
  }

  set cantidad(cantidad) {
    this._cantidad = cantidad;
  }

  mostrarProducto() {
    console.log(`${this.nombre} - $${this.precio} - Disponibles: ${this.cantidad}`);
  }
}

class Electronico extends Producto {
  constructor(nombre, precio, cantidad, tipo) {
    super(nombre, precio, cantidad);
    this.tipo = tipo;
  }

  get tipo() {
    return this._tipo;
  }

  set tipo(tipo) {
    this._tipo = tipo;
  }

  mostrarElectronico() {
    console.log(`${this.nombre} - Marca: ${this.tipo} - $${this.precio} - Disponibles: ${this.cantidad}`);
  }
}

class Cliente {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    this._email = email;
  }
}

const tvSamsung = new Electronico("TV", 799.99, 10, "Samsung");
const laptopHP = new Electronico("Laptop", 649.99, 15, "HP");
const smartphoneApple = new Electronico("Smartphone", 999.99, 20, "Apple");

tvSamsung.mostrarElectronico();
laptopHP.mostrarElectronico();
smartphoneApple.mostrarElectronico();

function mostrarFormulario() {
  const formulario = document.getElementById("formulario-pedido");
  formulario.style.display = "block";
}

function hacerPedido() {
  const productoSeleccionado = document.getElementById("producto").value;
  const cantidad = parseInt(document.getElementById("cantidad").value);

  let producto;
  if (productoSeleccionado === "tv") {
    producto = tv;
  } else if (productoSeleccionado === "laptopHP") {
    producto = laptopHP;
  } else if (productoSeleccionado === "smartphone") {
    producto = smartphone;
  }

  if (!producto) {
    alert("Selecciona un producto válido.");
    return;
  }

  if (cantidad > producto.cantidad) {
    alert("No hay suficientes unidades disponibles.");
    return;
  }

  producto.cantidad -= cantidad;
  alert(`Pedido realizado por ${cantidad} unidades de ${producto.nombre}`);

  const formulario = document.getElementById("formulario-pedido");
  formulario.style.display = "none";
}

mostrarFormulario();
