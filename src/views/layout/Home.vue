<template>
	<div class="grid-container fluid main">
		

		<Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']" @on-open="open">
	      <nav id="menu" class="grid-x grid-padding-x">
	      	<div class="cell medium-12 slid-nav-container">
	      		<ul>
	      			<li>Service Areas</li>
	      			<li>About Us</li>
	      			<li>Request A Quote</li>
	      		</ul>
	      	</div>
	        
	      </nav>
	      <main id="panel">
	        <router-link v-bind:to="'home'"><img src="../../assets/movers-logo.png"></router-link>
			<h1>4th DIMENSION PRO MOVERS</h1>
			<h2>Apartments | Residence | Military</h2>
			<site-header
				panelClickHandler=""
			/>
			<router-view></router-view>
			<footer-content>test</footer-content>
	      </main>
	    </Slideout>
	</div>

</template>

<script>
	import Slideout from 'vue-slideout'
	export default {
		name: 'home',
		components: {
	      Slideout
	    },
	    methods: {
	      open: function () {
	        console.log('slideoutOpen')
	      }
	    }
	}
</script>

<style lang="scss" scoped>
	.grid-container {
		padding-left: 0;
		padding-right: 0;
	}
	.main {
		h1 {


		    position: relative;
		    color: #FFF;
		    font-weight: 700;
		    font-size: 1.4rem;
		    background-color: #000;
		    padding-left: 26px;
		    padding-top: 0px;
		    padding-bottom: 1px;
		    top: 40px;
		    line-height: 2;
		}

		h2 {
		    position: relative;
		    padding-left: 20px;
		    font-size: 1.3rem;
		    font-weight: 700;
    		top: 41px;
		}
	}

	@media only screen and (min-width: 768px) {
		.main {
			background: url("../../assets/background-img.png") repeat-x;
			img {
				width: 34%;
				margin-top: 16px;
			}

			h1 {
				float: right;
			    top: 41px;
			    left: -19%;
			    color: #FFF;
			    font-size: 2.2rem;
			    background-color: transparent;
			}

			h2 {
				float: right;
			    top: -64px;
			    left: -20%;
			    font-size: 2.0rem;
			}
		}
	}
</style>