import React from 'react'
import BuyItemModal from './BuyItemModal.js'
import LoanModal from './LoanModal.js'
import LocationModal from './LocationModal.js'


export default class ItemButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSellActive: false,
        };;
      }

      componentWillReceiveProps(nextProps) {
          console.log(nextProps.item)
if (this.props.doesPlayerHaveThis){
    console.log("GOT IT!")
    this.setState({
        isSellActive: true
});
}else{
    this.setState({
        isSellActive: false
});
}
    }

    shouldComponentUpdate = (newProps) => {
        if (newProps.doesPlayerHaveThis){
        return true;
    }else{
        return false;
        }
        };

openBuyItemModal = () => {
    let item= this.props.item;
    let price= this.props.price; 
    console.log(price);
        this.props.openBuyItemModal(item, price);
      };

openSellItemModal = () => {
    let item= this.props.item;
    let price= this.props.price;      
    this.props.openSellItemModal(item, price);
        };

    render() {
            let item =this.props.item;
        let priceMin = item.minPrice;
    
    let itemPrice = this.props.price;

    
       return <div className="itemButtons"> 
           <button className= {(this.props.playerItemsQuantityMax > 0) ? 'buy' : 'hidden'} onClick={() =>this.openBuyItemModal()} name="buy" value="Buy">Buy</button>
    <button className= {(this.state.isSellActive) ? 'sell' : 'hidden'} onClick={() => this.openSellItemModal()} name="sell" value="Sell">Sell</button>
    </div>     
    }
}