<template>
  <div class="container">
    <ul>
      <li v-for="investment in investments" key="investment.id">{{ investment.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  beforeMount () {
    if (!this.$store.state.investments || !this.$store.state.investments.length) {
      this.$store.dispatch('getInvestment')
    }
  },
  computed: {
    ...mapGetters([
      'investment'
    ])
  }
}
</script>