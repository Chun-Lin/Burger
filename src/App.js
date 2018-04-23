import React, { Component } from 'react'
import Layout from './container/Layout'
import BurgerBuilder from './container/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    )
  }
}

export default App
