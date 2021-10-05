<template>
  <div>
    <div class="vertical-nav bg-white d-flex flex-column" id="menu">
      <div class="cabeza py-4 px-3 mb-4 bg-light">
        <div class="media d-flex align-items-center">
          <img src="../assets/logoUno.png" style="width: 50px" />

          <div class="media-body">
            <h5 class="m-0">SENA</h5>
            <p class="font-weight-light text-muted mb-0">Zonas</p>
          </div>
        </div>
      </div>

      <aside :style="{ background: background || '#333' }">
        <ul
          class="accordion"
          :style="{ background: background || '#333' }"
          ref="nav"
        >
          <li>
            <input type="checkbox" class="dentro" name="list" id="nivel1-1" />

            <label for="nivel1-1">Zonas</label>

            <ul class="interior">
              <li v-for="(link, index) in hijo" :key="index">
                <router-link
                  :to="link.path"
                  :style="{ color: linkColor || 'black' }"
                  >{{ link.text }}
                  </router-link>
              </li>
            </ul>
          </li>

           <li>
            <input type="checkbox" class="dentro" name="list" id="nivel1-1" >

            <label for="nivel1-1">llaves</label>

            <ul class="interio">
              <li v-for="(link, index) in llaves" :key="index">
                <router-link
                  :to="link.path"
                  :style="{ color: linkColor || 'black' }"
                  >{{ link.text }}
                  </router-link>
              </li>
            </ul>
          </li>



          <li>
            <input type="checkbox" class="dentro" name="list" id="nivel1-1" >

            <label for="nivel1-1">llaves</label>

            <ul class="interio">
              <li v-for="(link, index) in ambientes" :key="index">
                <router-link
                  :to="link.path"
                  :style="{ color: linkColor || 'black' }"
                  >{{ link.text }}
                  </router-link>
              </li>
            </ul>
          </li>








          <!-- <li
            v-for="(link, index) in verLinks"
            :key="index"
            @mouseenter="
              $event.currentTarget.style.background = hoverBackground || '#999'
            "
            @mouseleave="
              $event.currentTarget.style.background = background || '#333'
            "
          >
            <router-link
              :to="link.path"
              :style="{ color: linkColor || 'black' }"
            >
              {{ link.text }}
              <i :class="link.icon" />{{ link.icon }}
            </router-link>
          </li> -->
        </ul>
      </aside>
    </div>
    <!-- End vertical navbar -->
  </div>
</template>


<script>
export default {
  name: "Vertical",

  data() {
    return {
      verLinks: [
        {
          text: "LLaves",
          path: "/about",
        },

        {
          text: "Asignar",
          path: "/asignar",
        },

        {
          text: "Salir",
          path: "/blog",
        },
      ],

      hijo: [
        {
          text: "Gestion de Zonas",
          path: "/gestionar_zonas",
        },
        {
          text: "Registrar Zonas",
          path: "/Agregar_llave",
        },
      ],

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
      ambientes:[
        {
          text:"  Gestion de Ambientes",
          path:"/gestionar_ambientes"
        },
        {
          text:"  Resgistrar Ambiente",
          path:"/registrar_ambientete "
        }
      ]

      
    };
  },

  props: [
    "VerticalLinks",
    "background",
    "linkColor",
    "hoverBackground",
    "imagePath",
  ],

  methods: {
    toggleNav() {
      const nav = this.$refs.nav.classList;
      nav.contains("active") ? nav.remove("active") : nav.add("active");
    },
  },
};
</script>

<style scoped>
ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.cabeza {
  height: 10%;
}

.vertical-nav {
  min-width: 17rem;
  width: 17rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 2px 2px 2px #ccc;
}

li {
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  background-attachment: 2px 2px 5px #ccc;
  list-style-type: none;
  padding: 20px 20px;
}
/*li :hover{
  border-radius:3px ;
  position: relative;
  left: -20px;
}*/

ul {
  text-align: initial;
}

/* for toggle behavior */

.dentro {
  text-align: initial;
}

@media (max-width: 768px) {
  #sidebar {
    margin-left: -17rem;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #content {
    width: 100%;
    margin: 0;
  }
}

* body {
  background: #599fd9;
  background: -webkit-linear-gradient(to right, #599fd9, #c2e59c);
  background: linear-gradient(to right, #599fd9, #c2e59c);
  min-height: 100vh;
  overflow-x: hidden;
}

.separator {
  margin: 3rem 0;
  border-bottom: 1px dashed #fff;
}

.text-uppercase {
  letter-spacing: 0.1em;
}

.text-gray {
  color: #aaa;
}
.media-body {
  padding: 0px 35px;
}

a {
  text-decoration: none;
}

#menu * {
  list-style: none;
}
#menu li {
  line-height: 180%;
}
#menu li a {
  color: #222;
  text-decoration: none;
}
#menu li a:before {
  content: "\025b8";
  color: #ddd;
  margin-right: 4px;
}
#menu input[name="list"] {
  position: absolute;
  left: -1000em;
}
#menu label:before {
  content: "\025b8";
  margin-right: 4px;
}
#menu input:checked ~ label:before {
  content: "\025be";
}
#menu .interior {
  display: none;
}
.interior {
  padding: 5px 30px;
}
#menu input:checked ~ ul {
  display: block;
}
</style>