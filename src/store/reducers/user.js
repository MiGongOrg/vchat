import { handleActions } from 'redux-actions'
import { USERINFO } from '../types/user'

const defaultState = {
  info: null
}

export default handleActions ({
  [USERINFO] (state, action) {
    state.info = action.payload
    return {...state}
  }
}, defaultState)