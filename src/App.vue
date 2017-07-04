<template>

  <div id="app">
    <navbar :items="items"></navbar>
    <div class="container router-container">
      <router-view></router-view>
    </div>
    <footer>
      <p>© Company 2017</p>
    </footer>
  </div>

</template>

<script>

import navbar from './components/layout/navbar.vue'

export default {
  components: {
    navbar
  },
  data () {
    return {
      items: [
        {
          display: 'Home',
          route: 'home'
        }
      ]
    }
  }
}

</script>

<style lang="scss">

$fa-font-path: "~font-awesome/fonts";
@import '../node_modules/font-awesome/scss/font-awesome.scss';
@import '../node_modules/bootstrap/dist/css/bootstrap.css';

.router-container {
  margin-top: 55px;
}
</style>
