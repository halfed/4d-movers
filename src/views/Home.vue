<template>
	<div class="home">
		<p class="top-paragraph">Our business is built on excellence.</p>
		<p class="body-paragraph">
			The thought of entrusting your entire life’s belongings to someone to move them is about as scary as it gets. We understand that and want you to rest assured knowing that we’re the ones who can get the job done right.

            We know that we’re only as good as our last move completed and work tirelessly to improve our operations. Whether it be down the block or across the country, there’s nothing we value more than our client’s satisfaction.
		</p>
	</div>
</template>

<script>
	export default {
		name: 'home'
	}
</script>

<style lang="scss">
	
	.top-paragraph {
	    font-size: 1.1rem;
	    font-weight: 600;
	    padding-left: 20px;
	}

	.body-paragraph {
		width: 90%;
	    margin: 0 auto;
	    font-size: 1rem;
	    line-height: 1.8;
	}

	@media only screen and (min-width: 768px) {
		.top-paragraph {
			font-size: 2.0rem;
		}
		.body-paragraph {
			width: 100%;
			padding: 0 20px;
		}
	}
</style>
