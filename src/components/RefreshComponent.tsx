import * as React from 'react'
import {SystemState} from '../redux/system/index'
import {DispatchProps} from '../redux/index'

export class RefreshComponent<P extends Pick<SystemState, 'loggedIn'> & DispatchProps, S> extends React.Component<P, S> {
  componentWillReceiveProps(props) {
    console.log(this.props.loggedIn !== props.loggedIn, props.loggedIn)

    if (this.props.loggedIn !== props.loggedIn && props.loggedIn) {
      this.props.actions.replaceUrl()
    }
  }
}
