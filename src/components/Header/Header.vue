<template>
	<header 
  		class="off-canvas-content grid-x"
  		v-bind:class="[slideout ? 'is-open-left has-transition-push has-position-left' : '']"
  	>
  		<div class="cell large-6 medium-12 small-12">
  			<router-link v-bind:to="'/'" className="image-link">
  				<img src="../../assets/movers-logo.png">
  			</router-link>
  		</div>
  		<div class="cell large-6 medium-12 small-12">
  			<div class="menu-bar" data-responsive-toggle="example-animated-menu" data-hide-for="medium">
		      	<button class="toggle-button" type="button" @click="toggleHandler">Menu</button>
		      	<div class="title-bar-title"><router-link v-bind:to="'/request-quote'" @click.native="clickLink">Request A Quote</router-link></div>
		          <span>850-427-8800</span>
		    </div>
  			<h1>4th DIMENSION PRO MOVERS</h1>
			<h2>Residence | Apts | Military | Commercial Cartage</h2>
  		</div>
	</header>
</template>


<style lang="scss">
	.toggle-button {
		color: #FFFFFF;
		font-weight: 700;
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