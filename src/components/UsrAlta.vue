<template>
    <div class="container">
        <div class="abs-center">
            <div class="col-md-8">
                <div class="well well-sm">
                    <form class="form-horizontal" method="post">
                        <fieldset>
                            <legend class="text-center header">Alta de Usuario</legend>

                            <div class="form-group">
                                <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                                <div class="col-md-8">
                                    <input id="fname" name="name" type="text" placeholder="Nombre" class="form-control">
                                </div>
                            </div>
                            <br>
                            <div class="form-group">
                                <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                                <div class="col-md-8">
                                    <input id="lname" name="name" type="text" placeholder="Apellido" class="form-control">
                                </div>
                            </div>
                            <br>
                            <div class="form-group">
                                <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                                <div class="col-md-8">
                                    <input id="email" name="email" type="text" placeholder="Email" class="form-control">
                                </div>
                            </div>
                            <br>
                            <div class="form-group">
                                <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                                <div class="col-md-8">
                                    <input id="password" name="password1" type="password" placeholder="password" class="form-control">
                                </div>
                            </div>
                            <br>
                            <div class="form-group">
                                <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                                <div class="col-md-8">
                                    <input id="password" name="password2" type="password" placeholder="password" class="form-control">
                                </div>
                            </div>
                            <br>
                            <div class="form-group">
                                <div>

                                    <b-button v-on:click="alta" variant="success">Aceptar</b-button>
                                    <b-button v-on:click="volver" variant="danger">Cancelar</b-button>

                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        name: 'UsrAlta',
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
            this.$swal("Perfecto!", "Ya estas registrado!", "success")
            this.$router.push('FormLoginView');
            },
          volver(){
              this.$router.push('FormLoginView');
          }
        }
}
</script>

<style scoped>
.header {
    color: #36A0FF;
    font-size: 27px;
    padding: 10px;
}

.bigicon {
    font-size: 35px;
    color: #36A0FF;
}

.abs-center {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.form {
  width: 450px;
}
</style>