<template>
  <b-modal id="bv-modal-login" size="lg" hide-footer>
    <template #modal-title> Inicio de Sesion </template>
    <form class="row g-3 needs-validation" @submit.prevent="$bvModal.hide('bv-modal-login')" novalidate>
    <center><img class="logoLogin" src="../assets/logo.png"></center>
    <b-input-group class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="person-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input id="user" type="text" v-model="user" placeholder="Usuario"></b-form-input>
    </b-input-group>

    <b-input-group class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="key"></b-icon>
      </b-input-group-prepend>
      <b-form-input id="password" v-model="password" placeholder="Contraseña" type="password"></b-form-input>
    </b-input-group>

      <comp-registro />
      <b-button variant="danger" @click="$bvModal.show('bv-registro')">
            <b-icon icon="person-plus-fill"></b-icon> Registrate
      </b-button>

      <b-button type="submit" variant="primary" block @click="validar(user, password)">
            <b-icon icon="box-arrow-in-right" ></b-icon> Ingresar
      </b-button>

    </form>
  </b-modal>
</template>

<script>
import CompRegistro from "./CompRegistro.vue";

export default {
  components: { CompRegistro },
  name: "CompLogin",

  data: () => ({
    user: "",
    password: "",
  }),
  

  methods: {
    validar(user, password) {
      if ((this.user == 'coderhouse') && (this.password == '123')) {
        "$bvModal.show('bv-registro')"
      }else{
        alert('Usuario o password incorrectos')
      }
    },
  },
}

</script>

<style scoped>
.logoLogin{
height: 120px;
width: auto;
}
</style>