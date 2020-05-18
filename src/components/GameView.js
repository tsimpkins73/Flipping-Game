import React from 'react'
import BuyItemModal from './BuyItemModal.js'
import LoanModal from './LoanModal.js'
import LocationModal from './LocationModal.js'
import ItemLine from './ItemLine.js'

export default class GameView extends React.Component {
    constructor(props) {
        super(props);
        this.openBuyItemModal = this.openBuyItemModal.bind(this);
      }
doesPlayerHaveThis = (item) =>{
      return this.props.playerItems.find(a => (a.name === item.name))
}
openBuyItemModal = (item) => {
    console.log('Open');
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
let openBuyItemModal=this.props.openBuyItemModal;
let openSellItemModal=this.props.openSellItemModal;



return ( <section className={(this.props.isActive) ? 'gameview' : 'hidden'} >    
<section className={(this.props.isBlurred ? 'gameContainerBlurred' : 'gameContainer')}>
    <section className="playerInfo">Funds: ${funds} | Loan: ${loan} | Day: {day}/30</section>
    <section className="location">{location}</section>
    <section className="items">
{items.map(function (item) {
   return <ItemLine item={item} openBuyItemModal={openBuyItemModal} openSellItemModal={openSellItemModal} /> 
})}
    </section>
     <section className="gameButtons">
     <button className={(this.props.isPayLoanButtonActive) ? 'loan' : 'hidden'} type="submit" name="payLoan" value="Pay Loan">Pay Loan</button>
     <button className= "move" onClick={this.props.moveButton} name="move" value="Move">MOVE</button></section>
     <BuyItemModal isActive={this.props.isBuyItemModalActive} items={this.props.items} itemToBuy={this.props.itemToBuy} playerItems={this.props.playerItems} selectedQuantity={this.props.selectedQuantity} />
    <LoanModal isActive={this.props.isLoanModalActive} loan={this.props.loan} />
    <LocationModal isActive={this.props.isLocationModalActive} locations= {this.props.locations} />
    </section>
     </section>
        )
    }
}