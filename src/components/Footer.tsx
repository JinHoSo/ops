import * as React from 'react'
import stylesheet from './Footer.pcss'
import {Style} from './Style'

export const Footer = props =>
  <footer className="row">
    <Style>{stylesheet}</Style>
    <div className="col-12">
      © 2017 봉소랩스 Inc. All rights reserved.
      &nbsp;
      <a target="_blank" href="https://github.com/bongso">
        <img width={32} height={32} src="/static/img/github-icon.svg" alt="bongso github"/>
      </a>
      &nbsp;
      <a target="_blank" href="https://deptno.slack.com/messages/C587B5X9T">
        <img width={32} height={32} src="/static/img/slack.svg" alt="bongso github"/>
      </a>
    </div>
  </footer>
