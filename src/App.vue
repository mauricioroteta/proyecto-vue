<template>
    <div id="app">
     <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="#">T-Vendo</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page"> Login </router-link>
          </li> 
          <li class="nav-item">
            <router-link to="/ProductoView" class="nav-link active" aria-current="page" > Productos </router-link>
          </li> 
      </ul>
     </div>
     <b-navbar-nav class="ml-auto">
      <div class="container-fluid">
          <ul class="navbar-nav">
            <!-- Badge -->
            <li class="nav-item">
              <router-link  to="/about" class="nav-link active" aria-current="page"> Carrito 
                <span class="badge badge-pill bg-danger">{{ cant }}</span>
                <span><i class="fas fa-shopping-cart"></i></span>
              </router-link>
            </li>
          </ul>
        </div>
      </b-navbar-nav>
      </nav>
      <router-view  @add-to-cart="addToCart(producto)"/>
    </div>
</template>

<script>
import ProductoView from '@/views/ProductoView.vue'

export default {
  component:{
    ProductoView
  },
  data(){
    return {
      cant: 0
  }
  },
methods: {
  addToCart() {
      console.log()
      if(this.cant == null){
        this.cant = 0
      }
      this.cant = this.cant + 1
      console.log(this.cant)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  opacity: .8;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>