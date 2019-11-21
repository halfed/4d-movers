<template>
	<div class="grid-container fluid main">
		<div class="off-canvas-wrapper">
	      <SideNav
	      	:slideout = slideout
	      	@closeNav = toggleHandler 
	      />
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