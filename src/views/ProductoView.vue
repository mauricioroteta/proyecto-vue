<template>
    <div class="container">
<div class="card-group">
    <b-card-group deck  v-for="producto in listaProductos" :key="producto.id" class="col-md-4">

      <b-card
        img-top
        tag="article"
        style="max-width: 20rem; padding: 1rem;"
        class="mb-4"
    >
    <b-img  :src="producto.imagen" fluid alt="Responsive image"></b-img>

    <b-card-text class="precio">
          {{ producto.precio }}
        </b-card-text>

    <b-card-title>
            {{ producto.nombre }}
        </b-card-title>

        <b-card-text class="descrip">
            {{ producto.descripcion }}
        </b-card-text>

        <b-button>
          <b-icon icon="cart-plus-fill" class="nav-icon" @click="addToCart(producto)"></b-icon>
        </b-button>


    </b-card>
    </b-card-group>
    </div>  
  </div>
</template>

<script>

export default {
  name: "ProductoView",
  data() {
    return {
      isClicked: false,
      listaProductos: 
                [
                    {
                        id: 1,
                        nombre: 'BenQ MOBIUZ EX2710Q LCD 27"',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_873330-MLA52642247692_112022-W.webp',
                        descripcion: `Monitor gamer BenQ MOBIUZ EX2710Q LCD 27" negro y gris 100V/240V`,
                        precio: '$289.899.-'
                    },
                    {
                        id: 2,
                        nombre: 'LG UltraGear 24GN600 led 24"',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_845070-MLA46623210425_072021-F.webp',
                        descripcion: `Monitor gamer LG UltraGear 24GN600 led 24" negro 100V/240V`,
                        precio: '$123.499.-'
                    },
                    {
                        id: 3,
                        nombre: 'ViewSonic Omni XG2431 LCD 24"',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_919315-MLA51619238113_092022-O.webp',
                        descripcion: `Monitor gamer ViewSonic Omni XG2431 LCD 24" negro 100V/240V`,
                        precio: '$203.599.-'
                    },
                    {
                        id: 4,
                        nombre: 'Amd Asrock Phantom Gaming Rx 6800xt',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_804767-MLA53856094597_022023-O.webp',
                        descripcion: `Placa De Video Amd Asrock Phantom Gaming Rx 6800xt 16gb Express 4.0 X16 Gddr6`,
                        precio: '$299.999-'
                    },
                    {
                        id: 5,
                        nombre: 'AMD PowerColor Fighter Radeon 6600',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_667544-MLA50291500307_062022-O.webp ',
                        descripcion: `Placa de video AMD PowerColor Fighter Radeon 6600 Series RX 6600 AXRX 6600 8GBD6-3DH 8GB`,
                        precio: '$288.999-'
                    },
                    {
                        id: 6,
                        nombre: 'Nvidia Palit Dual GeForce GTX',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_603481-MLA48656710629_122021-O.webp',
                        descripcion: `Placa de video Nvidia Palit Dual GeForce GTX 16 Series GTX 1660 NE51660018J9-1161C 6GB`,
                        precio: '$204.999.-'
                    },
                    {
                        id: 7,
                        nombre: 'Epson EcoTank L3210',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_694232-MLA48231925095_112021-O.webp',
                        descripcion: `Impresora a color multifunción Epson EcoTank L3210 negra 220V`,
                        precio: '$178.999.-'
                    },
                    {
                        id: 8,
                        nombre: 'Brother HL1212W',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_793026-MLA48955225118_012022-O.webp',
                        descripcion: `Brother HL1212W Impresora Láser Wi-Fi color Negro/Blanco 220V`,
                        precio: '$120.099.-'
                    },
                    {
                        id: 9,
                        nombre: 'HP Deskjet Ink Advantage 3775',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_729863-MLA50606451366_072022-O.webp',
                        descripcion: `Impresora a color multifunción HP Deskjet Ink Advantage 3775 con wifi blanca y azul 200V - 240V`,
                        precio: '$57.499.-'
                    }
            ]
    };
  },
	methods: {
    addToCart(producto) {
      this.$emit('add-to-cart', producto)
    }
	}
};
</script>

<style>

.card {
  margin-bottom: 15px;
  border-radius: 0.5rem;
  border: 2px solid rgba(218, 25, 25, 0.125);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
  height: 61vh;
}

.card-group{
    display: flex;
    flex-direction: row;
    margin: 4rem;
}

.card-body {
  flex: 1;
  padding: 1rem;
}

.card-title {
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.card-text {
  margin-bottom: 2rem;
}

.precio {
  position: absolute;
  top: 4%;
  right: 10%;
  font-size: 20px;
  color: red;
  font-weight: bold;
}

.comprar {
  position: absolute;
  top: 5%;
  right: 5%;
}

.descrip {
  font-size: 12px;
}

</style>
