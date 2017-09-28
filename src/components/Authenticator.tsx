import * as React from 'react'
import {SFC} from 'react'
import {connect} from 'react-redux'
import {actions, DispatchProps} from '../redux/index'

interface S {
}
interface O {
  jwt: string
}
type Props = S & DispatchProps & O
interface State {
  deny: boolean
}
export const Authenticator = connect<S, DispatchProps, O>(
  null,
  actions
)(
  class Authenticator extends React.Component<Props, State> {
    state = {
      deny: false
    }
    render() {
      return this.state.deny && <AccessDeny />
    }

    componentDidMount() {
      const {jwt}           = this.props
      if (!jwt) {
        return this.setState({deny: true})
      }
      const [_, claim = ''] = jwt.split('.')

      const userInfo        = JSON.parse(
        atob(
          claim
            .replace('-', '+')
            .replace('_', '/')
        )
      )
      this.props.actions.loggedIn({
        ...userInfo,
        jwt,
      })
    }
  }
)

const AccessDeny: SFC<{}> = (props) => <div className="jumbotron"><h1>접근 권한 없음</h1></div>
