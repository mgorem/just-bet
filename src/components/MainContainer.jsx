import React from 'react'
// import LeftContainer from './LeftContainer'
// import RightContainer from './RightContainer'
import styled from 'styled-components'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #46596a;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
  width: 90%;
  height: 85%;
  display: flex;
  border: none;
  border-radius: 20px;
`
const LeftView = styled.div`
  flex: 1;
  background-color: #203342;
  padding: 15px;
  display: flex;
  flex-direction: column;
  color: #8c97a3;
  font-weight: bolder;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`
const TopLeftView = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const BottomLeftView = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
const Language = styled.span`
    font-size: 8;
    cursor: pointer;
`
const RightView = styled.div`
  flex: 11;
  background-color: #12181e;
  padding: 15px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`
const MainContainer = () => {
  return (
    <Container>
      <Wrapper>
        <LeftView>
          <TopLeftView>
            <img src='images/JustBet-logo.jpg' alt='just-bet-logo' width={50} height={50} />
            <HomeOutlinedIcon />
            <StyleOutlinedIcon />
            <CircleOutlinedIcon />
            <HandymanOutlinedIcon />
            <StarOutlineRoundedIcon />
            <LibraryBooksOutlinedIcon />
            <AccountBalanceWalletOutlinedIcon />
          </TopLeftView>
          <BottomLeftView>
            <Language>EN</Language>
            <KeyboardArrowDownIcon />
          </BottomLeftView>
        </LeftView>
        <RightView>
        <h1>Right Stuff</h1>
        </RightView>
      </Wrapper>
    </Container>
  )
}

export default MainContainer