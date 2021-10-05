<template>
  <div class="container">
    <br />

    <div class="row">
      <div class="col-3"></div>
      <div class="col-9">
      <form>
        <div class="mb-5">
          <span>editar zona</span>
        </div>
        <div class="col-8">
          <div class="mb-3">
            <label>Nombre zona Antiguo</label>
            <input
              type="text"
              class="form-control"
              name="nombre_zona"
              id="nombre_zona"
              v-model="form.nombre_zona"
            />
          </div>

          <div class="mb-3">
            <label>Nuevo nonbre zona</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <button class="btn btn-warning" v-on:click="editar">Editar</button>
      </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Editar",

  data() {
    return {
        zones:[],
      form: {
        "nombre_zona": ""
      },
    };
  },
  methods: {
    editar() {},
  },

  mounted() {
    this.zones = this.$route.params.nombre_zona;
    axios.get("http://127.0.0.1:8000/api/zonas/" + this.zones)
    .then((datos) => {
      this.nombre_zona = datos.data.nombre_zona;
      console.log(this.form);
    });
  },
};
</script>



<style scoped>
.container {
  text-align: initial;
  letter-spacing: 0.1em;
}
</style>