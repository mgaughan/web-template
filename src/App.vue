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
import home from './components/layout/home.vue'

export default {
  components: {
    navbar,
    home
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

@import '../node_modules/bootstrap/dist/css/bootstrap.css';

body {
  padding-top: 2rem;
}
</style>
