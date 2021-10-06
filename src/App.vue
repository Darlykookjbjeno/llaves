<template>
  <div id="app">
     <Navegadorv
   
    
     />
   

     <Navegador
		:nav-links="navLinks"
		background="#fff"
		link-color="#777"

    /> 
               <router-view/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  </div>
</template>

<script>
import Navegadorv from './components/Navegadorv.vue'
import Navegador from './components/Navegador.vue'


export default {
  components: {
    Navegador,
    Navegadorv
  },
  
  



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
