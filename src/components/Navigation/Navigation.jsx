import React, { Component } from "react";
import styled from "styled-components";
import logo from "../../image/VSF.png"
import basket from "../../image/Icon/Vector.svg"
const Nav = styled.div`
    margin-left:101px;
    width:234px;
    height:56px;
    display:flex;
    padding-top: 24px;
    justify-content:space-around;

`
const NavItem = styled.p`
margin:0px;
text-transform: uppercase;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 120%;
color: #1D1F22;
`
const Top = styled.section`
display:flex;
width:1440px;
height:80px;
`

const Logo = styled.div`
display:flex;
justify-content:center;
align-items: center; 
margin-left:385px;
`
const Right =styled.div`
margin-left:544px;
display:flex;
justify-content:center;
align-items: center; 

`
const Currency = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 160%;
color: #1D1F22;
width:12px;
height:29px;
`
const Basket = styled.div`

`


export class Navigation extends Component {
   
render(){
    return(
        <Top>
            <Nav>
                <NavItem>
                Women
                </NavItem>
                <NavItem>
                Men
                </NavItem>
                <NavItem>
                Kids
                </NavItem>
            </Nav>
            <Logo>
            <img src={logo} alt="logo"  width="31" height="30"/>
            </Logo>
           <Right>
           <Currency>$</Currency>
           <Basket>
             <image src = {basket} alt="basket"></image>  

           </Basket>
           </Right>
        </Top>
    )
}
}