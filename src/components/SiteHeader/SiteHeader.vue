<template>
  <div>
    <div class="title-bar" data-responsive-toggle="example-animated-menu" data-hide-for="medium">
      <button class="menu-icon toggle-button" type="button" data-toggle></button>
      <div class="title-bar-title">Menu</div>
    </div>

    <div class="nav-container">
        
        <ul class="menu" data-dropdown-menu>
          <li>
            <router-link v-bind:to="'service'">Service Areas</router-link>
          </li>
          <li>
            <router-link v-bind:to="'about-us'">About Us</router-link>
          </li>
          <li><router-link v-bind:to="'quote'">Request A Quote</router-link></li>
        </ul>
        
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'site-header',
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .title-bar {
    background: #bbc4db;
    top: -91px;
    position: relative;
  }
      
  .nav-container {
    display: none;
  }

  @media only screen and (max-width: 320px) {
    .title-bar {
      top: -83px;
    }
  }

  @media only screen and (max-width: 768px) and (min-width: 376px) {
    .title-bar {
      top: -108px;
    }

    .nav-container {
      display: none;
    }
  }

  @media only screen and (min-width: 769px) {
    .title-bar {
      display:none;
    }

    .nav-container {
      display: block;
      padding-bottom: 0px;
      padding-top: 0px;
      border-bottom: 1px rgba(179, 179, 179, 0.5) solid;
      padding-left: 2px;
      margin-top: -20px;
      margin-bottom: 40px;
      background-color: #bbc4db;

      ul {
        margin-top: 20px;
        li {
          a {
            background-color: #bbc4db;
            color: #FFF;
          }
        }
      }
    }
    .js-dropdown-active {
      display: none;
    }
    .projects-accordion:hover {
      .js-dropdown-active {
        display: block;
      }
    }
  }
</style>


<!-- /// 850 427 8800 
//info@4Dlocalmovers.com -->



    <!-- float: right;
    position: relative;
    left: 433px;
    top: 16px; -->