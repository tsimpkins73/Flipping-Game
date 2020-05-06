import React from 'react'

export default class ItemModal extends React.Component {
    constructor(props){
        super(props, context);
    
        this.state = {
            }
    
     
    }

       
    render() {
        let currentItem = this.props.items.find(o => o.name === itemName);
        
               return ( <div class="itemInfo"><h2 class="itemName">${currentItem.name} Price:$${currentItem.currentPrice}</h2>
               <section class="counter">How many do you want?
               <div class= "counterInfo">
               <div class="counterWindow">${this.state.selectedQuantity}</div><div class="counterButtons">
               <button class="incrButton" name ="increase" value = "increase">+</button>
               <button class="decrButton" name ="decrease" value = "decrease">-</button>
                </div>
                <div class= "counterInfo">
               <button class="ok" id="ok" name="ok" value="ok">OK</button> 
               <button class="cancel" id="cancel" name="cancel" value="cancel">CANCEL</button> 
               </div>
               </section>
</div>
        )
    }