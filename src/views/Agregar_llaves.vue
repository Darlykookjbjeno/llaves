<template>
  <section class="container">
    <br />
    <div class="row">
      <div class="col">
        <form>
          <div class="mb-5">
            <span>Agregar LLave</span>
            <hr />
          </div>
          <div class="form">
              
              <div class="mb-5">
              <label>Ambiente:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Ambiente"
              />
            </div>


            <div class="mb-5">
              <label>Imagen LLave:</label>
              <input
                type="file"
                class="form-control"
                placeholder="Nombre de la zona"
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
  name: "Agregar_llaves",
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
  padding: 150px;
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
.form {
  text-align: initial;
}

.btn {
  width: 250px;
  height: 40px;
  background-color: rgb(226, 118, 17);
}
</style>
