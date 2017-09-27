import {Reducer} from 'redux'
import {GET} from 'redux-fetch'
import {API_NEWS} from '../../constants/env'
import {createActions, FAIL, headers, REQUEST, SUCCESS} from '../common'
import {RootState} from '../index'

const defaultState = {} as NewsState

export const reducer: Reducer<NewsState> = (state = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case ACTIONS_NEWS[REQUEST]:
    return {
      ...state,
      loading: true
    }
    case ACTIONS_NEWS[SUCCESS]:
      return {
        ...state,
        list: payload,
        loading: false
      }
    case ACTIONS_NEWS[FAIL]:
      return {
        ...state,
        list: [],
        loading: false
      }
    default:
      return state
  }
}

enum ActionTypes {
  BOOT      = 'boot',
  SESSION   = 'session',
  LOGGED_IN = 'logged in',
  LOGOUT    = 'logout',
  NEWS      = 'news',
}

const ACTIONS_NEWS = createActions(ActionTypes.NEWS)
export const getNews = () => GET(API_NEWS, ACTIONS_NEWS, {headers})

export interface NewsState {
  list: News[]
  loading: boolean
}

interface News {
  _id: string
  번호: string
  제목: string
  작성자: string
  작성일자: string
  조회수: string
  name: string
  url: string
  접수일정: string
  상태: string
}