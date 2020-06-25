import React from 'react'
import BuyItemModal from './BuyItemModal.js'
import LoanModal from './LoanModal.js'
import LocationModal from './LocationModal.js'
import { useState, useEffect, useRef } from 'react';

export default class ItemButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSellActive: false,
            price: 0
        };;
      }
componentDidMount= () =>{
    this.setState({
        isSellActive: true,
        price: this.props.price
});
}
      componentWillReceiveProps(nextProps) {
          console.log(nextProps.item)
          let oldPrice = this.state.price;
if (this.props.doesPlayerHaveThis(nextProps.item)){
    console.log("GOT IT!")
    this.setState({
        isSellActive: true,
        price: oldPrice
});
}else{
    this.setState({
        isSellActive: false,
        price: oldPrice
});
}
    }

    shouldComponentUpdate = () => {
        
        return true;
        };

        openBuyItemModal = (item, price) => {
       console.log(price);
        this.props.openBuyItemModal(item, price);
      };

openSellItemModal = (item, price) => {
    console.log(price);    
    this.props.openSellItemModal(item, price);
        };

    render() {
            let item =this.props.item;
        let priceMin = item.minPrice;
    
    let itemPrice = this.state.price;

    
       return <div className="itemButtons"> 
           <button className= {(this.props.playerItemsQuantityMax > 0) ? 'buy' : 'hidden'} onClick={() =>this.openBuyItemModal(this.props.item, itemPrice)} name="buy" value="Buy">Buy</button>
    <button className= {(this.state.isSellActive) ? 'sell' : 'hidden'} onClick={() => this.openSellItemModal(this.props.item, itemPrice)} name="sell" value="Sell">Sell</button>
    </div>     
    }
}