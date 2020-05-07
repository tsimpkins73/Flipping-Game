import React from 'react'

export default class BuyItemModal extends React.Component {
      
    render() {
        let itemToBuy = this.props.itemToBuy;
        
               return ( <div class="itemInfo"><h2 class="itemName">{itemToBuy.name} Price:${itemToBuy.price}</h2>
               <section class="counter">How many do you want?
               <div class= "counterInfo">
               <div class="counterWindow">{this.props.selectedQuantity}</div><div class="counterButtons">
               <button class="incrButton" name ="increase" value = "increase">+</button>
               <button class="decrButton" name ="decrease" value = "decrease">-</button>
                </div>
                <div class= "counterInfo">
               <button class="ok" id="ok" name="ok" value="ok">OK</button> 
               <button class="cancel" id="cancel" name="cancel" value="cancel">CANCEL</button> 
               </div>
               </div>
               </section>
</div>
        )
    }
}