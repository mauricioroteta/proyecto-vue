<template>
  <div class="botones">
    <button class="btn btn-sm" @click="restar" :disabled="noEnCarrito" ><b-icon icon="caret-down-fill"></b-icon></button>
    <span>{{ cantidad || 1 }}</span>
    <button class="btn btn-sm" @click="sumar" :disabled="noEnCarrito"><b-icon icon="caret-up-fill"></b-icon></button>
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
      this.appCarrito.restoCantidadArticulos(this.productoId);
    },
    sumar() {
      this.appCarrito.aumentoCantidadArticulos(this.productoId);
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