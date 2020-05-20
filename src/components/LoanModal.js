import React from 'react'

export default class LoanModal extends React.Component {
      
    render() {
        
        
        return ( <div className={(this.props.isActive) ? 'itemInfo' : 'hidden'}><h2 class="itemName">You currently owe ${this.props.loan}</h2>
               <section class="counter">How much do you want to pay on your loan?
               <div class= "counterInfo">
               <div class="counterWindow">${this.props.selectedQuantity}</div><div class="counterButtons">
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