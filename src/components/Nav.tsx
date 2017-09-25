import * as React from 'react'
import {SFC} from 'react'
import * as classnames from 'classnames'
import {Style} from './Style'
import stylesheet from './Nav.pcss'
import {User} from '../redux/persist/index'
import Link from 'next/link'
import {ROUTES} from '../constants/routes'

interface Nav {
  className?: string
  user: User
}
export const Nav: SFC<Nav> = props => {
  const {className, user} = props
  const navs = user.teams.find(team => team === 'owners') ? ownersNavItems : navItems

  return (
    <nav className={classnames(className, 'navbar', 'navbar-dark', 'bg-dark', 'align-items-center')}>
      <Style style={stylesheet}></Style>
      {navs.map(nav => (
        <span key={nav.name}>
          <Link href={nav.url}>
            <a>{nav.name}</a>
          </Link>
        </span>
      ))}
    </nav>
  )
}

const navItems: NavItem[] = [
  {
    name: '뉴스',
    url: ROUTES.NEWS
  },
  {
    name: '크롤링 타겟',
    url: ROUTES.SOURCES
  },
]
const ownersNavItems: NavItem[] = navItems.concat({
  name: '설정',
  url: ROUTES.SETTINGS
})

interface NavItem {
  name: string
  url: string
}
