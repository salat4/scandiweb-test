import React, {  PureComponent } from "react";
import {
    ApolloClient,
    InMemoryCache,
    gql
  } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { addProduct } from "../../redux/currencySlice";

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
  });


const Section = styled.section`
width:1440px;
display:flex;
`
const Gallery = styled.div`
display:flex;

`
const GalleryPromo = styled.img`
`
const GalleryChoiser = styled.div`
margin-left:100px;
margin-right:40px;
`
const GalleryPhoto = styled.img`

:not(:last-child){
margin-bottom:40px;

}

`
const Left = styled.div`
margin-left:100px;
`
const Brand = styled.div`
color: #1D1F22;
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 27px;
margin-bottom:16px;
`
const Name = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 27px;
color: #1D1F22;
margin-bottom:43px;

`
const Attributes = styled.div`
:not(:last-child){
    margin-bottom:24px;
}

`
const Price = styled.div`
color: #1D1F22;
margin-top:36px;

`
const AddToCart = styled.button`
width: 292px;
height: 52px;
background: #5ECE7B;
border-width:0px;
margin-bottom:40px;
cursor: pointer;

`
const Description = styled.div`
max-width:600px;
`
const AttributeName = styled.p`
`
const AttributeBox = styled.div`
display:flex;

`
const AttributeItem = styled.div`
display:flex;
margin-top:8px;
align-items: center;
justify-content: center;
width: 63px;
border: 1px solid #1D1F22;
height: 45px;

:not(:last-child){
    margin-right:12px;
}

`
const ColorBox = styled.div`
display:flex;

`

const ColorItem = styled.div`
width: 36px;
height: 36px;
border: 1px solid #5ECE7B;
:not(:last-child){
    margin-right:8px;
}
`
const PriceValue = styled.div`
margin-top:10px;
margin-bottom:20px;
`
const ButtonName = styled.p`
color: #FFFFFF;
text-transform: uppercase;
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 120%;
`








const withRouter = WrappedComponent => props => {
    const params = useParams();

    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    )
}






class ProductDescriptionPage extends PureComponent {
state = {
        product:[],
    promoPhoto: 0,
        id: [ ],
        };
    componentDidMount() {
        const id = this.props.params.ProductCardId
        client.query({
            query:gql`
            query{
                product(id:"${id}"){
                id
                name
                gallery
                description
                category
                attributes{
                    id
                    name
                    items{
                        displayValue
                        value
                        id
                    }
                }
                prices{
                    currency{
                         label
                        symbol
                    }
                    amount
                }
                brand
            }
            } 
            `
        })
            .then(result => this.setState({ product: result.data.product }))
    
        setTimeout(() => {
            for (let i = 0; i < this.state.product.gallery.length; i++){
                if (this.state.id < this.state.product.gallery.length) {
                       this.setState(state => ({id:[...state.id,i]})) 
                }
        
        } 
        },200)

    }
    addToBasket = () => {
     
        this.props.addProduct(this.state.product)
        }

    render() {
        
        
        const handleChoise = (e) => {
            this.setState({promoPhoto: e.target.id})
        }
        let id = 0;
        let key = 0;
    return(
        <Section>
            <Gallery>
                     <GalleryChoiser>
                    { this.state.product.gallery !== undefined &&
                        
                        this.state.product.gallery.map((photo) => (
                            
                            <GalleryPhoto key={
                                    key++
                            }
                                id = {id++}
                                src={photo}
                                width='80'
                                onClick={handleChoise}
                            >
                            
                        </GalleryPhoto>
                            
                             
                        ))}
                       
                </GalleryChoiser>
                <div>
                     {
                        this.state.product.gallery !== undefined &&
                        
                         <GalleryPromo src = {this.state.product.gallery[this.state.promoPhoto]} width = "610" >
                   
                </GalleryPromo>}
                </div>
                
               
           
            </Gallery>
            <Left>
                <Brand>
                    {this.state.product.brand}
                </Brand>
                <Name>
                    {this.state.product.name}
                </Name>
                {this.state.product.attributes !== undefined &&
                        this.state.product.attributes.map((attribute) => (
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
               
                <Price>
                    PRICE:
                    <PriceValue>
                        {this.state.product.prices !== undefined &&
                            <p>
                                {this.state.product.prices[0].amount }
                                {this.state.product.prices[0].currency.symbol}
                            </p>  
                            
                            }
                    </PriceValue>
                </Price>
                <AddToCart onClick={this.addToBasket}>
                    <ButtonName>
                        ADD TO CART
                    </ButtonName>
                </AddToCart>
                <Description dangerouslySetInnerHTML={{__html:this.state.product.description}} >
                </Description>
            </Left>
        </Section>
        
    )
}
}

function mapStateToProps(state) {
    return { product: state }
  }
  const mapDispatchToProps = (dispatch) => {
    return{
        addProduct: (state) => dispatch(addProduct(state)),
    }
  };

let WithUrlDataContainerComponent = withRouter(ProductDescriptionPage);
 
export default connect(mapStateToProps,mapDispatchToProps) (WithUrlDataContainerComponent);
