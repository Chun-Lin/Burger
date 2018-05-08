import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import Button from '../../../components/UI/Button/Button'

const StyledContactData = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;

  @media(min-width: 600px){
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

  render() {
    return (
      <StyledContactData>
        <h4>Enter Your Contact Data</h4>
        <form>
          <StyledInput type="text" name="name" placeholder="Your Name" />
          <StyledInput type="email" name="email" placeholder="Your Email" />
          <StyledInput type="text" name="street" placeholder="Street" />
          <StyledInput type="text" name="postal" placeholder="Postal Code" />
          <Button btnType="success">ORDER</Button>
        </form>
      </StyledContactData>
    )
  }
}

export default ContactData
