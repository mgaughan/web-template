<template>

  <div id="app">
    <navbar :items="items"></navbar>
    <div class="container">
      <router-view></router-view>
      <hr>
      <footer>
        <p>© Company 2017</p>
      </footer>
    </div>
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
        },
        {
          display: 'Investments',
          route: 'investments'
        },
        {
          display: 'Contacts',
          route: 'contacts'
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

body {
  padding-top: 2rem;
}
</style>
