import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
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

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
        },
        value: '',
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street',
        },
        value: '',
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code',
        },
        value: '',
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country',
        },
        value: '',
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-Mail',
        },
        value: '',
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' },
          ],
        },
        value: '',
      },
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
    const formElements = []
    for (let key in this.state.orderForm) {
      formElements.push({ id: key, config: this.state.orderForm[key] })
    }
    console.log(formElements)
    let form = (
      <form>
        {formElements.map(element => {
          return (
            <Input
              key={element.id}
              elementType={element.config.elementType}
              elementConfig={element.config.elementConfig}
              value={element.config.value}
            />
          )
        })}
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
