<template>
	<header  class="d-flex flex-row-reverse bd-highlight">
		<ul ref="nav">
			
			<!-- <li v-for="(link, index) in navLinks" :key="index">
				<router-link :to="link.path">
					{{ link.text }}
					<i :class="link.icon" />
				</router-link>
			</li> -->

			<li><a>inicio</a></li>

			<i ><img src="@/assets/usuario.png" style="width:20px ;"></i>
		</ul>
		<br/>
	</header>
	
</template>


<script>
export default {
	name:"Navegador",
	
	
	
}
</script>


<style scoped >


header {
    position: relative;
	height: 60px;
	width: 100%;
	box-shadow: 2px 2px 2px #CCC;
}

ul {
		display: flex;
		height: 100%;
		align-items: center;
		margin-block-start: 0;
		margin-block-end: 0;
		padding-inline-start: 0;
		box-shadow: 2px 2px 2px #CCC;
    }

		figure {
			cursor: pointer;
			margin-right: 10px;
		}

		a {
			text-decoration: none;
			display: flex;
			flex-direction: row-reverse;
			align-items: center;
		}

		i {
			margin-right: 10px;
			font-size: 22px;
		}

		li {
			list-style-type: none;
			padding: 10px 20px;
		}
	


</style>




