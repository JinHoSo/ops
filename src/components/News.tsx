import * as React from 'react'
import {connect} from 'react-redux'
import {actions, ActionCreators, RootState} from '../redux/index'

interface S {
}
interface O {
}
type Props = S & ActionCreators & O
export const News = connect<S, ActionCreators, O>(
  null,
  actions
)(
  class News extends React.Component<Props, {}> {
    render() {
      return (
        <div>news</div>
      )
    }
    componentDidMount() {
    }
  }
)

