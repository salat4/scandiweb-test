import React, {  PureComponent } from "react";
import styled from "styled-components";
import {ProductCardClothes} from '../ProductCardClothes/ProductCardClothes'
import {
    ApolloClient,
    InMemoryCache,
    gql
  } from "@apollo/client";
import { Outlet } from "react-router-dom";

const Title = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 42px;
line-height: 160%;
display: flex;
align-items: center;
color: #1D1F22;
width:299px;
height:68px;
margin-left:101px;
margin-bottom:103px;
`
const Main = styled.section`
display:flex;
width:1440px;
flex-direction: column;
padding-bottom:191px;
`
const Product = styled.ul`
display: flex;
    flex-wrap: wrap;
    margin-left: -101px;
    margin-top: -40px;
`
// const ProductCard = styled.li`
// `
const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
  });




export class Clothes extends PureComponent {
    state = {
        id:[],
        products:[],
        images:[],

        }
    componentDidMount(){

        client.query({
            query:gql`
            query categories{
                categories{
                    products{
                        id
                        name
                        inStock
                        gallery
                        inStock
                        prices{
                            currency{
                                label
                                symbol
                            }
                            amount
                        }
                    }
                }
            }`
        })
        .then(result => this.setState({products:result.data.categories[1].products}))

    }
    render(){
        // console.log(this.state.products)
        return(
            <>
                <Main>
                    
                    <Title>Category name</Title>
                    <Product>   
                {this.state.products !== [] && <ProductCardClothes products = {this.state.products}/>}

        
                

                        
                    </Product>

                </Main>
            </>
        )
    }
}