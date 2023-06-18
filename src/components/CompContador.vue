<template>
  <div class="botones">
    <button class="btn btn-danger btn-sm" @click="restar" :disabled="noEnCarrito" >➖️</button>
    <span>{{ cantidad || 1 }}</span>
    <button class="btn btn-success btn-sm" @click="sumar" :disabled="noEnCarrito">➕️</button>
  </div>
</template>

<script>
import { appCarrito } from "@/js/appCarrito";

export default {
  name: "CompContador",

  props: {
    productoId: Number,
  },
  data: () => ({
    appCarrito,
    contador: 1,
  }),

  methods: {
    restar() {
      this.appCarrito.restoCantidad(this.productoId);
    },
    sumar() {
      this.appCarrito.aumentoCantidad(this.productoId);
    },
  },
  computed: {
    noEnCarrito() {
      return !this.appCarrito.findById(this.productoId);
    },
    cantidad() {
      return this.appCarrito.GetCantProducto(this.productoId)
    },
  },
};
</script>

<style scoped>
.botones {
  display: flex;
  flex-direction: row;
  justify-content: space-between
}
</style>