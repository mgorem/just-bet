import React from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'
import styled from 'styled-components'


const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #202A44;
    color: #fff;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const MainContainer = () => {
  return (
    <Container>
        <Wrapper>
        <LeftContainer />
        <RightContainer /> 
        </Wrapper>   
    </Container>
  )
}

export default MainContainer