<template>

  <header class="navbar navbar-toggleable-md">
    <nav class="container">
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li v-for="item in navItems" class="nav-item" @click="activeNav = item.display">
            <a class="nav-item nav-link"
              :href="item.href || 'javascript:void(0);'"
              :class="{active: activeNav === item.display }"
            >
              {{ item.display }}
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
    navItems: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      activeNav: this.navItems && this.navItems.length
        ? this.navItems[0].display
        : null
    }
  }
}

</script>