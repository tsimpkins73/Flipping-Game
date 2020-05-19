import React from 'react'

export default class BuyItemModal extends React.Component {
      
    constructor(props) {
        super(props);
        
        this.cancelButton = this.cancelButton.bind(this);
    }

    cancelButton = () => {
            this.props.cancelButton();
          };
        

    render() {
        let itemToBuy = this.props.itemToBuy;
        
               return ( <div class="itemInfo"><h2 class="itemName">{this.props.itemToBuy.name} Price:${this.props.itemToBuy.price}</h2>
               <section class="counter">How many do you want?
               <div class= "counterInfo">
               <div class="counterWindow">{this.props.selectedQuantity}</div><div class="counterButtons">
               <button class="incrButton" name ="increase" value = "increase">+</button>
               <button class="decrButton" name ="decrease" value = "decrease">-</button>
                </div>
                <div class= "counterInfo">
               <button class="ok" id="ok" name="ok" value="ok">OK</button> 
               <button class="cancel" id="cancel" name="cancel"  onClick={() => this.cancelButton}  value="cancel">CANCEL</button> 
               </div>
               </div>
               </section>
</div>
        )
    }
}