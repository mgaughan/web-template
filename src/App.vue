<template>

  <div id="app">
    <navbar :items="items"></navbar>
    <banner></banner>
    <router-view></router-view>
  </div>

</template>

<script>

import navbar from './components/layout/navbar.vue'
import banner from './components/layout/banner.vue'
import home from './components/layout/home.vue'

export default {
  components: {
    navbar,
    banner,
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

</style>
