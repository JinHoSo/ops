import * as React from 'react'
import {connect} from 'react-redux'
import {actions, ActionCreators, RootState} from '../redux/index'

interface S {
}
interface O {
  jwt: string
}
type Props = S & ActionCreators & O
export const Authenticator = connect<S, ActionCreators, O>(
  null,
  actions
)(
  class Authenticator extends React.Component<Props, {}> {
    render() {
      return null
    }
    componentDidMount() {
      const [_, claim = ''] = this.props.jwt.split('.')
      const userInfo = JSON.parse(atob(claim))
      this.props.loggedIn(userInfo)
    }
  }
)

