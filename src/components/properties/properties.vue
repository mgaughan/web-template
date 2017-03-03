<template>
  <div class="container">
    <ul>
      <li v-for="property in properties3" key="property.id">{{ property.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  beforeMount () {
    if (!this.$store.state.properties3 || !this.$store.state.properties3.length) {
      this.$store.dispatch('getProperties')
    }

    console.log(this.properties3)
  },
  computed: {
    ...mapGetters([
      'properties3'
    ])
  }
}
</script>