import * as React from 'react'
import {SFC} from 'react'
import {next} from 'headless-paginator'
import {Meta} from '../redux/news/index'

export const Next: SFC<Next> = props => {
  const {page, limit, totalCount} = props

  return (
    <button
      type="button"
      className="btn btn-outline-dark btn-block"
      onClick={_ => {
        if (next(totalCount, limit, page) !== page) {
          props.next(next(totalCount, limit, page))
        }
      }}
    >
      더 보기
    </button>
  )
}

interface Next extends Meta {
  next(page): void
}

