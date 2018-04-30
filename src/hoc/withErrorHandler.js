import React, { Component, Fragment } from 'react'
import Modal from '../components/UI/Modal/Modal'
import Backdrop from '../components/UI/Backdrop/Backdrop'
import axios from '../axios-orders'

const withErrorHandler = WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.reqInterceptor = axios.interceptors.request.use(
        req => {
          this.setState({ error: false, errorMessage: '' })
          return req
        },
        error => {
          console.log(error)
        },

        (this.resInterceptor = axios.interceptors.response.use(
          res => res,
          error => {
            console.log(error)
            this.setState({ error: true, errorMessage: error })
          },
        )),
      )
    }

    state = {
      error: false,
      errorMessage: '',
    }

    modalClosedHandler = () => {
      this.setState({ error: false })
    }

    render() {
      return (
        <Fragment>
          <Modal showModal={this.state.error}>
            {this.state.error ? this.state.errorMessage.message : null}
          </Modal>

          {this.state.error ? (
            <Backdrop clicked={this.modalClosedHandler} />
          ) : (
            <Fragment />
          )}

          <WrappedComponent {...this.props} />
        </Fragment>
      )
    }
  }
}

export default withErrorHandler
