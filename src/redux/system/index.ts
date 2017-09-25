import {REHYDRATE} from 'redux-persist/constants'
import {createActions, FAIL, REQUEST, SUCCESS} from '../common'
import {initializeGa} from '../log/index'
import {saveUserInfo} from '../persist/index'
import {Reducer} from 'redux'
import {back, changeUrl} from '../router/index'
import {ROUTES} from '../../constants/routes'

const defaultState = {} as SystemState

export const reducer: Reducer<SystemState> = (state = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case ActionTypes.BOOT:
      return {
        ...state,
        boot: true
      }
    case REHYDRATE:
      return {
        ...state,
        reHydrated: true
      }
    default:
      return state
  }
}

enum ActionTypes {
  BOOT      = 'boot',
  SESSION   = 'session',
  LOGGED_IN = 'logged in'
}

export function boot() {
  return {
    type: ActionTypes.BOOT
  }
}
export function loggedIn(userInfo, bySession?: boolean) {
  return async dispatch => {
    dispatch(saveUserInfo(userInfo))
    dispatch({
      type:    ActionTypes.LOGGED_IN,
      payload: userInfo
    })
    //todo: if login page === independent
    if (!bySession) {
      dispatch(changeUrl(ROUTES.HOME, {}, true))
    }
  }
}

const SESSION = createActions(ActionTypes.SESSION)

export function session() {
  return async (dispatch, getState) => {
    dispatch({type: SESSION[REQUEST]})
    try {
      const userInfo = getState().persist.userInfo
      dispatch({type: SESSION[SUCCESS]})
      dispatch(initializeGa(userInfo.id))
      dispatch(loggedIn(userInfo, true))
    } catch (ex) {
      dispatch({type: SESSION[FAIL]})
      dispatch(initializeGa())
    } finally {
      dispatch(boot())
    }
  }
}

export interface SystemState {
  boot: boolean
  reHydrated: boolean
}

