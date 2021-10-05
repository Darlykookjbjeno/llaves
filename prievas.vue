<template>
<div>
<div class="vertical-nav bg-white" id="sidebar">
  <ul>
      <li v-for="(link,index) in vevrtical"
      :key="index">
      </li>
      <router-link :to="link.path"  >
      {{link.text}}
      </router-link>
  </ul>
</div>
<!-- End vertical navbar -->
</div>


	<!--:image-path="require('./assets/logoUno.png')"-->
</template>



<script>
export default {
 name: 'App',
  data () {
    return {
      menu: [
        {
          header: 'Getting Started',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Installation',
          icon: 'fa fa-download'
        },
        {
          href: '/basic-usage',
          title: 'Basic Usage',
          icon: 'fa fa-code'
        },
        {
          header: 'Usage',
          hiddenOnCollapse: true
        },
        {
          href: '/props',
          title: 'Props',
          icon: 'fa fa-cogs'
        },
        {
          href: '/events',
          title: 'Events',
          icon: 'fa fa-bell'
        },
        {
          href: '/styling',
          title: 'Styling',
          icon: 'fa fa-palette'
        },
        {
          component: markRaw(separator)
        },
        {
          header: 'Example',
          hiddenOnCollapse: true
        },
        {
          href: '/disabled',
          title: 'Disabled page',
          icon: 'fa fa-lock',
          disabled: true
        },
        {
          title: 'Badge',
          icon: 'fa fa-cog',
          badge: {
            text: 'new',
            class: 'vsm--badge_default'
          }
        },
        {
          href: '/page',
          title: 'Dropdown Page',
          icon: 'fa fa-list-ul',
          child: [
            {
              href: '/page/sub-page-1',
              title: 'Sub Page 01',
              icon: 'fa fa-file-alt'
            },
            {
              href: '/page/sub-page-2',
              title: 'Sub Page 02',
              icon: 'fa fa-file-alt'
            }
          ]
        },
        {
          title: 'Multiple Level',
          icon: 'fa fa-list-alt',
          child: [
            {
              title: 'page'
            },
            {
              title: 'Level 2 ',
              child: [
                {
                  title: 'page'
                },
                {
                  title: 'Page'
                }
              ]
            },
            {
              title: 'Page'
            },
            {
              title: 'Another Level 2',
              child: [
                {
                  title: 'Level 3',
                  child: [
                    {
                      title: 'Page'
                    },
                    {
                      title: 'Page'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      collapsed: false,
      themes: [
        {
          name: 'Default theme',
          input: ''
        },
        {
          name: 'White theme',
          input: 'white-theme'
        }
      ],
      selectedTheme: 'white-theme',
      isOnMobile: false
    }
  },
}
</script>






















<template>
  <div>
    <div class="vertical-nav bg-white d-flex flex-column">
      <div class="cabeza py-4 px-3 mb-4 bg-light">
        <div class="media d-flex align-items-center">
          <img src="../assets/logoUno.png" style="width: 50px" />
          <div class="media-body">
            <h4 class="m-0">SENA</h4>
            <p class="font-weight-light text-muted mb-0">llaves</p>
          </div>
        </div>
      </div>

      <aside :style="{ background: background || '#333' }">
        <div class="acorh">
          <li
          :nav-links="hijo"
          
            @mouseenter="
              $event.currentTarget.style.background = hoverBackground || '#999'
            "
            @mouseleave="
              $event.currentTarget.style.background = background || '#333'
            "
          >
            <a  v-for="titulo in hijo" :key="titulo">{{titulo.title}}</a>
            <ul>

              <li v-for="text in  hijito" :key="text">

                <router-link
                  :to="link.path">

                  {{ hijito.text }}
                  
                </router-link>

              </li>



              <li><a href="URL12">Opción </a></li>
            </ul>
          </li>
        </div>

        <ul :style="{ background: background || '#333' }" ref="nav">
          <li
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
              <i :class="link.icon" />
            </router-link>
          </li>
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
        {
          text: "Portfolio",
          path: "/portfolio",
        },
        {
          text: "Portfolio",
          path: "/portfolio",
        },
      ],

      hijo: [
        {
          title: "llaves",
          hijito: [
            {
              text: "LLaves",
              path: "/llaves",
            },
            {
              text: "Asignar",
              path: "/asignar",
            },
          ],
        },
      ],
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

aside {
  background-color: #599fd9;
  height: 90%;
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
  display: flex;
  width: 100%;
  align-items: center;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  background-attachment: 2px 2px 2px #ccc;
  list-style-type: none;
  padding: 10px 20px;
}
li:hover {
  border-radius: 3px;
  position: relative;
  left: -20px;
}

ul {
  text-align: center;
}

/* for toggle behavior */

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

.acorh {
  margin: 10px auto;
  padding: 0;
  list-style: none;
  width: 100%;
  font-size: 15px;
}
.acorh a {
  width: 200px;
}

.acorh li ul {
  max-height: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  transition: 0.3s all ease-in;
}

.acorh li li:last-child a {
  border-bottom: 0;
}
.acorh li:hover ul {
  max-height: 300px;
  transition: 0.3s all ease-in;
}
.acorh li:target ul {
  max-height: 300px;
  transition: 0.3s all ease-in;
}
</style>