import * as React from 'react'
import {Provider} from 'react-redux'
import {Layout} from '../src/components/Layout'
import {StaticPage} from './_page'
import {News} from '../src/components/News'

export default class extends StaticPage<{}> {
  render() {
    return (
      <Provider store={this.store}>
        <Layout>
          <News/>
        </Layout>
      </Provider>
    )
  }
}