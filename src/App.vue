<template>

  <div class="app-container">
    <navbar :items="items"></navbar>
    <div class="router-container container">
      <router-view></router-view>
    </div>
    <footer>
      <p>© Company 2017</p>
    </footer>
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
        }
      ]
    }
  }
}

</script>

<style lang="scss">

@import '../node_modules/bootstrap/dist/css/bootstrap.css';

.router-container {
  margin-top: 55px;
  padding: 25px;
}
</style>
