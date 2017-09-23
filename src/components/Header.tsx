import * as React from 'react'
import * as classnames from 'classnames'

export class Header extends React.Component<undefined, undefined> {
  render() {
    return (
      <header className={classnames('row')}>
        <div className="col-12">
          Infrastructure Management System
        </div>
      </header>
    )
  }
}