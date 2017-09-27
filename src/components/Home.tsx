import * as React from 'react'
import * as classnames from 'classnames'
import {LOGIN_REQUEST_URL} from '../constants/env'
import stylesheet from './Home.pcss'
import {Style} from './Style'

export const Home = props =>
  <div className={classnames('home', 'jumbotron')}>
    <Style>{stylesheet}</Style>
    <a className={classnames('row', 'align-items-center')} href={LOGIN_REQUEST_URL}>
      <div className="col-2">
        <img src="/static/img/github.png" alt="login with github"/>
      </div>
      <div className="col-10">
        <h1>
          Login with Github
        </h1>
      </div>
    </a>
  </div>
