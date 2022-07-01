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
const RightViewTopBar = styled.div`
  height: 100px;
  padding: 30px;
  /* background-color: blue; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const RightTopViewButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  color: #fff;
  font-weight: 600;
  background-color: #ff0000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const RightFirstSection = styled.div`
  width: 90%;
  height: 50%;
  margin: 20px auto;
  border: none;
  border-radius: 20px;
  background-color: maroon;
  display: flex;
`
const RightFirstLeftSection = styled.div`
  flex: 5;
`
const RightFirstRightSection = styled.div`
  flex: 2;
  background-color: orange;
`

const RightSecondSection = styled.div`
  width: 90%;
  height: 30%;
  margin: 20px auto;
  border: none;
  border-radius: 20px;
  background-color: green;
  overflow: hidden;
  display: flex;
`
const RightSecondLeftSection = styled.div`
  flex: 1;
  background-color: pink;
`
const RightSecondRightSection = styled.div`
  flex: 1;
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
        <RightViewTopBar>
          <h1><span style={{color: "#ff0000"}}>just.</span>bet</h1>
          <RightTopViewButton>
          <StyleOutlinedIcon style={{marginRight: "15px"}}/>
            BUY LOTTERY TICKETS
          </RightTopViewButton>
        </RightViewTopBar>

        <RightFirstSection>
          <RightFirstLeftSection>

          </RightFirstLeftSection>
          <RightFirstRightSection>
            
          </RightFirstRightSection>
        </RightFirstSection>


        <RightSecondSection>
          <RightSecondLeftSection>

          </RightSecondLeftSection>
          <RightSecondRightSection>

          </RightSecondRightSection>
        </RightSecondSection>
        </RightView>
        </Wrapper>

    </Container>
  )
}

export default MainContainer