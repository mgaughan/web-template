import * as types from './mutation-types'

const mutations = {
  [types.SET_PROPERTIES] (state, properties) {
    state.properties = properties
  }
}

export default mutations