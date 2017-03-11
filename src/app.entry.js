import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './app.vue'
import routes from './routes/routes'
import store from './store'
import http from './plugins/http'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(http)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router: new VueRouter(routes)
})
