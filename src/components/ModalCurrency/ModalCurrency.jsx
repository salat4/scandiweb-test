import { PureComponent } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";


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
const Modal = styled.div`
position: absolute;
top:75px;
left:1248px;
z-index: 3;
background: #FFFFFF;
`

const BackDrop = styled.div`
position: fixed;
width: 100%;
height: 100%;
top: 0px;
left: 0;
opacity: 1;
z-index: 15;
    `
const modalRoot =document.querySelector('#modal-root')


export class ModalCurrency extends PureComponent { 
    closeModal = (e) => {
        if (e.currentTarget === e.target) {
            this.props.toggle();
        }
    }
    render() {
        return createPortal(
            <BackDrop onClick={this.closeModal}>
                <Modal>
                     {  this.props.currency.map((curr)=>(
                                        <Currency key={curr.label} onClick = {this.props.setCurrency} id = {curr.symbol}>{curr.symbol}{curr.label}</Currency>
                                    ))}
                </Modal>
             
            </BackDrop>,modalRoot
         
    )
}
}