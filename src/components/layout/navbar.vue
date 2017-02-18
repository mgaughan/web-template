<template>

  <header class="navbar navbar-toggleable-md">
    <nav class="container">
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li v-for="item in items" class="nav-item" @click="activeNav = item.display">
            <a class="nav-item nav-link"
              :href="item.href || 'javascript:void(0);'"
              :class="{active: activeNav === item.display }"
            >
              <router-link :to="{ name: item.route }">{{ item.display }}</router-link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

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