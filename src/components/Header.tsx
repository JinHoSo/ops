import * as React from 'react'
import * as classnames from 'classnames'
import stylesheet from './Header.pcss'
import {Style} from './Style'

export class Header extends React.Component<{}, {}> {
  render() {
    return (
      <header className={classnames('row', 'align-items-center')}>
        <Style style={stylesheet}></Style>
        <p className="col-12">
          봉소랩스 IMS
        </p>
      </header>
    )
  }
}