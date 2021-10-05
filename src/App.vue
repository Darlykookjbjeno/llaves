<template>
  <div id="app">
    <Navegador
		:nav-links="navLinks"
		background="#fff"
		link-color="#777"
		hoverBackground="#ddd"
    />
    <Vertical
   
    background="#fff"
		link-color="#777"
		hoverBackground="#ddd"
     />
    <router-view/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  </div>
</template>

<script>

import Navegador from './components/Navegador.vue'
import Vertical from './components/Vertical.vue'

export default {
  components: {
    Navegador,
    Vertical
  },
  data: () => ({

    
    navLinks: [
      {
        text: 'Zonas',
		path: '/contact',
    
      },
      {
        text: 'Sobre',
		path: '/about',

      },
      {
        text: 'Salir',
		path: '/blog',

      },
      {
        text: 'Portfolio',
		path: '/portfolio',

      },
      {
        text: 'Portfolio',
		path: '/portfolio',

      }
    ]
  })



}
</script>

<style >


figure {
	margin-block-start: 0;
	margin-block-end: 0;
	margin-inline-start: 10px;
	margin-inline-end: 0;
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
