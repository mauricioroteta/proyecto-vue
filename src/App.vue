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
import CarritoLstView from '@/views/CarritoLstView.vue'

export default {
  component:{
    ProductoView,
    CarritoLstView
  },
  data(){
    return {
      cant: 0,
      productos: []
  }
  },
methods: {
  addToCart(producto) {
      //console.log(Object.values(producto)[1]);
      console.log(producto);
      if(this.cant == null){
        this.cant = 0
      }
      this.cant = this.cant + 1
    },
		agregar_carrito(producto) {
			// Obtener los productos existentes del localStorage
			this.to_puchase = JSON.parse(localStorage.getItem('productos')) || [];

			// Crear un objeto con los datos del producto actual
			const nuevo_producto = {
				nombre: producto.nombre,
				descripcion: producto.descripcion,
				valor: producto.valor,
				imagen: producto.imagen
			};

			// Agregar el nuevo producto al arreglo de productos en el carrito
			this.to_puchase.push(nuevo_producto);
			this.cantidad = this.to_puchase.length;
			// Guardar el arreglo actualizado en el localStorage
			localStorage.setItem('productos', JSON.stringify(this.to_puchase));
			this.calcular_total();
		},
		obtener_productos(){
			fetch("./products.json")
				.then(response => response.json())
				.then(data => {
					this.productos = data;
				})
				.catch(error => {
					console.error("Error al obtener los productos:", error);
				});
		},
		iniciar_carrito() {
			this.to_puchase = JSON.parse(localStorage.getItem('productos'));
			if (this.to_puchase !== null){
				this.cantidad = this.to_puchase.length;
				return;
			}
			this.cantidad = 0;
		},
		calcular_total() {
			this.gasto_total = 0;
			this.to_puchase = JSON.parse(localStorage.getItem('productos'));
			if (this.to_puchase === null){
				this.gasto_total = 0;
				return;
			}
			this.to_puchase.forEach(element => {
				this.gasto_total = this.gasto_total + element.valor;
			});
		},
		vaciar_carrito() {
			this.cantidad = 0;
			localStorage.clear();
			this.to_puchase = [];
			this.gasto_total = 0;
		}
	},
	mounted() {
		this.iniciar_carrito();
		this.obtener_productos();
		this.calcular_total();
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