import {bindActionCreators, combineReducers} from 'redux'
import {PersistState, reducer as persist, saveUserInfo} from './persist/index'
import {loggedIn, logout, reducer as system, SystemState} from './system/index'
import {reducer as router} from './router/index'

export const reducer = combineReducers<RootState>({
  persist,
  system,
  router,
})
const actionCreators: ActionCreators = {
  loggedIn,
  logout,
}
export const actions: (dispatch) => ActionCreators = bindActionCreators.bind(null, actionCreators)
export interface RootState {
  persist: PersistState
  system: SystemState
}

export interface ActionCreators {
  loggedIn: typeof loggedIn
  logout: typeof logout
}
