import * as React from 'react'
import {Provider, Store} from 'react-redux'
import {StaticPage} from '../../_page'
import {Layout} from '../../../src/components/Layout'

export default class Index extends StaticPage<{}> {
  render() {
    return (
      <Provider store={this.store}>
        <Layout>
          {JSON.stringify(this.props.url, null, 4)}
        </Layout>
      </Provider>
    )
  }
}