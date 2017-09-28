import * as React from 'react'
import * as classnames from 'classnames'
import {LOGIN_GITHUB_REQUEST_URL, LOGIN_SLACK_REQUEST_URL} from '../constants/env'
import stylesheet from './Home.pcss'
import {Style} from './Style'

export const Home = props =>
  <div className={classnames('home', 'text-center')}>
    <Style>{stylesheet}</Style>
    <div className="alert alert-success" role="alert">
      <h4 className="alert-heading">봉소랩스</h4>
      <p>로그인하세요.</p>
      <hr/>
      <p className="mb-0">
        <a className={classnames('col-6', 'align-items-center')} href={LOGIN_GITHUB_REQUEST_URL}>
          <img width={64} height={64} src="/static/img/github-icon.svg" alt="login with github"/>
        </a>
        <a className={classnames('col-6', 'align-items-center')} href={LOGIN_SLACK_REQUEST_URL}>
          <img width={64} height={64} src="/static/img/slack.svg" alt="login with github"/>
        </a>
      </p>
    </div>
  </div>
