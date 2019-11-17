<template>
	<div class="grid-container fluid main">
		<div class="off-canvas-wrapper">
	      <nav id="menu" class="grid-x grid-padding-x">
	      	<div 
	      		class="cell medium-12 slid-nav-container off-canvas-absolute position-left is-transition-push" 
	      		v-bind:class="[slideout ? 'is-open' : 'is-closed']" 
	      		id="offCanvasLeftSplit" 
	      	>
	      		<button class="close-toggle" @click="toggleHandler">X</button>
		        <ul>
	      			<li @click="toggleHandler">
	      				<router-link 
	      					v-bind:to="'/dev/services'"
	      				>Service Areas</router-link>
	      			</li>
	      			<li @click="toggleHandler">
	      				<router-link 
	      				v-bind:to="'/dev/about-us'"
	      			>About Us</router-link>
	      			</li>
	      			<li @click="toggleHandler">
	      				<router-link 
	      					v-bind:to="'/dev/request-quote'"
	      				>Request A Quote</router-link>
	      			</li>
	      		</ul>
		    </div>
	      </nav>
	      <main id="panel">
	      	<div 
	      		class="off-canvas-content grid-x"
	      		v-bind:class="[slideout ? 'is-open-left has-transition-push has-position-left' : '']"
	      	>
	      		<div class="cell large-6 medium-12 small-12">
	      			<router-link v-bind:to="'/dev'" className="image-link">
	      				<img src="../../assets/movers-logo.png">
	      			</router-link>
	      		</div>
	      		<div class="cell large-6 medium-12 small-12">
	      			<div class="menu-bar" data-responsive-toggle="example-animated-menu" data-hide-for="medium">
				      	<button class="toggle-button" type="button" @click="toggleHandler">Menu</button>
				      	<div class="title-bar-title"><router-link v-bind:to="'/dev/request-quote'" @click.native="clickLink">Request A Quote</router-link></div>
				          <span>850-427-8800</span>
				    </div>
	      			<h1>4th DIMENSION PRO MOVERS</h1>
					<h2>Residence | Apts | Military | Commercial Cartage</h2>
	      		</div>
			</div>
			<site-header />
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
	.title-bar-title a {
		color: #FFFFFF;
		text-decoration: underline;
		top: -1px;
    	position: relative;
	}

	.toggle-button {
		color: #FFFFFF;
		font-weight: 700;
	}

	.grid-container {
		padding-left: 0;
		padding-right: 0;
	}
	.image-link {
		cursor: pointer;
	}
	.main {
		.menu-bar {
			display: block;
			background-color: #bbc4db;
			line-height: 2;
    		color: #FFF;
    		padding-left: 20px;

    		span {
    			float: right;
    			padding-right: 20px;
    			font-weight: 700;
    			margin-top: 1px;
    		}

    		div {
    			padding-left: 5px;
    		}
		}
		h1 {
			color: #FFF;
			background-color: #000;
			font-weight: 700;
			font-size: 1.4rem;
			line-height: 2;
			text-align: center;
		}

		h2 {
			text-align: center;
			font-size: 1.5rem;
		}
	}

	@media only screen and (max-width: 376px) {
		.main {
			h2 {
				font-size: 1.0rem;
			}
		}
	}

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		.off-canvas-content {
			background-image: url("../../assets/background-img.png");
			background-repeat: repeat-x;
		}
	}

	@media only screen and (min-width: 769px) {
		.off-canvas-content {
			background-image: url("../../assets/background-img.png");
			background-repeat: repeat-x;
		}
		.main {
			
			img {
				width: 68%;
				margin-top: 16px;
			}

			.menu-bar {
				display: none;
			}

			h1 {
				text-align: left;
			    color: #FFF;
			    font-size: 2.2rem;
			    background-color: transparent;
			    padding-top: 4%;
			}

			h2 {
				text-align: left;
			    top: 25%;
			    font-size: 1.4rem;
			    position: relative;
			}
		}
	}

	@media only screen and (width: 1024px) {
    	.main {
			img {
				width: 80%;
			}
		}
  	}
</style>