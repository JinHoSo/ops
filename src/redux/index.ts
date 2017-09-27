import {bindActionCreators, combineReducers} from 'redux'
import {PersistState, reducer as persist} from './persist/index'
import {loggedIn, logout, reducer as system, SystemState} from './system/index'
import {changeUrl, reducer as router, replaceUrl} from './router/index'
import {getNews, reducer as news, NewsState} from './news/index'

export const reducer = combineReducers<RootState>({
  persist,
  system,
  router,
  news
})
export interface RootState {
  persist: PersistState
  system: SystemState
  news: NewsState
}

export function actions(dispatch): DispatchProps {
  const actionCreators = {
    loggedIn,
    logout,
    getNews,
    replaceUrl
  }
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}
interface ActionCreators {
  loggedIn: typeof loggedIn
  logout: typeof logout
  getNews: typeof getNews
  replaceUrl: typeof replaceUrl
}
export interface DispatchProps {
  actions: ActionCreators
}
