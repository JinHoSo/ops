import * as qs from 'querystring'

export const DEV = process.env.NODE_ENV !== 'production'

export const GA_TRACKING_ID = ''
export const NA_TRACKING_ID = ''
export const FA_TRACKING_ID = ''
export const SENTRY_TRACKING_ID = ''

export const SITE_NAME = '봉소랩스 Infrastructure Management System'
export const SITE_TITLE = '봉소랩스 IMS'
export const SITE_DESCRIPTION = '크롤링 데이터 관리'
export const SITE_IMAGE = 'https://avatars2.githubusercontent.com/u/31210784?v=4&s=200'

const GITHUB_CLIENT_ID = '8f5ba49d3b3afe84065b'
const LOGIN_REQUEST_URI = 'http://github.com/login/oauth/authorize'

export const LOGIN_REQUEST_URL = [
  'http://github.com/login/oauth/authorize',
  qs.stringify({
    client_id: GITHUB_CLIENT_ID
  })
].join('?')


