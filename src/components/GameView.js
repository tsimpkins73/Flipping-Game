import React from 'react'
import BuyItemModal from './BuyItemModal.js'
import LoanModal from './LoanModal.js'
import LocationModal from './LocationModal.js'


export default class GameView extends React.Component {
    constructor(props) {
        super(props);
        this.openBuyItemModal = this.openBuyItemModal.bind(this);
      }
doesPlayerHaveThis = (item) =>{
      return this.props.playerItems.find(a => (a.name === item.name))
}
openBuyItemModal = (item) => {
        this.props.openBuyItemModal(item);
      };

openSellItemModal = (item) => {
          this.props.openSellItemModal(item);
        };

    render() {
        let items = this.props.items;
        let funds = this.props.funds;
let loan = this.props.loan;
let day = this.props.currentDay;
let location = this.props.currentLocation;

return ( <section>        
    <section className="playerInfo">Funds: ${funds} | Loan: ${loan} | Day: ${day}/30</section>
    <section className="location">${location}</section>
    <section className="items">
{items.map(function (item) {
    let priceMin = item.minPrice;
    let priceMax = item.maxPrice;
    function currentItemPrice(priceMin, priceMax) {
        return Math.floor(Math.random() * (priceMax - priceMin)) + priceMin;
    };
    let itemPrice = currentItemPrice(priceMin, priceMax);

    
       return <div> 
       <div className="left" id={item.name}>${item.quantity} ${item.name}</div>
    <div className="right">${itemPrice} 
    <button className= "buy" onClick={() => this.openBuyItemModal(item)} name="buy" value="Buy">Buy</button>
    <button className= {(() => this.doesPlayerHaveThis(item)) ? 'hidden' : 'sell'} onClick={() => this.openSellItemModal(item)} name="sell" value="Sell">Sell</button>
    </div>
    <div className="dotted"></div>
    </div>
    
})}
    </section>
     <section className="gameButtons">
     <button className={(this.props.isPayLoanButtonActive) ? 'loan' : 'hidden'} type="submit" name="payLoan" value="Pay Loan">Pay Loan</button>
     <button className= "move" onClick={this.props.moveButton} name="move" value="Move">MOVE</button></section>
     <BuyItemModal isActive={this.props.isBuyItemModalActive} items={this.props.items} itemToBuy={this.props.itemToBuy} playerItems={this.props.playerItems} selectedQuantity={this.props.selectedQuantity} />
    <LoanModal isActive={this.props.isLoanModalActive} />
    <LocationModal isActive={this.props.isLocationModalActive} />
     </section>
        )
    }
}