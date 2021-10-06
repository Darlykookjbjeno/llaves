<template>
  <nav class="sidebar vertical">

      <div>
         <div class="text">
             <img src="../assets/logoUno.png" style="width: 40px" />
             sena</div>
      </div>
    <ul>
      <li>
        <a class="titulo" type="checkbox" href="#">Zonas
            <img class="flecha"  src="../assets/flecha-hacia-abajo.png" style="width:10px;">
        </a>
        <ul v-for="(link, index) in zonas" :key="index">
          <li>
            <router-link class="a" :to="link.path">{{ link.name }} </router-link>
          </li>
        </ul>
      </li>

      <li>
        <a class="titulo " type="checkbox" href="#">Ambientes
            <img class="flecha" src="../assets/flecha-hacia-abajo.png" style="width:10px;">
        </a>
        <ul v-for="(link, index) in ambientes" :key="index">
          <li>
            <router-link class="a" :to="link.path">{{ link.name }} </router-link>
          </li>
        </ul>
      </li>


      <li>

        <a class="titulo"  type="checkbox" href="#">llaves
            <img class="flecha" src="../assets/flecha-hacia-abajo.png" style="width:10px;">
        </a>
        <ul v-for="(link, index) in llaves" :key="index">
          <li>
            <router-link class="a" :to="link.path">{{ link.name }} </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>


<script>
export default {
  name: "Nav",

  data() {
    return {
      zonas: [
        {
          name: "Gestion zonas",
          path: "/gestionar_zonas",
        },
        {
          name: "Agregar zonas",
          path: "/Agregar_zona",
        },
      ],
      

    ambientes: [
        {
          name: "Gestion ambientes",
          path: "/gestionar_ambientes",
        },
        {
          name: "Agregar ambientes",
          path: "/Agregar_ambiente",
        },
      ],
      llaves: [
        {
          name: "Gestion llaves",
          path: "/gestionar_zonas",
        },
        {
          name: "Agregar llaves",
          path: "/Agregar_llave",
        },
      ],


    };
  },
};
</script>


<style scoped>
.sidebar {
  margin: 0;
  padding: 0;
  user-select: none;
  box-sizing: border-box;
  font-display: "poppins", sans-serif;
}

.sidebar {
  position: fixed;
  width: 300px;
  height: 100%;
  left: 0;
  background: wheat;
}
.sidebar .text {
  color: rgb(206, 206, 206);
  font-size: 25px;
  font-weight: 600;
  line-height: 65px;
  text-align: center;
  background: rgb(3, 3, 3);
  letter-spacing: 20px;
}

nav ul {
    
  background: rgb(245, 243, 242);
  height: 100%;
  width: 100%;
  list-style: none;
}

nav ul li {
    position: relative;
    left: -31px;
  line-height: 70px;
  border-bottom: 1px solid rgb(255, 255, 255, 0.1);
}

nav ul li a {
  color: rgb(10, 10, 10);
  text-decoration: none;
  font-size: 15px;
  text-align: center;
  padding-left: 0px;
  font-weight: 500;
  display: block;
  width: 300px!important;
  border-left: 3px solid transparent;
}

nav ul li a{
    width: 280px;
}
nav ul li a:hover {
  color: rgb(226, 118, 17);
  background: white;
  border-left-color: rgb(226, 118, 17);
}

nav ul ul{
    position: static;

}

nav ul ul li{
    line-height: 42px;
    border-bottom: none;

}

nav ul ul li .titulo{
    font-size: 17px;
    color: rgb(226, 118, 17);

   
}

nav ul ul li .a{
     font-size: 17px;
    color: rgb(226, 118, 17);
    padding-left: 100px;
}

nav ul ul li a:hover{
    color: black;
}

.flecha{
    position: relative;
    left: 80px;
}

.titulo{

}
</style>