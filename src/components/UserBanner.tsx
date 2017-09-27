import * as React from 'react'
import * as classnames from 'classnames'
import {User} from '../redux/persist/index'
import {connect} from 'react-redux'
import {DispatchProps, actions, RootState} from '../redux/index'
import {Style} from './Style'
import stylesheet from './UserBanner.pcss'

interface S {
  user: User
}
interface O {
  className?: string
}
type Props = S & DispatchProps & O
interface State {
  clicked: boolean
}
export const UserBanner = connect<S, DispatchProps, O>(
  (state: RootState) => {
    return {
      user: state.persist.userInfo
    }
  },
  actions
)(
  class UserBanner extends React.Component<Props, State> {
    state = {
      clicked: false
    }
    constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this)
    }
    render() {
      const {className, user} = this.props
      const {clicked} = this.state
      return (
        <div className={classnames(className, 'user-banner', 'text-right')} onClick={this.handleClick}>
          <Style style={stylesheet}></Style>
          {clicked && (
            <span className="logout" onClick={this.props.actions.logout}>로그아웃</span>
          )}
          <img src={user.avatarUrl} role="presentation" width={32} height={32} />
          <span>{user.name}({user.email})</span>
        </div>
      )
    }
    handleClick() {
      if (this.state.clicked) {
        return
      }
      this.setState(
        {clicked: true},
        () => setTimeout(_ => this.setState({clicked: false}), 2000)
      )
    }
  }
)
