import * as React from 'react'
import {SFC} from 'react'
import {connect} from 'react-redux'
import {actions, DispatchProps} from '../redux/index'
import {ROUTES} from '../constants/routes'
import Link from 'next/link'

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
      return this.state.deny && <AccessDeny/>
    }

    componentDidMount() {
      const {jwt} = this.props

      if (!jwt) {
        return this.setState({deny: true})
      }
      const [_, claim = ''] = jwt.split('.')

      const userInfo = JSON.parse(
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

const AccessDeny: SFC<{}> = (props) =>
  <div className="alert alert-danger text-center" role="alert">
    <Link href={ROUTES.HOME}>
      <a>
        <h4 className="alert-heading">
          <i className="fa fa-ban fa-5x" />
          <p><cite>접근 권한 없음</cite></p>
        </h4>
        <h6>
          <p>홈으로 이동</p>
        </h6>
      </a>
    </Link>
  </div>
