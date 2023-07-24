import React from "react";
import SmoothButton from '../Reuse/SmoothButton';
import styled from "styled-components";
const Header =()=>{
    return(
        <div>
<Container>
 <Main>
 <Nav>
  <Logo> Logo</Logo>
    <NavTitle>
         <Title>Find Talents</Title>
         <Title>For designers</Title>
          <Title>Inspiration</Title>
       <Title col="i">Go Pro</Title>
        </NavTitle>
        </Nav>
                    <But>
                      < SmoothButton title="Log In" bg="i"/>
                      <SmoothButton title="Singn Up"/>
                    </But>
    </Main>
</Container>
        </div>
    )
}
export default  Header

const But = styled.div`
display: flex;
`
const NavTitle = styled.div`
display: flex;
align-items: center;
`
const Title= styled.div<{col?:string}>`
margin: 0 10px;
transition: all 380ms;
color: ${({col})=> col? "pink": "#000"};
font-weight: 600;
:hover{
    cursor: pointer;
    transform: translate(0,-3px);
}
`
const Nav = styled.div`
    display: flex;
    align-items: center;
`
const Logo =styled.div`
margin-right: 30px;
font-size: 30px;
transition: all  380ms;
font-weight: 600;
:hover{
    cursor: pointer;
    transform: scale(1.05)
}
`
const Main = styled.div`
    width: 95%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    display: flex;
`
const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
`