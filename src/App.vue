<template>

  <div id="app">
    <navbar :nav-items="navItems"></navbar>
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
      navItems: [
        {
          display: 'Properties'
        },
        {
          display: 'Contacts'
        }
      ]
    }
  }
}

</script>

<style lang="scss">

@import '../node_modules/bootstrap/dist/css/bootstrap.css';

</style>
