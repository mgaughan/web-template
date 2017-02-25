import axios from 'axios'
import * as types from './mutation-types'

export default {
  getProperties: ({ commit }) => {
    axios.get('/api/')
      .then((response) => {
        debugger
        commit(types.SET_PROPERTIES, response)
      })
  }
}