<template>
  
    <nav class="vertical  d-flex flex-column" id="vertical">
      <div class="py-4 px-3">
        <div class="media">
          <img src="../assets/logoUno.png" style="width: 40px" />
        </div>
      </div>
        <br>



        <ul class="ul">
          <li>
            <input type="checkbox" class="dentro" name="list" id="nivel1-1" />

                <a for="nivel1-1" class="conte">
                    <label class="linea" for="nivel1-1">Zonas</label>
                </a>

            <ul class="interior">
              <li v-for="(link, index) in llaves" :key="index">
                <router-link
                  :to="link.path"

                  >{{ link.text }}
                  </router-link>
                  <hr>
              </li>
            </ul>
          </li>
        </ul>
      <br/>
    </nav>
    <!-- End vertical navbar -->
 
</template>


<script>
export default {
  name: "Vertical",

  data() {
    return {
      llaves:[
        {
          text:"  Gestion de LLaves",
          path:"/gestion_llaves"
        },
        {
          text:"  Resgistrar llave",
          path:"/registrar_llaves"
        }
      ],
    };
  },
};
</script>


<style scoped>

.vertical {
  background-color: white;
  min-width: 17rem;
  width: 18rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 2px 2px 2px #ccc;
}
.media{
  margin: 0px 50px;
}
li {
  width: 100%;
  list-style-type: none;
  padding: 10px 5px;
}
/*li :hover{
  border-radius:3px ;
  position: relative;
  left: -20px;
}*/

ul {
  text-align: initial;
}

/* :hover{

  color: black !important;
  border-left-color: orange !important;
  
} */
.ul:hover{

  background: orangered;
  border: left color 2px; 
}


#vertical li a {
  color: black;
  text-decoration: none;
}


#vertical input[name="list"] {
  position: absolute;
  left: -2000em;
}

#vertical input:checked ~ label:before {
  content: "\025be";
}
#vertical .interior {
  display: none;
}

#vertical input:checked ~ ul {
  display: block;
}






</style>