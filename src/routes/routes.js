import home from '../components/layout/home.vue'

const properties = {}
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