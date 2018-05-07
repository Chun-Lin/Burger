import React, { Component } from 'react'
import Layout from './container/Layout'
import BurgerBuilder from './container/BurgerBuilder'
import Checkout from './container/Checkout/Checkout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <BurgerBuilder />
          <Checkout />
        </Layout>
      </div>
    )
  }
}

export default App
