import * as React from 'react'
import {SFC} from 'react'

export const Spinner: SFC<Spinner> = props =>
  <p className="text-center">
    <i className={`fa fa-circle-o-notch fa-spin fa-${fontAwesomeSize(props.size)} fa-fw`} />
    <span className="sr-only">{props.text||'로딩중...'}</span>
  </p>

function fontAwesomeSize(size: number|string = 1) {
  return typeof size === 'string'
    ? size
    : `${size}x`
}
interface Spinner {
  text?: string
  size?: 1|2|3|4|5|'lg'
}