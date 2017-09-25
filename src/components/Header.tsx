import * as React from 'react'
import * as classnames from 'classnames'
import stylesheet from './Header.pcss'
import {Style} from './Style'
import Link from 'next/link'
import {ROUTES} from '../constants/routes'
import {connect} from 'react-redux'
import {ActionCreators, actions, RootState} from '../redux/index'
import {User} from '../redux/persist/index'
import {Nav} from './Nav'
import {UserBanner} from './UserBanner'

interface S {
  me: User
}
interface O {}
type Props =  S & ActionCreators & O
export const Header = connect<S, ActionCreators, O>(
  (state: RootState) => {
    return {
      me: state.persist.userInfo
    }
  },
  actions
)(
  class Header extends React.Component<Props, {}> {
    render() {
      const {me} = this.props
      return (
        <header className={classnames('row', 'align-items-center')}>
          <Style style={stylesheet}></Style>
          <div className="col-6">
            <Link href={ROUTES.HOME}>
              <a>
                <img src="https://avatars2.githubusercontent.com/u/31210784?v=4&s=200" width={32} height={32}/>
              </a>
            </Link>
          </div>
          {me && <UserBanner className="col-6"/>}
          {me && <Nav className="col-12" user={me}/>}
        </header>
      )
    }
  }
)

