<template>
  <div>
    <br />
    <section class="container">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-7">
          <div class="titulo">
            <span class="zona">Ambientes</span>
          </div>
          <hr />
          <article class="contenedor">




            <div class="card bg-dark text-white" v-for="ambiente in environments"
            :key="ambiente.nombre_ambiente">
              <img  class="card-img" src="http://127.0.0.1:8000/storage/imagen_llaves/cV2OWLExsG3R67PeZaClIbhBIkTi4H5fMbjvsbza.png" alt="ññññ"  style="width:50px;">
              <div class="card-img-overplay">
                <h5 class="card-title">{{ambiente.nombre_ambiente}}</h5>
                <p class="card-text">{{ambiente.zona}}</p>
                <p class="card-text">{{ambiente.id_ambiente}}</p>

                <button class="btn btn-warning">editar</button>
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
  name: "Gestionar_ambientes",



  











  data() {
    return {
      environments: [],
      form: {},
    };
  },

  mounted() {
    this.getAmbienes();
  },

  methods: {
    getAmbienes() {
      axios
        .get("http://127.0.0.1:8000/api/ambientes")
        .then((response) => {
          console.log(response);
          this.environments = response.data.environments;
        })
        .catch((e) => console.log(e));
    },

    // editar(nombre_ambiente) {
    //   this.$router.push("/editar/" + nombre_ambiente);
    // },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  margin: 0 5px;
  
}
</style>