<template>
	<footer class="grid-container">
		<div class="grid-x footer-container">
			<div class="cell small-12 medium-6 footer-content">
		        <p>Let us take care of your move while you focus on your move</p>
		        <p>
		          Request A <router-link v-bind:to="'/request-quote'" @click.native="clickLink">Quote</router-link>
		        </p>
			</div>
			<div class="cell small-12 medium-6">
				<ul class="footer-link-container">
					<li class="footer-link-nav">
						<router-link v-bind:to="'/services'" @click.native="clickLink">Service</router-link>
					</li>
					<li class="footer-link-nav"><router-link v-bind:to="'/about-us'" @click.native="clickLink">About Us</router-link></li>
					<li class="footer-link-nav"><router-link v-bind:to="'/request-quote'" @click.native="clickLink">Quote</router-link></li>
				</ul>
			</div>
		</div>
		<div class="social-icons">
			<router-link v-bind:to="'/about-us'" class="facebook"><span class="hide-text">Facebook</span></router-link>
			<router-link v-bind:to="'/about-us'" class="instagram"><span class="hide-text">Instagram</span></router-link>
		</div>
	    <div class="footer-bottom">
	      <p>Serving from Mobile Al to Panama City Fla and areas in between</p>
	      <p>5053 Ring Rose Court Fl Gulf Breeze FL 32563 </p>
	      <p class="left-inline-block"> Main (850) 427 8800</p>
	      <a class="right-inline-block" href="mailto:info@4dlocalmovers.com?subject=Mail from 4D Local Movers App">info@4Dlocalmovers.com</a> </p>
	      <p class="lower-font"><a href="https://app.termly.io/document/privacy-policy/46d47efe-0a29-4bc8-8ee1-35030bc5db76" target="_blank">Privacy Policy </a><span class="copy-format">&copy; 2019 4th Dimension Pro Movers</span></p>
	    </div>
	</footer>
</template>

<script>
	export default {
		name: 'footer-content',
		methods: {
			clickLink() {
				window.scrollTo({top:0});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.lower-font {
		font-size: 0.8rem;
	}

	@media only screen and (max-width: 320px) {
		.grid-margin-x {
			margin: 0;
			padding: 0;
		}
	}

  	.grid-container {
    	background-color: #173D6F;
    	color: #FFF;
    	height: 100%;
  	}

	.footer-container {
		padding-top: 60px;
		margin-top: 30px;

		.footer-content {
	    	font-size: 1.3rem;
			padding: 0px 15px;

			a {
				text-decoration: underline;
			}

			p {
	    		font-size: 1rem;
    			font-weight: 500;
	  		}
		}

		.footer-link-container {
	  		display: flex;
	  		justify-content: space-between;

	  		.footer-link-nav {
	    		float: left;
	    		margin-right: 10%;
	    		list-style-type: none;
	  		}
		}

		.footer-link-sub-container {
			margin: 0;

			.sub-footer-link {
				list-style-type: none;
				color: #8a8a8a;
			}
		}
	}

	.facebook {
		background: url("../../assets/social-icons-retina.png") no-repeat 11.838% 80.711%;
		background-size: 200px 138px;
		width: 40px;
		height: 40px;
		margin-right: 30px;
	}

	.instagram {
		background: url('../../assets/social-icons-retina.png') no-repeat 88.162% 80.711%;
		background-size: 200px 138px;
		width: 40px;
		height: 40px;
	}

	.social-icons {
		display: none;
		justify-content: center;
	}

	.hide-text {
		line-height: 0; 
    	font-size: 0;
    	color: transparent; 
	}

	.footer-bottom {
		text-align: center;
    	font-size: 1.0rem;
    	padding: 10px 15px 0 15px;

    	a {
    		text-decoration: underline;
    		font-weight: 500;
    	}

    	.copy-format {
    		font-size: 0.8rem;
    		padding: 0 5px 0 0;
    	}
	}

	.left-inline-block, .right-inline-block {
		display: inline-block;
		font-size: 1.2rem;
	}

	.left-inline-block {
		margin-right: 7px;
	}

	@media only screen and (min-width: 768px) {
		.footer-container {
			.footer-content {
				border-right: 1px solid rgba(255, 255, 255, 0.10);
			}
		}

		.footer-bottom {
	    	font-size: 0.8rem;
		}

		.left-inline-block {
			display: inline-block;
			margin-right: 7px;
		}

		.right-inline-block {
			display: inline-block;
		}
	}
</style>
