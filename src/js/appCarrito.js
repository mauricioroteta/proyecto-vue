export const appCarrito = {
  carrito: [],

  findById(id) {
    return this.carrito.find((item) => item.id === id);
  },

  
// ------------------------------------------------------------------------------------
  // Agrega articulo al carrito
   agregarArticulo(item) {
    this.carrito.push({
      ...item,
      cantidad: 1,
      qty: Math.floor(item.precio),
    });
  },

  // Quita un articulo del carrito
  removerArticulo(id) {
    const index = this.carrito.findIndex(item => item.id === id)
    this.carrito.splice(index, 1)
  },
// -----------------------------------------------------------------------------------

  // Resta en 1 el contador
  restoCantidadArticulos(id) {
    const enCarrito = this.findById(id);
    if (enCarrito && enCarrito.cantidad > 1) {
      enCarrito.cantidad--;
      enCarrito.qty = enCarrito.precio * enCarrito.cantidad;
    }
  },

  // Suma en 1 el contador
  aumentoCantidadArticulos(id) {
    const enCarrito = this.findById(id);
    if (enCarrito) {
      enCarrito.cantidad++;
      enCarrito.qty = enCarrito.precio * enCarrito.cantidad;
    }
  },

  // Vacia carrito
  vaciarCarrito(){
    this.carrito = []
  },

  // Devuelve la cantidad de un producto
  GetCantProducto(id) {
    const enCarrito = this.findById(id);
    return enCarrito ? enCarrito.cantidad : 0;
  },

  // Devuelve cantidad de productos en general
  getCantProductos() {
    return this.carrito.reduce((total, item) => total + item.cantidad, 0);
  },

  // Devuelve Precio Total
  carritoTotalPrecio() {
    return this.carrito.reduce((total, item) => total + item.qty, 0)
  },

};
