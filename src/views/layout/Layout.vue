<template>
	<div class="grid-container fluid main">
		<div class="off-canvas-wrapper">
	      <nav id="menu" aria-label="mobile side nav" class="grid-x grid-padding-x">
	      	<div 
	      		class="cell medium-12 slid-nav-container off-canvas-absolute position-left is-transition-push" 
	      		v-bind:class="[slideout ? 'is-open' : 'is-closed']" 
	      		id="offCanvasLeftSplit" 
	      	>
	      		<button class="close-toggle" @click="toggleHandler">X</button>
		        <ul>
	      			<li @click="toggleHandler">
	      				<router-link 
	      					v-bind:to="'/services'"
	      				>Service Areas</router-link>
	      			</li>
	      			<li @click="toggleHandler">
	      				<router-link 
	      				v-bind:to="'/about-us'"
	      			>About Us</router-link>
	      			</li>
	      			<li @click="toggleHandler">
	      				<router-link 
	      					v-bind:to="'/request-quote'"
	      				>Request A Quote</router-link>
	      			</li>
	      		</ul>
		    </div>
	      </nav>
	      <main id="panel">
	      	<Header 
	      		:slideout = slideout
	      		@toggleButon = toggleHandler
	      	/>
			<top-nav />
			<router-view></router-view>
			<footer-content/>
	      </main>
	    </div>
	</div>
</template>

<script>
	import Slideout from 'vue-slideout'
	export default {
		name: 'home',
		data() {
			return {
				slideout: false
			}
	    },
	    methods: {
	      toggleHandler() {
	      	this.slideout = !this.slideout;
	      }
	    }
	}
</script>

<style lang="scss" scoped>
	.grid-container {
		padding-left: 0;
		padding-right: 0;
	}
</style>