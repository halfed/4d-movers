<template>
  <div id="app" class="app-container">
    <router-view/>
  </div>
</template>

<script>
	export default {
	  	name: 'App'
	}
</script>

<style lang="scss">
@import './styles/main';

.app-container {
  max-width: 1200px;
  margin: 0 auto;
}

.slideout-menu {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 256px;
    height: 100vh;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 0;
    display: none;
    background-color: #1D1F20;
    color: white;
    overflow: hidden;
  }
 
  .slideout-menu-left {
    left: 0;
  }
 
  .slideout-menu-right {
    right: 0;
  }
 
  .slideout-panel {
    background-color: #FFFFFF;
  }
 
  .slideout-open,
  .slideout-open body,
  .slideout-open .slideout-panel {
    overflow: hidden;
  }
 
  .slideout-open .slideout-menu {
    display: block;
  }

  .slid-nav-container {
  	display: flex;
  	flex-direction: column;
  	//padding: 60px;
    font-size: 1.4rem;

    ul {
    	margin-left: 0;
    	padding-top: 40px;
    	
    	li {
	    	list-style-type: none;
	    	padding: 20px;
	    	cursor: pointer;
	    	border-bottom: 1px solid rgba(255, 255, 255, 0.10);
	    }
    }

    .close-toggle {
      text-align: right;
      font-weight: 600;
      padding-top: 20px;
      cursor: pointer;
      color: $white;
    }
}
</style>
