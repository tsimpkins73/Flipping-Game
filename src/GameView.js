import React from 'react'

export default class GameView extends React.Component {
    constructor(props){
        super(props, context);
    
        this.state = {
            }
    
     
    }
    
    render() {
        let items = this.props.items;
    return ( <section>
        
    <section class="playerInfo">Funds: ${funds} | Loan: ${loan} | Day: ${day}/30</section>
    <section class="location">${location}</section>
    <section class="items">
{items.map(function (item) {
    let priceMin = item.minPrice;
    let priceMax = item.maxPrice;
    function currentItemPrice(priceMin, priceMax) {
        return Math.floor(Math.random() * (priceMax - priceMin)) + priceMin;
    };
    let itemPrice = currentItemPrice(priceMin, priceMax);

   return <div class="left" id="${item.name}">${item.quantity} ${item.name}</div>
    <div class="right">${itemPrice}</div>
    <div class="dotted"></div>
    </ br>
})}
    </section>
     <section class="gameButtons">
     <button class= "loan" type="submit" name="payLoan" value="Pay Loan">Pay Loan</button>
     <button class= "move" onClick={this.props.moveButton} name="move" value="Move">MOVE</button></section>);
     </section>
        )
    }