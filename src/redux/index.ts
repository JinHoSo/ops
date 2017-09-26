import {bindActionCreators, combineReducers} from 'redux'
import {PersistState, reducer as persist} from './persist/index'
import {loggedIn, logout, reducer as system, SystemState} from './system/index'
import {reducer as router} from './router/index'
import {getNews, reducer as news, NewsState} from './news/index'

export const reducer = combineReducers<RootState>({
  persist,
  system,
  router,
  news
})
const actionCreators: ActionCreators = {
  loggedIn,
  logout,
  getNews,
}
export const actions: (dispatch) => ActionCreators = bindActionCreators.bind(null, actionCreators)
export interface RootState {
  persist: PersistState
  system: SystemState
  news: NewsState
}

export interface ActionCreators {
  loggedIn: typeof loggedIn
  logout: typeof logout
  getNews: typeof getNews
}
