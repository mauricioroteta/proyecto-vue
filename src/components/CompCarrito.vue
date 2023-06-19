<template>
  <b-modal id="bv-modal-carrito" size="lg" hide-footer>
    <template #modal-title>
    </template>
    <div class="d-block text-center">
      <table class="table " v-if="productosEnCarrito.length">
              <thead>
                <tr>
                  <th class="titleCol" scope="col"></th>
                  <th class="titleCol" scope="col">Producto</th>
                  <th class="titleCol" scope="col">Precio</th>
                  <th class="titleCol" scope="col">Cantidad</th>
                  <th class="titleCol" scope="col">Total</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="item in productosEnCarrito" :key="item.id">
                  <td><span style="cursor: pointer"><b-icon font-scale="1.5" icon="Trash" variant="danger" @click="remove(item.id)"></b-icon></span></td>
                  <td>{{ item.nombre }}</td>
                  <td>$ {{ formatNumber(item.precio, 2, 1) }}</td>
                  <td><comp-contador :productoId="item.id" /></td>
                  <td>$ {{ formatNumber(item.qty, 2, 1) }}</td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Total:</td>
                  <td class="importeTotal">$ {{ formatNumber(total, 2, 1) }}</td>
                  <td>
                    <comp-pagar />
                    <b-button variant="success" @click="$bvModal.show('bv-Pagar')">
                      <b-icon icon="credit-card" ></b-icon> Pagar
                    </b-button>
                </td>
                </tr>
              </tfoot>
            </table>
            <h3 v-else>No hay productos en el Carrito</h3>
    </div>

    <div class="botones-carrito">

        <b-button variant="danger" @click="borrarTodo()">
            <b-icon icon="trash-fill"></b-icon> Borrar Carrito
        </b-button>

        <b-button variant="primary" block @click="$bvModal.hide('bv-modal-carrito')">
            <b-icon icon="backspace" ></b-icon> Cerrar
        </b-button>

    </div>
  </b-modal>
</template>

<script>
import CompContador from "./CompContador.vue";
import { appCarrito } from "@/js/appCarrito";
import CompPagar from "./CompPagar.vue";

export default {
  name: "CompCarrito",
  components:{
    CompContador,
    CompPagar,
  },
  data: () => ({
    appCarrito
  }),
  
  computed: {
    productosEnCarrito() {
      return this.appCarrito.carrito;
    },
    total() {
      return this.appCarrito.carritoTotalPrecio();
    },
  },
  methods: {
    remove(id) {
      this.appCarrito.removerArticulo(id);
    },
    borrarTodo(){
      this.appCarrito.vaciarCarrito();
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
  }
};
</script>

<style scoped>
.bv-modal-carrito{
  height: 50rem;
}

.titleCol{
  font-weight: bold;
  font-family: 'century gothic';
  font-size: 20px;
}

.botones-carrito{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
}

.importeTotal{
  color: red;
  font-weight: bold;
}
.icnTrash{
  height: 15px;
}
</style>