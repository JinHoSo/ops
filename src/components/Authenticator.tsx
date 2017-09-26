import * as React from 'react'
import {connect} from 'react-redux'
import {actions, ActionCreators, RootState} from '../redux/index'
import {SFC} from 'react'

interface S {
}
interface O {
  jwt: string
}
type Props = S & ActionCreators & O
interface State {
  deny: boolean
}
export const Authenticator = connect<S, ActionCreators, O>(
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
      const userInfo        = JSON.parse(atob(claim))
      this.props.loggedIn({...userInfo, jwt})
    }
  }
)

const AccessDeny: SFC<{}> = (props) => <div className="jumbotron"><h1>접근 권한 없음</h1></div>
