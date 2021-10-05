<template>
  <div>
    <br />
    <section class="container">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-11">
          <div class="titulo">
            <span class="zona">llaves</span>
          </div>
          <hr />
          <article class="contenedor  mb-3">





            <!-- <div
              class="card"
              style="width: 18rem"
              v-for="llave in keys"
              :key="llave.url_codigo_qr"
            >
              <div class="card-body">
                <h5 class="card-title">{{ llave.id_llave }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  {{ llave.ambiente }}
                </h6>

                <h6 class="card-subtitle text-muted">{{ llave.url_codigo_qr }}</h6>
                <h6>------</h6>
                <h6 class="card-subtitle text-muted">{{ llave.codigo_llave }}</h6>

                <button v-on:click="editar(zona.nombre_zona)">Editar</button>

              </div>
            </div> -->








          <div class="card mb-3" style="max-width: 50rem;" v-for="llave in keys"
              :key="llave.url_codigo_qr">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="http://127.0.0.1:8000/storage/codigo_qr/3y3$3Q3.svg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ llave.id_llave }}</h5>
                    <p class="card-text">{{ llave.ambiente }}</p>
                    <p class="card-text"><small class="text-muted">{{ llave.codigo_llave }}</small></p>

                </div>

                <div class="card-foot mb-3 ">
                  <div class="botones">
                  <button
                    class="btn btn-warning"
                    v-on:click="editar(zona.nombre_zona)"
                  >
                    Editar
                  </button>
                  <button
                    class="btn btn-danger"
                    v-on:click="editar(zona.nombre_zona)"
                  >
                    Eliminar
                  </button>
                  <button
                    class="btn btn-success"
                    v-on:click="editar(zona.nombre_zona)"
                  >
                    Ver detalle
                  </button>
                </div>
               </div>
                </div>

                 

            </div>
            </div>

            




          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Gestionar_llaves",

  data() {
    return {
      keys: [],
      form:{

        
      }
    };
  },

  mounted() {
    this.getLaves();
  },

  methods: {
    getLaves() {
      axios
        .get("http://127.0.0.1:8000/api/llaves")
        .then((response) => {
          console.log(response);
          this.keys = response.data.keys;
        })
        .catch((e) => console.log(e));
    },

    editar(url_codigo_qr) {
     
     this.$router.push('/editar/' + url_codigo_qr);
    },

    
  },
};
</script>

<style scoped>
.card {
  display: flex;
  margin: 0 5px;
}
.btn{
  margin:0px 3px;
}
</style>