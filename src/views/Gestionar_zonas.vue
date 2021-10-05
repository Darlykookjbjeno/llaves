<template>
  <div>
    <br />
    <section class="container">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-10">
          <div class="titulo">
            <span class="zona">Zonas</span>
          </div>
          <hr />
          <article class="contenedor d-flex show ">
            <div
              class="card"
              style="width: 60rem"
              v-for="zona in zones"
              :key="zona.id_zona"
            >
              <div class="card-body mb-3 ">
                <h5 class="card-title">{{ zona.id_zona }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  {{ zona.nombre_zona }}
                </h6>

                <h6 class="card-subtitle text-muted">{{ zona.create_at }}</h6>
                <h6>------</h6>
                <h6 class="card-subtitle text-muted">{{ zona.updated_at }}</h6>
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
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Gestionar_zonas",

  data() {
    return {
      zones: [],
      form: {},
    };
  },

  mounted() {
    this.getZonas();
  },

  methods: {
    getZonas() {
      axios
        .get("http://127.0.0.1:8000/api/zonas")
        .then((response) => {
          console.log(response);
          this.zones = response.data.zones;
        })
        .catch((e) => console.log(e));
    },

    editar(nombre_zona) {
      this.$router.push("/editar/" + nombre_zona);
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
  margin:0px 3px ;
}
</style>