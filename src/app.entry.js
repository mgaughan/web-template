import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import App from './app.vue'

Vue.use(BootstrapVue)
Vue.use(Vuex)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App)
})
