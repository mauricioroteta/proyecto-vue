<template>
        <b-modal id="bv-Pagar" size="lg" hide-footer>
        <template #modal-title>
            Efectuar Pago
        </template>
        
        <center><img class="imgTarjeta" src="../assets/tarjetaCredito.jpg"></center>
        <b-card title="Tarjeta de Debito / Credito" sub-title="Complete sus datos">
    <b-card-text>
      Complete los datos para finalizar la compra
    </b-card-text>

    </b-card>
    <div class="botones-pagar">
    <b-button variant="success" block @click="$bvModal.hide('bv-Pagar')">
            <b-icon icon="check-lg" ></b-icon> Pagar
      </b-button>

      <b-button variant="danger" block @click="$bvModal.hide('bv-Pagar')">
            <b-icon icon="x-lg" ></b-icon> Cancelar
        </b-button>
    </div>
    </b-modal>
</template>

<script>
    export default {
        name: 'CompPagar',
}
</script>

<style scoped>
.imgTarjeta{
    width: 20rem;
    border: 1px solid #000;
    border-radius: 5%;
}
.botones-pagar{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
}
</style>