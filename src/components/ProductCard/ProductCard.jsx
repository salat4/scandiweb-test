import React, {  PureComponent } from "react";
import styled from "styled-components";
// import {
//     ApolloClient,
//     InMemoryCache,

//   } from "@apollo/client";

const ProductItem = styled.li`
margin-left:99px;
margin-top: 40px;
position: relative;
flex-basis: calc((100% - 3 * 101px) / 3);
box-sizing: content-box;
display:flex;
justify-content:center;
flex-direction: column;
width:354px;
&:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);

  }
`
const ProductImage = styled.img`

margin-bottom :24px;
padding-top:10%;
padding-left:10%;
padding-right:16px;

`
const ProductDescription = styled.div`
padding-left:10%;
padding-bottom:16px;
margin-top:auto;
`
const ProductName = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 160%;
/* identical to box height, or 29px */

display: flex;
align-items: center;

/* --c-black */

color: #1D1F22;
`
const ProductPrice = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 160%;
/* identical to box height, or 29px */

text-align: left;

/* --c-black */
font-weight: bold;

color: #1D1F22;
`
// const client = new ApolloClient({
//     uri: 'http://localhost:4000/',
//     cache: new InMemoryCache()
//   });



export class ProductCard extends PureComponent {


    render(){
        const products = this.props.products;
        return(
            <>
            {products !== [] &&
            products.map((product) =>(
                <ProductItem key = {product.id}>
                <ProductImage src={product.gallery[0]} alt = {product.name} width ="354">

                </ProductImage>
                <ProductDescription>
                    <ProductName>
                        {product.name}
                    </ProductName>
                    <ProductPrice>
                    {product.prices[0].currency.symbol}{product.prices[0].amount}
                    </ProductPrice>
                </ProductDescription>
        </ProductItem>
            ))}

                
            </>
       
            )
            
    
    }

}
