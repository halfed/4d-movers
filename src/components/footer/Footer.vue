<template>
	<footer class="grid-container">
		<div class="grid-x footer-container">
			<div class="cell small-12 medium-6 footer-content">
		        <p>Let us take care of your move while you focus on your move</p>
		        <p>
		          Request A <a href="#">Quote</a>
		        </p>
			</div>
			<div class="cell small-12 medium-6">
				<ul class="footer-link-container">
					<li class="footer-link-nav">
						Service
						<ul class="footer-link-sub-container">
							<li class="sub-footer-link">Moving</li>
						</ul>
					</li>
					<li class="footer-link-nav">Company</li>
					<li class="footer-link-nav">Quote</li>
				</ul>
			</div>
		</div>
	    <div class="footer-bottom">
	      <p>Serving: Denver Colorado, Florida</p>
	      <p>123 address lane Fl 80023 | Main (850) 427 8800 <a href="mailto:info@4dlocalmovers.com?subject=Mail from 4D Local Movers App">info@4Dlocalmovers.com</a> </p>
	      <p><a href="#">Privacy Policy </a><span class="copy-format">&copy; 2019 4th Dimension Pro Movers</span></p>
	    </div>
	</footer>
</template>

<script>
	export default {
		name: 'footer-content'
	}
</script>

<style lang="scss" scoped>
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

	.footer-bottom {
		text-align: center;
    	font-size: 0.8rem;

    	a {
    		text-decoration: underline;
    		font-weight: 500;
    	}

    	.copy-format {
    		font-size: 0.6rem;
    		padding: 0 5px 0 0;
    	}
	}
</style>
