<template>
	<div class="grid-container fluid main">
		

		<div class="off-canvas-wrapper">
	      <nav id="menu" class="grid-x grid-padding-x">
	      	<div 
	      		class="cell medium-12 slid-nav-container off-canvas-absolute position-left is-transition-push" 
	      		v-bind:class="[slideout ? 'is-open' : 'is-closed']" 
	      		id="offCanvasLeftSplit" 
	      		data-off-canvas
	      	>
	      		<button class="close-toggle" @click="toggleSlidOutHandler">X</button>
		        <ul>
	      			<li @click="toggleSlidOutHandler">
	      				<router-link 
	      					v-bind:to="'/dev/services'"

	      				>Service Areas</router-link>
	      			</li>
	      			<li @click="toggleSlidOutHandler">
	      				<router-link 
	      				v-bind:to="'about-us'"
	      			>About Us</router-link>
	      			</li>
	      			<li @click="toggleSlidOutHandler">
	      				<router-link 
	      					v-bind:to="'request-quote'"
	      				>Request A Quote</router-link>
	      			</li>
	      		</ul>
		    </div>
	        
	      </nav>


	      <main id="panel">
	      	<div 
	      		class="off-canvas-content"
	      		v-bind:class="[slideout ? 'is-open-left has-transition-push has-position-left' : '']"
	      		data-off-canvas-content
	      	>
	      		<router-link v-bind:to="'/dev'" className="image-link">
	      			<img src="../../assets/movers-logo.png">
	      		</router-link>
				<h1>4th DIMENSION PRO MOVERS</h1>
				<h2>Apartments | Residence | Military</h2>
			</div>
	        
			<site-header
				:toggleHandler="toggleSlidOutHandler"
			/>
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
	      toggleSlidOutHandler() {
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
	.image-link {
		cursor: pointer;
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
		    font-weight: 500;
    		top: 41px;
		}
	}

	@media only screen and (max-width: 320px) {
	    .main {
	    	h1 {
	    		font-size: 1.4em;
	    		padding-left: 15px;
	    	}

	    	h2 {
			    font-size: 1.2em;
			    padding-left: 23px;
			}
	    }
	}

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		.off-canvas-content {
			background-image: url("../../assets/background-img.png");
			background-repeat: repeat-x;
		}

		.main {
			h1 {
			    position: relative;
			    color: #FFF;
			    font-weight: 700;
			    font-size: 2.0em;
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
			    font-size: 1.5em;
			    font-weight: 700;
	    		top: 41px;
			}
		}
	}

	@media only screen and (min-width: 769px) {
		.off-canvas-content {
			background-image: url("../../assets/background-img.png");
			background-repeat: repeat-x;
		}
		.main {
			
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

	@media only screen and (width: 1024px) {
    	.main {
			img {
				width: 40%;
			}

			h1 {
			    top: 30px;
			    left: -9%;
			}

			h2 {
			    top: -60px;
			    left: -9%;
			}
		}
  	}
</style>