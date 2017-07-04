<template>
  <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
    <a class="navbar-brand" href="#">Template</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li v-for="item in items" class="nav-item" @click="activeNav = item.display">
          <router-link :to="{ name: item.route }"
            class="nav-link"
            href="#"
            :class="{active: activeNav === item.display }"
          >
            {{ item.display }}
            <span v-if="activeNav === item.display" class="sr-only">(current)</span>
          </router-link>
        </li>
      </ul>
      <div class="login my-2 my-lg-0">
        <a href="#">Log In</a>
        <router-link
          :to="{ name: 'register' }"
          class="btn btn-outline-success my-2 my-sm-0"
          @click="activeNav = 'Register'"
          href="#">Sign Up</router-link>
      </div>
    </div>
  </nav>

</template>

<script>

export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      activeNav: this.items && this.items.length
        ? this.items[0].display
        : null
    }
  }
}

</script>

<style lang="scss" scoped>
.login {
  .btn {
    margin-left: 10px;
  }
}
</style>