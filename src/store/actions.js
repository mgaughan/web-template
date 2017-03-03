import * as types from './mutation-types'
import axios from '../plugins/http'

const http = axios.axios

export const getProperties = ({ commit }) => {
  http.get('http://localhost:3000/properties')
    .then((response) => {
      if (response && response.data) {
        commit(types.SET_PROPERTIES, response.data)
      }
    })
}