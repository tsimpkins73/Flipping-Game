import React from 'react'
import BuyItemModal from './BuyItemModal.js'
import LoanModal from './LoanModal.js'
import LocationModal from './LocationModal.js'


export default class ItemLine extends React.Component {
    constructor(props) {
        super(props);
        
        this.openBuyItemModal = this.openBuyItemModal.bind(this);
      }
      componentDidMount = () => {
        this.props.setGameview();
    };

    shouldComponentUpdate = (newProps) => {
        
if(!newProps.upDateGameview){
return false;
} else{
    return true;
}
};





openBuyItemModal = (item, price) => {
    console.log('Open');
    console.log(price);
        this.props.openBuyItemModal(item, price);
      };

openSellItemModal = (item, price) => {
          this.props.openSellItemModal(item, price);
        };

    render() {
            let item =this.props.item;
        let priceMin = item.minPrice;
    let priceMax = item.maxPrice;
    function currentItemPrice(priceMin, priceMax) {
        return Math.floor(Math.random() * (priceMax - priceMin)) + priceMin;
    };
    let itemPrice = currentItemPrice(priceMin, priceMax);

    
       return <div className="itemLine"> 
       <div className="left" id={item.name}>
           <div className="itemQuantity">{item.quantity}</div>
            <div className="itemName">{item.name}</div>
            </div>
    <div className="dotted"></div>
 
    <div className="right">${itemPrice} 
    <button className= {(this.props.playerItemsQuantityMax > 0) ? 'buy' : 'hidden'} onClick={() =>this.openBuyItemModal(item.name, itemPrice)} name="buy" value="Buy">Buy</button>
    <button className= {(this.props.doesPlayerHaveThis(item)) ? 'sell' : 'hidden'} onClick={() => this.openSellItemModal(item, itemPrice)} name="sell" value="Sell">Sell</button>
    </div>
    </div>
     
    }
}