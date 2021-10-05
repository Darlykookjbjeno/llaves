<template>
	<nav  class="d-flex flex-row-reverse bd-highlight"
	
	:style="{ background: background || '#333' }">
		<ul :style="{ background: background || '#333' }" ref="nav">
			
			<li
				v-for="(link, index) in navLinks"
				:key="index"
				@mouseenter="$event.currentTarget.style.background = hoverBackground || '#999'"
				@mouseleave="$event.currentTarget.style.background = background || '#333'"
			>
				<router-link
					:to="link.path"
					:style="{ color: linkColor || '#DDD' }"
				>
					{{ link.text }}
					<i :class="link.icon" />
				</router-link>
			</li>

			<i ><img src="@/assets/usuario.png" style="width:20px    ;"></i>
		</ul>
	</nav>
</template>


<script>
export default {
	name:"Navegador",
	
	props: ['navLinks', 'background', 'linkColor', 'hoverBackground', 'imagePath'],
	methods: {
		toggleNav () {
			const nav = this.$refs.nav.classList
			nav.contains('active') ? nav.remove('active') : nav.add('active')
		}
	}
}
</script>


<style scoped lang="css">


nav {
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
	
    
li:hover{
  border-radius:3px ;
  position: relative;
  left: -20px;
}


</style>




