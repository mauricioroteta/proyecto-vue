<template>
        <div class="container-fluid">
        <ul class="navbar-nav">
          <!-- Badge -->
          <li class="nav-item">
            <router-link to="/about" class="nav-link active" aria-current="page"> Carrito 
              <span class="badge badge-pill bg-danger">8</span>
              <span><i class="fas fa-shopping-cart"></i></span>
            </router-link>
          </li>
        </ul>
      </div>
</template>

<script>

    export default {
        name: 'NroCompras',
        props: {
         
        },
        components:{

        },
        data: function(){
          return {
            nombre: "",
            usuario: "",
            password: "",
          }
        },
        methods:{
          alta(){
            if((this.usuario !== "coderhouse@gmail.com") || (this.password !== "123")){
              this.error = true;
              this.error_msg = "Usuario o password incorrecto";
            }else{
              localStorage.token = this.usuario + this.password;
              this.error = false;
              this.error_msg = "";
              this.$router.push('ProductoView');
            }
          }
        }
    }
</script>

<style scoped>

</style>