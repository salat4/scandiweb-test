import { PureComponent } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";


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
    height: 190px;
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
const AttributeBox = styled.ul`
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
    margin-left:4px;
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

const modalRoot =document.querySelector('#modal-root')

export class ModalBasket extends PureComponent{

    closeModal = (e) => {
        if (e.currentTarget === e.target) {
            this.props.closeModal();
        }
    }
    render(){
    return createPortal(
       <BackDrop onClick={this.closeModal}>
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
                                                        {/* <TotalPrice>{ this.props.product.currency.value}{this.state.sumPrice}</TotalPrice> */}
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
                                    </BackDrop> ,modalRoot
    )
}
}

