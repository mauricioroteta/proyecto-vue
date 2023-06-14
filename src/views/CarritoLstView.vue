<template>
  <div class="about">
    <CarritoLst />
  </div>
</template>

<script>
// @ is an alias to /src
import CarritoLst from '@/components/CarritoLst.vue'

export default {
  name: 'CarritoLstView',
  components: {
    CarritoLst
  }
}
</script>