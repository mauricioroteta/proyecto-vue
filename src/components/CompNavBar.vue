<template>
    <nav class="navbar bg-body-tertiary">
        
        <div class="container-fluid">
            <a class="navbar-brand">
                <img src="../assets/logo.png" alt="Logo" height="80  " class="d-inline-block align-text-top">
            </a>
            <a class="navbar-brand logos">                    
                    <b-button variant="outline-primary" id="show-btn" @click="$bvModal.show('bv-modal-login')">
                      <b-icon icon="person-fill"></b-icon> Login
                    </b-button>

                    <b-button variant="outline-primary" id="show-btn" @click="$bvModal.show('bv-modal-carrito')">
                      <b-icon icon="cart"></b-icon> Carrito
                    </b-button> 

                    <div class="contadorCarrito">{{ getCantProductos }}</div>
            </a>
            <comp-carrito /><comp-login/>
        </div>
    </nav>
    
</template>

<script>
import { appCarrito } from "@/js/appCarrito";
import CompCarrito from './CompCarrito.vue';
import CompLogin from "./CompLogin.vue";

export default {
    components: {
      CompCarrito,
      CompLogin
    },
    data: () => ({ 
      appCarrito,
  }),
  computed: {
    getCantProductos() {
      return this.appCarrito.getCantProductos()
    }
  },
}

</script>

<style scoped>
.contadorCarrito {
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: red;
  color: white;
  text-align: center;
  left: -32px;
  top: 30px;
  border-radius:10% 50% 10% 50%
}
.container-fluid {
    display: flex;
    justify-content: space-between;
}
nav {
  display: inline-block;
  width: 100%;
  min-width: 20rem;
  height: 5rem;
  position: fixed;
  top: 0;
  z-index: 10;
}
.logos {
    display: flex;
    gap: 1rem;
}
</style>