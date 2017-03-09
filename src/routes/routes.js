import home from '../components/layout/home.vue'
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
      path: '/investments',
      name: 'investments',
      component: investments
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: contacts
    }
  ]
}