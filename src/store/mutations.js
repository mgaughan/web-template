import types from './mutation-types'

export default {  
  [types.SET_PROPERTIES] (state, properties) {
    state.properties = properties
  }
}