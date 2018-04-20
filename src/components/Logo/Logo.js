import React from 'react'
import styled from 'styled-components'

import BurgerLogo from '../../assets/burger-logo.png'

const StyledLogo = styled.div`
    background-color: white;
    padding: 8px;
    height: 100%;
    box-sizing: border-box;
    border-radius: 5px;
}
`

const StyledImg = styled.img`
  height: 100%;
`

const Logo = () => {
  return (
    <StyledLogo>
      <StyledImg src={BurgerLogo} alt="LOGO" />
    </StyledLogo>
  )
}

export default Logo
