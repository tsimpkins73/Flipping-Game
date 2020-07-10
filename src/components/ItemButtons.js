import React from 'react'
import '../css/Gameview-Modals.css'

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
         price: this.props.price,
        currentDay: this.props.currentDay
});
}
      componentWillReceiveProps(nextProps, prevState) {
    if (this.props.doesPlayerHaveThis(nextProps.item)){
    this.setState({
        isSellActive: true,
});
}else{
    this.setState({
        isSellActive: false,
  
});
}   }

 
        openBuyItemModal = (item, price) => {
        this.props.openBuyItemModal(item, price);
      };

openSellItemModal = (item, price) => {
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