import { handleActions } from 'redux-actions'
import { CHANGENETWORK } from '../types/network'

const defaultState = {
  type: null,
  connected: undefined
}

export default handleActions ({
  [CHANGENETWORK] (state, action) {
    state.type = action.payload.type
    state.connected = action.payload.connected
    return {...state}
  }
}, defaultState)