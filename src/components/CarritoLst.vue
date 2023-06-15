<template>
  <div class="detalle-carrito">
		<table id="tabla-carrito">
			<tr>
				<th class="nombre">Descripcion</th>
        <th class="nombre">Cant</th>
				<th class="valor">Valor</th>
			</tr>
			<tr v-for="producto in listaProductos" :key="producto.id">
				<td>{{ producto.nombre }}</td>
				<td class="valores"><strong>$ {{ producto.valor }}</strong></td>
			</tr>
		</table>
		<div class="total">
			TOTAL $ {{ gasto_total }}
		</div>
		<a class='btn' href="#" @click="vaciar_carrito($event)"> Vaciar carrito </a>
	</div>
</template>

<script>
import ProductoView from '@/views/ProductoView.vue'

export default {
    name: 'CarritoLst',
    component:{
        ProductoView
    },
  props: {
    listaProductos: {
      type: Array
    },
    gasto_total: {
      type: Number
    },
  },
  methods: {
    vaciar_carrito(event) {
      event.preventDefault();
      this.$emit('vaciar-carrito');
    },
  },
};
</script>


<style scoped>
.detalle-carrito{
  width: 60%;
  margin: auto;
}

#tabla-carrito{
  width: 100%;
  text-align: left;
  margin-top: 10rem;
  
}

tr{
  height: 30px;
}

th{
  padding: 4px;
}

.nombre, .valor{
  background-color: hwb(175 81% 10%);
  font-weight: bold;
  padding-left: 20px;
}

.valores{
  text-align: right;
}

.btn{
  width: 100%;
  background-color: #FF9900;
  color: white;
  font-weight: bold;
  text-align: center;
  height: 30px;
  line-height: 20px;
}

.btn:hover{
  transform: scale(1.02);
}

.total{
  width: 50%;
  background-color: #e23737;
  padding: 5px;
  margin: 30px 0px;
  float: right;
  color: white;
  font-weight: bold;
  text-align: center;
}
</style>