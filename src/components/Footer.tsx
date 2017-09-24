import * as React from 'react'
import stylesheet from './Footer.pcss'
import {Style} from './Style'

export const Footer = props =>
  <footer className="row">
    <Style style={stylesheet} />
    <div className="col-12">
      © 2017 봉소랩스 Inc. All rights reserved.
      &nbsp;
      <a href="https://github.com/bongso">
        <img src="/static/img/github-xs.png" alt="bongso github"/>
      </a>
    </div>
  </footer>
