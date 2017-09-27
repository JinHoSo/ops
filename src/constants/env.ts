import * as qs from 'querystring'

export const DEV = process.env.NODE_ENV !== 'production'

export const GA_TRACKING_ID = ''
export const NA_TRACKING_ID = ''
export const FA_TRACKING_ID = ''
export const SENTRY_TRACKING_ID = ''

export const SITE_NAME = '봉소랩스 ops'
export const SITE_TITLE = '봉소랩스 ops'
export const SITE_DESCRIPTION = '크롤링 데이터 관리'
export const SITE_IMAGE = 'https://avatars2.githubusercontent.com/u/31210784?v=4&s=200'

const GITHUB_CLIENT_ID = '8dc6e18c7457e3b6e5e4'
const LOGIN_REQUEST_URI = 'https://github.com/login/oauth/authorize'
const API_URL = 'https://6w5av02ruc.execute-api.ap-northeast-2.amazonaws.com/dev'
const scope = ['read:org'].join('')

export const LOGIN_REQUEST_URL = [
  LOGIN_REQUEST_URI,
  qs.stringify({
    client_id: GITHUB_CLIENT_ID,
    scope
  })
].join('?')
export const API_NEWS = `${API_URL}/news`
