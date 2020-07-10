import React from 'react'
import '../css/Gameview-Modals.css'

export default class PlayerBagModal extends React.Component {


    items = this.props.playersItems;

    cancelButton = () => {
        this.props.cancelButton();
    };

    render() {

        let changeLocation = this.changeLocation;
        return (<div className={(this.props.isActive) ? 'itemInfo' : 'hidden'}><h2 class="itemName">Your Items</h2>
            <div className="locationsContainer"> <p>You have room for {this.props.playerItemsQuantityMax} more items in your bag.</p>{this.props.playerItems.map(function (item) {
                       return <div className="location">
                    <div className="playerItemList" id={item.name}>{item.name}</div>
                    <div className="playerItemList" id={item.name}>{item.quantity} </div>
                    <div className="playerItemList" id={item.name}>{item.price}</div>
                </div>
            })}
            </div>
            <button class="cancel" id="cancel" name="cancel" value="cancel" onClick={() => this.cancelButton()} >CANCEL</button>
        </div>
        )
    }
}