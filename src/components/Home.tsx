import * as React from 'react'
import * as classnames from 'classnames'
import {LOGIN_REQUEST_URL} from '../constants/env'

export const Home = props =>
  <div className={classnames('row', 'home')}>
    <form className={classnames('col', 'row')}>
      <a href={LOGIN_REQUEST_URL}>github</a>
    </form>
  </div>
