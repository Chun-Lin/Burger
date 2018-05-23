import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import axios from '../../../axios-orders'
import { withFormik, setFieldValue } from 'formik'
import Yup from 'yup'
import * as R from 'ramda'

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
      userName: {
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
        value: 'fastest',
      },
    },
    loading: false,
  }

  orderHandler = event => {
    event.preventDefault()
    this.setState({ loading: true })
    const formData = {}
    for (let formIdentifier in this.state.orderForm) {
      formData[formIdentifier] = this.state.orderForm[formIdentifier].value
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      orderData: formData,
    }
    console.log(order)
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

  changeHandler = (event, inputIdentifier) => {
    const updatedOrderForm = { ...this.state.orderForm }
    const updatedOrderElement = { ...updatedOrderForm[inputIdentifier] }

    updatedOrderElement.value = event.target.value
    updatedOrderForm[inputIdentifier] = updatedOrderElement

    this.setState({ orderForm: updatedOrderForm })
  }

  render() {
    const { values, errors, touched, handleChange } = this.props
    console.log(values)
    console.log(touched)
    console.log(errors)
    const formElements = []
    for (let key in this.state.orderForm) {
      formElements.push({ id: key, config: this.state.orderForm[key] })
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElements.map(element => {
          return (
            <Input
              key={element.id}
              name={element.id}
              elementType={element.config.elementType}
              elementConfig={element.config.elementConfig}
              value={values[element.id]}
              touched={touched}
              errors={errors}
              onChange={handleChange}
            />
          )
        })}
        {touched && R.isEmpty(errors) ? (
          <Button btnType="success">ORDER</Button>
        ) : (
          <Button btnType="success" disabled>
            ORDER
          </Button>
        )}
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

const FormikContactData = withFormik({
  mapPropsToValues({
    userName,
    street,
    zipcode,
    country,
    email,
    deliveryMethod,
  }) {
    return {
      userName: userName || '',
      street: street || '',
      zipcode: zipcode || '',
      country: country || '',
      email: email || '',
      deliveryMethod: deliveryMethod || 'fastest',
    }
  },
  validationSchema: Yup.object().shape({
    userName: Yup.string()
      .max(40, 'Name must be under 40 characters')
      .required('Name is required'),
    street: Yup.string().required('Street is required'),
    zipCode: Yup.string().required('zipCode is required'),
    country: Yup.string().required('country is required'),
    email: Yup.string()
      .email('Email not valid')
      .required('Email is required'),
  }),
})(ContactData)

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  totalPrice: state.totalPrice,
})

export default connect(mapStateToProps)(FormikContactData)
