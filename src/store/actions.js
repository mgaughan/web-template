import * as types from './mutation-types'
import axios from '../plugins/http'

const http = axios.axios

export const getInvestments = ({ commit }) => {
  http.get('http://localhost:3000/api/investments')
    .then((response) => {
      if (response && response.data) {
        commit(types.SET_INVESTMENTS, response.data)
      }
    })
}