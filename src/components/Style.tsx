import * as React from 'react'
import {SFC} from 'react'

interface Style {
  style: any
}
export const Style: SFC<Style> = props => <style {...{jsx: true}}>{props.style}</style>
