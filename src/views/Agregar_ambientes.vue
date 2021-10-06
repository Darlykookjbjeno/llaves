<template>
  <section class="container">
    <br />
    <div class="row">
      <div class="col">
        <form>
          <div class="mb-10">
            <span class="titulo">Agregar Ambiente</span>
            <hr />
          </div>

          <div class="form">
            <div class="mb-5">
              <label>Imagen Ambiente:</label>
              <input
                type="file"
                class="form-control"
                placeholder="Nombre de la zona"
              />
            </div>
            <div class="mb-5">
              <label>Nombre Ambiente:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Nombre del ambiente"
              />
            </div>

            <div class="mb-5">
              <label>Descripcion:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Descripcion"
              />
            </div>
          </div>

          <div class="mb-3">
            <button class="btn Agregar_zonas">Agregar</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "Agregar_ambientes",
  data() {},
};
</script>




<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 120px;
}

.row {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 100px;
  width: 100%;

  max-width: 500px;
  position: relative;
  padding: 0px;
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}

input:hover {
  border-color: rgb(226, 118, 17);
}

.btn {
    width: 250px;
    height: 40px;
  background-color: rgb(226, 118, 17);

}

.form {
  text-align: initial;
}
span {
  text-align: center;
}
</style>
