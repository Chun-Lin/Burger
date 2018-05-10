import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import axios from '../../../axios-orders'

const StyledContactData = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;

  @media (min-width: 600px) {
    width: 500px;
  }
`

const StyledInput = styled.input`
  display: block;
`

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  }

  orderHandler = event => {
    event.preventDefault()
    this.setState({ loading: true })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'ChunLin Wu',
        address: {
          street: 'Teststreet 1',
          zipCode: '41351',
          country: 'Taiwan',
        },
        email: 'test@test.com',
      },
      deliveryMethod: 'fastest',
    }
    axios
      .post('/orders.json', order)
      .then(response => {
        console.log(response)
        this.setState({ loading: false })
        this.props.history.push('/')
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    let form = (
      <form>
        <StyledInput type="text" name="name" placeholder="Your Name" />
        <StyledInput type="email" name="email" placeholder="Your Email" />
        <StyledInput type="text" name="street" placeholder="Street" />
        <StyledInput type="text" name="postal" placeholder="Postal Code" />
        <Button btnType="success" onClick={this.orderHandler}>
          ORDER
        </Button>
      </form>
    )

    if (this.state.loading === true) {
      form = <Spinner />
    }

    return (
      <StyledContactData>
        <h4>Enter Your Contact Data</h4>
        {form}
      </StyledContactData>
    )
  }
}

export default ContactData
