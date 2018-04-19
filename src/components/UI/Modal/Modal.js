import React, { Fragment } from 'react'
import styled from 'styled-components'

const StyledModal = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  box-shadow: 5px 5px #ccc;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  opacity: ${props => (props.showModal ? '1' : '0')};

  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`

const Modal = ({ children, showModal }) => {
  return (
    <Fragment>
      <StyledModal showModal={showModal}>{children}</StyledModal>
    </Fragment>
  )
}

export default Modal
