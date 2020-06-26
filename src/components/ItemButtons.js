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
            price: 0,
            currentDay: 0
        };;
      }
componentDidMount= () =>{
    this.setState({
        isSellActive: true,
        price: this.props.price,
        currentDay: this.props.currentDay
});
}
      componentWillReceiveProps(nextProps, prevState) {
        console.log(this.state.currentDay)  
        console.log(nextProps.currentDay);
        console.log(nextProps.item.price);
          let oldPrice = this.state.price;
if (nextProps.currentDay > this.state.currentDay){
    console.log("GOT IT!")
    if (this.props.doesPlayerHaveThis(nextProps.item)){
    this.setState({
        isSellActive: true,
        price: nextProps.item.price
});
}else{
    this.setState(prevState => ({
        isSellActive: false,
        price: nextProps.item.price
}));
}
}else{
    if (this.props.doesPlayerHaveThis(nextProps.item)){
        this.setState(prevState => ({
            isSellActive: true,
            price: prevState.price
    }));
    }else{
        this.setState(prevState => ({
            isSellActive: false,
            price: prevState.price
    }));
    }
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
    
    let itemPrice = this.props.price;

    
       return <div className="itemButtons"> 
           <button className= {(this.props.playerItemsQuantityMax > 0) ? 'buy' : 'hidden'} onClick={() =>this.openBuyItemModal(this.props.item, itemPrice)} name="buy" value="Buy">Buy</button>
    <button className= {(this.state.isSellActive) ? 'sell' : 'hidden'} onClick={() => this.openSellItemModal(this.props.item, itemPrice)} name="sell" value="Sell">Sell</button>
    </div>     
    }
}