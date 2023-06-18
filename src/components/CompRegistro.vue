<template>
    <b-modal id="bv-registro" size="lg" hide-footer>
        <template #modal-title>
            Login
        </template>
        <div class="d-flex text-center flex-column  gap-2">
            <center><b-icon icon="person-circle" font-scale="7.5" color="gray"></b-icon></center>
            <input type="mail" class="form-control" placeholder="Mail" aria-label="Mail" aria-describedby="basic-addon1">
            <input type="text" class="form-control" placeholder="Usuario" aria-label="Usuario"
                aria-describedby="basic-addon1">
            <input type="password" class="form-control" placeholder="Contraseña" aria-label="Contraseña"
                aria-describedby="basic-addon1">

        <b-button type="submit" variant="primary" block @click="$bvModal.hide('bv-registro')">
            <b-icon icon="box-arrow-in-right" ></b-icon> Confirmar
      </b-button>
    </div>
    </b-modal>
</template>
    
<script>

export default {

    name: 'CompRegistro',


}
</script>
  