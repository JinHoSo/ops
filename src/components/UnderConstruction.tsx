import * as React from 'react'
import {SFC} from 'react'
import * as classnames from 'classnames'
import {Style} from './Style'
import stylesheet from './UnderConstruction.pcss'

interface UnderConstruction {
  className?: string
}
export const UnderConstruction: SFC<UnderConstruction> = props => {
  const {className} = props

  return (
    <div className={classnames(className, 'jumbotron', 'align-items-center', 'text-center')}>
      <Style style={stylesheet}></Style>
      미구현
    </div>
  )
}
