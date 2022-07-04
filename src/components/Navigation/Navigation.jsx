import React, {  PureComponent } from "react";
import styled from "styled-components";
import logo from "../../image/VSF.png"
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import {
    ApolloClient,
    InMemoryCache,
    gql
  } from "@apollo/client";
import { choiseCurrency } from "../../redux/currencySlice";
const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
  });

const Nav = styled.div`
margin-left:101px;
width:234px;
height:56px;
display:flex;
padding-top: 24px;
justify-content:space-around;
opacity: 1;
z-index:1000;
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
}

`
const Top = styled.section`
position: sticky;
display:flex;
width:1440px;
height:80px;
margin-bottom:80px;
opacity: 1;
z-index:10000;
top: 0;
background: #FFFFFF;
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

`
const CurrencyActive = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 160%;
color: #1D1F22;
padding-top:31px;
margin-right:22px;
display:flex;
align-items: center; 
cursor: pointer;

`

const Currency = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 160%;
color: #1D1F22;
padding-top:10px;
padding-bottom:10px;
width:114px;
padding-left:20px;
:last-child{
    padding-bottom:10px;
}
:hover{
    background: #EEEEEE;
}
`

const Basket = styled.div`
color:#43464E;
padding-top:35px;
cursor: pointer;
`
const Svg = styled.svg`
align-items: center; 

`
const Arrow = styled.svg`
margin-left:10px;
`
const CurrencyBox = styled.div`
width:80px;
justify-content: center;
align-items: center;
`
const CurrencyChoise = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`
const CurrencyBasket = styled.div`
margin-bottom:8px;
display:flex;


`
const CurrencyList = styled.div`
box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;

`

const MenuLink = styled(NavLink)`
text-decoration: none;
color: #1D1F22;
&.active{
    color:#5ECE7B;
   ::after{
        content: ' ';
        display: inline-block;
        background-color: #5ECE7B;
        width: 100%;
        height: 2px;
        margin-top: 32px;
        bottom: -32px;
        align-items: center; 
        justify-content:center;
}
`
const Modal = styled.div`
position: absolute;
top:0;
left:1050px;
z-index: 3;

    max-height: 500px;
    overflow-y: scroll;
    padding: 32px 16px;
background: #FFFFFF;
`
const BackDrop = styled.div`
position: fixed;
width: 100%;
height: 100%;
top: 80px;
left: 0;
background-color: rgba(0,0,0,0.2);
opacity: 1;
z-index: 15;
    `
const MyBag = styled.div`
    margin-bottom:32px;
    font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 16px;

color: #1D1F22;
`
const Product = styled.li`

    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    :not(:last-child){
          margin-bottom: 40px;
    }


`
const Left = styled.div`

`

const Name = styled.div`
padding-bottom:15px;

`
const Brand = styled.div`
padding-bottom:10px;

`

const Price = styled.p  `
color: #1D1F22;
padding-bottom:8px;

`
const Attributes = styled.div`
`
const AttributeName = styled.div`
margin-bottom:8px;
`
const AttributeBox = styled.div`
display:flex; 
margin-bottom:8px;

`
const AttributeItem = styled.div`
padding:3px 8px;
display:flex;
background: rgba(255, 255, 255, 0.2);
align-items: center;
border: 1px solid #1D1F22;
:not(:last-child){
    margin-right:8px;
}
justify-content: center;
`
const ColorBox = styled.div`
display:flex;

`
const ColorItem = styled.div`
width: 16px;
height: 16px;
:not(:last-child){
    margin-right:8px;
}
`

const Center = styled.div`
    align-items: center;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: auto;
    margin-right: 8px;
`
const ButtonAdd = styled.button`
    align-items: center;
    background-color: inherit;
    border: 1px solid #1d1f22;
    cursor: pointer;
    display: flex;
    height: 24px;
    justify-content: center;
    margin-bottom: 58px;
    position: relative;
    width: 24px;

::before{
        background-color: #1d1f22;
    content: "";
    display: inline-block;
    height: 1px;
    position: absolute;
    top: 11px;
    width: 9px;
}
::after{
        background-color: #1d1f22;
    content: "";
    display: inline-block;
    height: 9px;
    position: absolute;
    top: 7px;
    width: 1px;
}
`
const ButtonRemove = styled.button`
background-color: inherit;
    border: 1px solid #1d1f22;
    cursor: pointer;
    display: flex;
    height: 24px;
    justify-content: center;
    margin-top: 58px;
    position: relative;
    width: 24px;

::before{
        background-color: #1d1f22;
    content: "";
    height: 1px;
    position: absolute;
    top: 11px;
    width: 9px;
}
}
`
const Value = styled.div`
`
const Gallery = styled.img`
width: 121px;
height: auto;
`
const Total = styled.p`
`
const TotalPrice = styled.span`
margin-left:auto;
padding-right:20px;
`
const Buttons = styled.div`
padding-bottom:32px;
`
const ViewBag = styled.button`
width: 140px;
height: 43px;
border: 1px solid #1D1F22;
background: #FFFFFF;
color: #1D1F22;
margin-right:12px;
`
const CheckOut = styled.button`
width: 140px;
height: 43px;
background: #5ECE7B;
color: #FFFFFF;
border:0;
`
const Bottom = styled.div`
padding-left:16px;
`
const BottomNotButton = styled.div`
display:flex;
margin-bottom:32px;
margin-top:32px;

`
const ProductList = styled.ul`
  

`


const basket =
<Svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5613 3.87359C19.1822 3.41031 18.5924 3.12873 17.9821 3.12873H5.15889L4.75914 1.63901C4.52718 0.773016 3.72769 0.168945 2.80069 0.168945H0.653099C0.295301 0.168945 0 0.450523 0 0.793474C0 1.13562 0.294459 1.418 0.653099 1.418H2.80069C3.11654 1.418 3.39045 1.61936 3.47434 1.92139L6.04306 11.7077C6.27502 12.5737 7.07451 13.1778 8.00152 13.1778H16.4028C17.3289 13.1778 18.1507 12.5737 18.3612 11.7077L19.9405 5.50575C20.0877 4.941 19.9619 4.33693 19.5613 3.87365L19.5613 3.87359ZM18.6566 5.22252L17.0773 11.4245C16.9934 11.7265 16.7195 11.9279 16.4036 11.9279H8.00154C7.68569 11.9279 7.41178 11.7265 7.32789 11.4245L5.49611 4.39756H17.983C18.1936 4.39756 18.4042 4.49824 18.5308 4.65948C18.6567 4.81994 18.7192 5.0213 18.6567 5.22266L18.6566 5.22252Z" fill="#43464E"/>
<path d="M8.44437 13.9814C7.2443 13.9814 6.25488 14.9276 6.25488 16.0751C6.25488 17.2226 7.24439 18.1688 8.44437 18.1688C9.64445 18.1696 10.6339 17.2234 10.6339 16.0757C10.6339 14.928 9.64436 13.9812 8.44437 13.9812V13.9814ZM8.44437 16.9011C7.9599 16.9011 7.58071 16.5385 7.58071 16.0752C7.58071 15.6119 7.9599 15.2493 8.44437 15.2493C8.92885 15.2493 9.30804 15.6119 9.30804 16.0752C9.30722 16.5188 8.90748 16.9011 8.44437 16.9011Z" fill="#43464E"/>
<path d="M15.6875 13.9814C14.4875 13.9814 13.498 14.9277 13.498 16.0752C13.498 17.2226 14.4876 18.1689 15.6875 18.1689C16.8875 18.1689 17.877 17.2226 17.877 16.0752C17.8565 14.9284 16.8875 13.9814 15.6875 13.9814ZM15.6875 16.9011C15.2031 16.9011 14.8239 16.5385 14.8239 16.0752C14.8239 15.612 15.2031 15.2493 15.6875 15.2493C16.172 15.2493 16.5512 15.612 16.5512 16.0752C16.5512 16.5188 16.1506 16.9011 15.6875 16.9011Z" fill="#43464E"/>
</Svg>
;
const arrow =
<Arrow width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.5L4 3.5L7 0.5" stroke="black" strokeLinecap="round"/>
</Arrow>




class Navigation extends PureComponent {

    state = {
        currency:[],
        gridIsOpen: false,
        isOpenModal: false,
        sumPrice : 0,

        };
    componentDidMount() {
        client.query({
            query: gql`
            query categories{
                currencies{
                    label
                    symbol
                }
            }`
        })
            .then(result => this.setState({ currency: result.data.currencies }))
        for (let i = 0; i < this.props.product.product.length; i++) {
            this.setState((prevState) => {
                return { sumPrice:prevState.sumPrice +  this.props.product.product[i].prices[0].amount}
            }
            )
        }
    }
    // TotalPrice = () => {
       
       // };
  
    componentDidUpdate(prevProps) {
        if (this.props.product.product !== prevProps.product.product) {
        this.setState((prevState) => {
                return { sumPrice:prevState.sumPrice +  this.props.product.product[this.props.product.product.length-1].prices[0].amount}
            })
            //   for (let i = 0; i < this.props.product.product.length; i++) {
            
        //             }
            
                
        }
        
    }


   
    toggle = () => {
        this.setState(state => ({ gridIsOpen: !state.gridIsOpen }));
      };
      setCurrency = (e) => {
        this.props.choiseCurrency(e.target.id)
        this.setState(state => ({ gridIsOpen: !state.gridIsOpen }));
    }
    openModal = () => {
        this.setState(state => ({ isOpenModal: !state.isOpenModal }));
    }
    render() {
        // let zxc = 0;
    //    const TotalPrice = () => {
       
    //        for (let i = 0; i < this.props.product.product.length; i++) {
    //         // console.log(this.props.product.product[i].prices[0].amount)
    //            zxc = zxc + this.props.product.product[i].prices[0].amount
    //            console.log(zxc)
    //         // this.setState({ totalPrice: this.props.product.product[i].prices[0].amount });
    //         // this.setState({totalPrice: prevState + this.props.product.product[i].prices[0].amount})
    //         //  {totalPrice = totalPrice + product.prices[0].amount}
    //     }
    // };
    
    let currency = this.state.currency; 
    // console.log(this.props.product.product.length)
        return (
        
        <Top>
            
            <Nav>
                <NavItem>
                    <MenuLink to = "/"
                    
                 >
                        All
                    </MenuLink>
                </NavItem>
                <NavItem>
                    <MenuLink to = "/tech"
                     
                 >
                        Tech
                    </MenuLink>
                </NavItem>
                <NavItem>
                    <MenuLink to = "/clothes"
                     
                 >
                        Clothes
                    </MenuLink>
                </NavItem>
            </Nav>
            
            <Logo>
                <NavLink to = "/"
               
                >
                    <img src={logo} alt="logo"  width="31" height="30"/>
                </NavLink>
            </Logo>
           <Right>
                <CurrencyBox >
                         {currency.length !== 0 &&
                            <CurrencyChoise>
                                <CurrencyBasket>
                                        <CurrencyActive onClick={this.toggle} key={this.props.currency}>  {this.props.currency}  <>{arrow}</></CurrencyActive>
                                        <Basket onClick={this.openModal}>
                                            <>{basket}</>   
                                </Basket>
                                {this.state.isOpenModal &&
                                    <BackDrop>
                                        <Modal>
                                            <MyBag>My Bag, {this.props.product.product.length} items</MyBag>         
                                        <ProductList>
                                            {this.props.product.product.map((product) => (    
                                                
                                                <Product key={product.id}>
                                                    
                                                
                                                    <Left>
                                                            <Brand>{ product.brand}</Brand>
                                                            <Name>{ product.name}</Name>
                                                            <Price>{product.prices[0].amount}{product.prices[0].currency.symbol }</Price>
                                                        {product.attributes.map((attribute) => (
                                                                 <Attributes key={attribute.id}>
                                
                                                                <AttributeName>{attribute.name}:</AttributeName>
                                                                {attribute.name !== "Color" ? 
                                                                <AttributeBox>
                                                                        {attribute.items.map((item) => (
                                                                            <AttributeItem key = {item.id}>
                                                                        
                                                                                    {item.value}  
                                                                    
                                                                            
                                                                            </AttributeItem>
                                                                    
                                                                        
                                                                        ))} 
                                                                    
                                                               
                                                                </AttributeBox>
                                                                    : 
                                                                    <ColorBox>
                                                                        {attribute.items.map((item) => (
                                                                            <ColorItem style = {{backgroundColor:  item.value }} key = {item.id}>
                                                                        </ColorItem>
                                                                        ))}
                                                                    
                                                                    </ColorBox>
                                                                    
                                                                 } 
                                                                

                                                            
                                                                
                                                            </Attributes>
                                                            ))}
                                                           
                                                        </Left>
                                                        <Center>
                                                        <ButtonAdd></ButtonAdd>
                                                         <Value>1</Value>
                                                            <ButtonRemove></ButtonRemove>
                                                           
                                                        </Center>
                                                    <Gallery src = {product.gallery[0]}>
                                                        {/* {console.log(product.gallery[0])} */}
                                                        </Gallery>
                                                        
                                                   
                                                </Product> 
                                                
                                            ))}
                                                    
                                             </ProductList>       
                                                <Bottom>
                                                    <BottomNotButton>
                                                        <Total>Total</Total>
                                                        <TotalPrice>{ this.props.product.currency.value}{this.state.sumPrice}</TotalPrice>
                                                    </BottomNotButton>
                                                 
                                                                <Buttons>
                                                                    <ViewBag>
                                                                        View bag
                                                                    </ViewBag>
                                                                     <CheckOut>
                                                                        CHECK OUT
                                                                    </CheckOut>
                                                                </Buttons>
                                                </Bottom>
                                        </Modal>
                                    </BackDrop>
                                    
                                }
                               
                                </CurrencyBasket>

                                <CurrencyList>
                                    {this.state.gridIsOpen &&
                                    currency.map((curr)=>(
                                        <Currency key={curr.label} onClick = {this.setCurrency} id = {curr.symbol}>{curr.symbol}{curr.label}</Currency>
                                    ))}
                            
                                </CurrencyList>
                            </CurrencyChoise>           
                         }
   
                   
                </CurrencyBox>
           

           </Right>
        </Top>
        
    )
}
}
function mapStateToProps(state) {
    return { currency: state.currency.value ,product: state}
  }
  const mapDispatchToProps = (dispatch) => {
    return{
        choiseCurrency: (state) => dispatch(choiseCurrency(state)),
    }
  };
export default connect(mapStateToProps,mapDispatchToProps)(Navigation);
