<template>
  <div class="container">
    <ul>
      <li v-for="property in properties" key="property.id">{{ property.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  beforeMount () {
    if (!this.$store.state.properties || !this.$store.state.properties.length) {
      this.$store.dispatch('getProperties')
    }
  },
  computed: {
    ...mapGetters([
      'properties'
    ])
  }
}
</script>