import home from '../components/layout/home.vue'
import properties from '../components/properties/properties.vue'

const contacts = {}

export default {
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/properties',
      name: 'properties',
      component: properties
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: contacts
    }
  ]
}