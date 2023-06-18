<template>
  <div class="card shadow p-3 mb-5 bg-white rounded">
    <img :src="item.imagen" class="card-img-top" :alt="item.nombre" />
    <div class="card-body" >
      <h5 class="card-title">{{ item.nombre }}</h5>
      <p class="card-text">{{ item.descripcion }}</p>
      <h5 class="precio">$ {{ formatNumber(item.precio, 2, 1) }}</h5>
    </div>
    <footer>
        
      <button @click="agregarAlCarrito" :disabled="agregado" :enabled="agregado" :class="btnColor" class="btn btn-success">
        {{ agregado ? "Quitar" : "Agregar" }}
      </button>
    </footer>
  </div>
</template>



<script>
import CompContador from "./CompContador.vue";
import { appCarrito } from "@/js/appCarrito";

export default {
  name: "CompCard",
  components: { CompContador},
  props: {
    item: {
      id: Number,
      nombre: String,
      descripcion: String,
      precio: Number,
      imagen: String,
    },
  },
  data: () => ({
    appCarrito,
    CompContador,
  }),
  computed: {
    agregado() {
      return this.appCarrito.findById(this.item.id);
    },
    btnColor() {
      return this.agregado ? "btn btn-secondary" : "btn btn-primary";
    },
  },

  methods: {
    agregarAlCarrito() {
      this.appCarrito.agregarAlCarrito(this.item);
    },
    formatNumber(floatValue = 0, decimals = 0, multiplier = 1) {
    let floatMultiplied = floatValue * multiplier;
    let stringFloat = floatMultiplied + "";
    let arraySplitFloat = stringFloat.split(".");
    let decimalsValue = "0";
    if (arraySplitFloat.length > 1) {
        decimalsValue = arraySplitFloat[1].slice(0, decimals);
    }
    let integerValue = arraySplitFloat[0];
    let arrayFullStringValue = [integerValue, decimalsValue];
    let FullStringValue = arrayFullStringValue.join(".")
    let floatFullValue = parseFloat(FullStringValue) + "";
    let formatFloatFullValue = new Intl.NumberFormat('es-ES', { minimumFractionDigits: decimals }).format(floatFullValue);
    return formatFloatFullValue;
  },
  },
};
</script>

<style scoped>
.card-img-top {
  width: auto;
  margin: 2rem 1rem;
  object-fit: cover;
}

.precio, .card-title, .card-title {
  text-align: center;
}
.card {
  position: relative;
  margin: 2rem 1rem;
  width: 25rem;
  height: 40rem;
  border-radius: 1rem;
  
}

.card-text {
  position: relative;
  font-size: 1rem;
  top: 30%;
}
.card-title{
  position: relative;
  top: 30%;
}

.card-body {
  display: flex;
  flex-direction: column;
  align-content: center;
}

footer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
  
}
.precio {
  position: absolute;
  right: 5%;
  font-weight: bold;
    text-align: center;
    font-size: 30px;
    font-family: 'century gothic';
    color: #ff0000;
    text-shadow: 0 0 5px #fff,
                 0 0 10px #ffffff, 
                 0 0 20px rgb(235, 45, 45), 
                 0 0 30px rgb(230, 72, 72), 
                 0 0 40px rgb(245, 71, 71), 
                 0 0 55px rgb(248, 35, 35), 
                 0 0 70px rgb(255, 0, 0);

}
</style>