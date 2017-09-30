import {RootState} from './index'
import * as qs from 'querystring'
import Router from 'next/router'

export const REQUEST: REQUEST = 0
export const SUCCESS: SUCCESS = 1
export const FAIL: FAIL       = 2

export function createActions(actionType: string): [string, string, string] {
  return [`request ${actionType}`, `success ${actionType}`, `fail ${actionType}`]
}

export const headers = getState => {
  const state: RootState          = getState()
  const {jwt: Authorization = ''} = state.persist.userInfo || {}

  return {Authorization}
}

export const withQuery = <T>(api: string, query?: T) => {
  if (!query) {
    return api
  }
  return [api, qs.stringify(query)].join('?')
}

export const withRouterQuery = (api: string, whitelist?: string[]) => {
  if (!Object.keys(Router.query)) {
    return api
  }
  const query = whitelist
    ? whitelistFilter(Router.query, whitelist)
    : Router.query
  return [api, qs.stringify(query)].join('?')
}

export const isPageChanged = (prev = '1', curr = '1') => {
  return prev !== curr
}

const whitelistFilter = (source, whitelist: string[]) => {
  return whitelist.reduce((ret, curr) => {
    if (source[curr]) {
      ret[curr] = source[curr]
    }
    return ret
  }, {})
}

export type REQUEST = 0
export type SUCCESS = 1
export type FAIL = 2

