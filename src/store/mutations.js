import * as types from './mutation-types'

export default {
  [types.SET_INVESTMENTS] (state, investments) {
    state.investments = investments
  }
}