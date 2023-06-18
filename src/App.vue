<template>
  <div>
    <comp-nav-bar />
    <div class="contenedor-cards">
      <comp-cards v-for="item in items" :key="item.id" :item="item" />
    </div>
    <CompFooter />
  </div>
</template>

<script>
import axios from "axios";

import CompCards from "./components/CompCards.vue";
import CompNavBar from "./components/CompNavBar.vue";
import CompFooter from "./components/CompFooter.vue";

const url = "../src/assets/listaProductos.json";

export default {
  name: "App",
  components: {
    CompCards,
    CompNavBar,
    CompFooter
  },
  data: () => ({
    items: [],
  }),
  created() {
    this.getData(url);
  },
  methods: {
    async getData(url) {
      try {
        const { data } = await axios.get(url);
        this.items = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>



<style scoped>
.contenedor-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5rem 1rem 1rem 1rem;
}

</style>
