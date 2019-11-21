<template>
	<nav id="menu" aria-label="mobile side nav" class="grid-x grid-padding-x">
	  	<div 
	  		class="cell medium-12 slid-nav-container off-canvas-absolute position-left is-transition-push" 
	  		v-bind:class="[slideout ? 'is-open' : 'is-closed']" 
	  		id="offCanvasLeftSplit" 
	  	>
	  		<button class="close-toggle" @click="closeNav">X</button>
	        <ul>
	  			<li @click="closeNav">
	  				<router-link 
	  					v-bind:to="'/services'"
	  				>Service Areas</router-link>
	  			</li>
	  			<li @click="closeNav">
	  				<router-link 
	  				v-bind:to="'/about-us'"
	  			>About Us</router-link>
	  			</li>
	  			<li @click="closeNav">
	  				<router-link 
	  					v-bind:to="'/request-quote'"
	  				>Request A Quote</router-link>
	  			</li>
	  		</ul>
	    </div>
  	</nav>
</template>

<script>
	export default {
		name: 'SideNav',
		props: ['slideout'],
		methods: {
			closeNav() {
				this.$emit('closeNav');
			}
		}
	}
</script>

