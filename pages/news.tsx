import * as React from 'react'
import {Provider} from 'react-redux'
import {Layout} from '../src/components/Layout'
import {StaticPage} from './_page'
import {UnderConstruction} from '../src/components/UnderConstruction'

export default class extends StaticPage<{}> {
  render() {
    return (
      <Provider store={this.store}>
        <Layout>
          <UnderConstruction />
        </Layout>
      </Provider>
    )
  }
}