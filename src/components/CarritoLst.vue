<template>
    <div>
      <br>
      <h2>Tu Carrito</h2>
      <b-table striped hover :items="items"></b-table>
    </div>
</template>
  
<script>
    export default {
      name: 'CarritoLst',
      data() {
        return {
        items: [
          { Producto: "Producto 1", Unidades: 1, CostoUnitario: 4, Total: 8 },
          { Producto: "Producto 2", Unidades: 1, CostoUnitario: 4, Total: 8 },
        ]}
        }
    }
</script>