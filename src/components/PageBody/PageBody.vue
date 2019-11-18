<template>
	<section><slot></slot></section>
</template>

<script>
	export default {
		name: 'page-body'
	}
</script>

<style lang="scss" scoped>
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

	h3 {
		padding-left: 16px;
    	font-weight: 500;
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