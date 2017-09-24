import * as React from 'react'
import {Provider, Store} from 'react-redux'
import {StaticPage} from '../_page'
import {Layout} from '../../src/components/Layout'
import {isomorphicQuery} from '../../packages/nextjs-isomorphic-query'

export default class Index extends StaticPage<{}> {
  render() {
    return (
      <Provider store={this.store}>
        <Layout>
          {JSON.stringify(isomorphicQuery(this.props.url.query), null, 4)}
        </Layout>
      </Provider>
    )
  }
}