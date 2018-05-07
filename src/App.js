import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Layout from './container/Layout'
import BurgerBuilder from './container/BurgerBuilder'
import Checkout from './container/Checkout/Checkout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/" component={BurgerBuilder}/>
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App
