import axios from 'axios'
import * as types from './mutation-types'

export const getProperties = ({ commit }) => {
  axios.get('http://localhost:3000/properties')
    .then((response) => {
      if (response && response.data) {
        commit(types.SET_PROPERTIES, response.data)
      }
    })
}