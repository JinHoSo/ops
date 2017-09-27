import * as React from 'react'
import {SFC} from 'react'

export const Style: SFC<{}> = props => <style {...{jsx: true}}>{props.children}</style>
Style.displayName = 'Style'
