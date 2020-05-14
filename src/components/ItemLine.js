import React from 'react'
import BuyItemModal from './BuyItemModal.js'
import LoanModal from './LoanModal.js'
import LocationModal from './LocationModal.js'


export default class ItemLine extends React.Component {
    constructor(props) {
        super(props);
        
        this.openBuyItemModal = this.openBuyItemModal.bind(this);
      }
doesPlayerHaveThis = (item) =>{
      return this.props.playerItems.find(a => (a.name === item.name))
}
openBuyItemModal = (item, price) => {
    console.log('Open');
    console.log(price);
        this.props.openBuyItemModal(item, price);
      };

openSellItemModal = (item) => {
          this.props.openSellItemModal(item);
        };

    render() {
    let item =this.props.item;
        let priceMin = item.minPrice;
    let priceMax = item.maxPrice;
    function currentItemPrice(priceMin, priceMax) {
        return Math.floor(Math.random() * (priceMax - priceMin)) + priceMin;
    };
    let itemPrice = currentItemPrice(priceMin, priceMax);

    
       return <div> 
       <div className="left" id={item.name}>{item.quantity} {item.name}</div>
    <div className="right">${itemPrice} 
    <button className= "buy" onClick={() =>this.openBuyItemModal(item.name, itemPrice)} name="buy" value="Buy">Buy</button>
    <button className= {(() => this.doesPlayerHaveThis(item)) ? 'hidden' : 'sell'} onClick={() => this.openSellItemModal(item, itemPrice)} name="sell" value="Sell">Sell</button>
    </div>
    <div className="dotted"></div>
    </div>
    
    }
}