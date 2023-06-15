<template>
    <div>
      <br>
      <h2>Tu Carrito</h2>
      <b-table striped hover :items="items"></b-table>
    </div>
</template>
  
<script>
import { CarritoStore } from "@/stores/CarritoStore";


    export default {
      name: 'CarritoLst',
      data: () => ({
        CarritoStore
      }),
    }
</script>