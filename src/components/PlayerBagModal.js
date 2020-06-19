import React from 'react'

export default class PlayerBagModal extends React.Component {


items = this.props.playersItems;

cancelButton = () => {
console.log('CANCEL');
this.props.cancelButton();
};

    render() {

                let changeLocation = this.changeLocation; 
               return ( <div className={(this.props.isActive) ? 'itemInfo' : 'hidden'}><h2 class="itemName">Your Items</h2>
                              <div className="locationsContainer"> {this.props.playerItems.map(function (item) {
                   console.log(item);
       return <div className="location"> 
       <div className="playerItemList" id={item.name}>{item.name} {item.quantity} {item.price}</div>
           </div>
      
})}
</div>
               <button class="cancel" id="cancel" name="cancel" value="cancel" onClick={() => this.cancelButton()} >CANCEL</button> 
               </div>
        )
    }
}