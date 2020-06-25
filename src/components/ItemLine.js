import React from 'react'
import ItemButtons from './ItemButtons.js'
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
    let doesPlayerHaveThis= this.props.doesPlayerHaveThis(item);
    
       return <div className="itemLine"> 
       <div className="left" id={item.name}>
            <div className="itemName">{item.name}</div>
            </div>
    <div className="dotted"></div>
 
    <div className="right">${itemPrice} 
    <ItemButtons openBuyItemModal={this.props.openBuyItemModal} openSellItemModal={this.props.openSellItemModal} item= {this.props.item} price={itemPrice} playerItemsQuantityMax={this.props.playerItemsQuantityMax} doesPlayerHaveThis= {doesPlayerHaveThis}  />
    </div>
    </div>
     
    }
}