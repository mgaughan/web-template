import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './app.vue'
import routes from './routes/routes'
import store from './store'

Vue.use(Vuex)
Vue.use(VueRouter)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router: new VueRouter(routes)
})
