<template>
  <nav aria-label="primary top nav">
    <div class="nav-container">
        <ul class="menu" data-dropdown-menu>
          <li>
            <router-link v-bind:to="'/dev/services'">Service Areas</router-link>
          </li>
          <li>
            <router-link v-bind:to="'/dev/about-us'">About Us</router-link>
          </li>
          <li><router-link v-bind:to="'/dev/request-quote'">Request A Quote</router-link></li>
        </ul>
        <div class="">
          <span><a href="mailto:info@4dlocalmovers.com?subject=Mail from 4D Local Movers App">info@4Dlocalmovers.com</a></span>
          <span>850-427-8800</span>
        </div>
    </div>
  </nav>
</template>
  
<script>
  export default {
    name: 'site-header'
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

      span {
        float: right;
        position: relative;
        top: -28px;
        padding-right: 20px;
        color: #FFFFFF;
        font-weight: 700;

        a {
          color: #FFFFFF;
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
    .nav-containers {
      background-color: #bbc4db;
    }
  }
</style>


<!-- /// 850 427 8800 
//info@4Dlocalmovers.com -->

<!-- TERMS https://app.termly.io/document/terms-of-use-for-website/dda79ee5-aafe-4339-8658-803a3296d604  -->



    <!-- float: right;
    position: relative;
    left: 433px;
    top: 16px; -->