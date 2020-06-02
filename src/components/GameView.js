import React from 'react'
import BuyItemModal from './BuyItemModal.js'
import LoanModal from './LoanModal.js'
import LocationModal from './LocationModal.js'
import ItemLine from './ItemLine.js'

export default class GameView extends React.Component {
    
    constructor(props)  {
        super(props);

        this.state = {
            upDateGameview: true,
        };;

    }


doesPlayerHaveThis = (item) =>{
      return this.props.playerItems.find(a => (a.name === item.name))
}
openBuyItemModal = (item) => {
console.log('Open');
        this.props.openBuyItemModal(item);
      };

openLoanModal = () => {
    this.props.setGameview();
    console.log('Loan');
            this.props.openLoanModal();
          };

moveButton = () => {
    this.props.setGameview();        
    console.log('Move');
                this.props.openLocationModal();
              };
    

openSellItemModal = (item) => {
    this.props.setGameview();
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
let cancelButton = this.props.cancelButton;
let setGameview = this.props.setGameview;
let upDateGameview = this.props.upDateGameview;

return ( <section className={(this.props.isActive) ? 'gameContainer' : 'hidden'} >    
<section className={(this.props.isBlurred ? 'gameContainerBlurred' : 'gameContainer')}>
    <section className="playerInfo">Funds: ${funds} | Loan: ${loan} | Day: {day}/30</section>
    <section className="location">{location}</section>
    <section className="items">
{items.map(function (item) {
   return <ItemLine setGameview={setGameview} upDateGameview={upDateGameview} item={item} openBuyItemModal={openBuyItemModal} openSellItemModal={openSellItemModal} /> 
})}
    </section>
     <section className="gameButtons">
     <button className={(this.props.isPayLoanButtonActive) ? 'loan' : 'hidden'} onClick={() =>this.openLoanModal()} name="payLoan" value="Pay Loan">Pay Loan</button>
     <button className= "move" onClick={() => this.moveButton()} name="move" value="Move">MOVE</button></section>
     </section>
     <BuyItemModal isActive={this.props.isBuyItemModalActive} items={this.props.items} funds={this.props.funds} cancelButton={cancelButton} itemToBuy={this.props.itemToBuy} playerItems={this.props.playerItems} selectedQuantity={this.props.selectedQuantity} increaseBuyQuantity={this.props.increaseBuyQuantity} decreaseQuantity={this.props.decreaseQuantity} addItem={this.props.addItem} />
    <LoanModal isActive={this.props.isLoanModalActive} loan={this.props.loan} cancelButton={cancelButton} increaseSellQuantity={this.props.increaseSellQuantity} decreaseQuantity={this.props.decreaseQuantity} funds={this.props.funds} payLoan={this.props.payLoan} />
    <LocationModal isActive={this.props.isLocationModalActive} locations= {this.props.locations} changeLocation={this.props.changeLocation} cancelButton={cancelButton} />
    
     </section>
        )
    }
}