import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Layout from './container/Layout'
import BurgerBuilder from './container/BurgerBuilder'
import Checkout from './container/Checkout/Checkout'
import Orders from './container/Orders/Orders'
import Auth from './container/Auth/Auth'
import Logout from './container/Auth/Logout/Logout'
import { authCheckState } from './container/store/actions'

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup()
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Route path="/" component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(authCheckState()),
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
)
