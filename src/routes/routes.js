import home from '../components/layout/home.vue'
import register from '../components/users/register.vue'
import investments from '../components/investments/investments.vue'

const contacts = {}

export default {
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
}