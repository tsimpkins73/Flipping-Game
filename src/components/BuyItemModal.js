import React from 'react'

export default class BuyItemModal extends React.Component {

    increaseButton = () => {
        console.log('CANCEL');
        this.props.increaseBuyQuantity();
    };

    decreaseButton = () => {
        console.log('CANCEL');
        this.props.decreaseQuantity();
    };


    cancelButton = () => {
        console.log('CANCEL');
        this.props.cancelButton();
    };



    render() {
        let itemToBuy = this.props.itemToBuy;

        return (<div className={(this.props.isActive) ? 'itemInfo' : 'hidden'}><h2 className="itemName">{this.props.itemToBuy.name} Price:${this.props.itemToBuy.price}</h2>
            <section className="counter">How many do you want?
               <div className="counterInfo">
                    <div className="counterWindow">{this.props.selectedQuantity}</div><div className="counterButtons">
                        <button className="incrButton" name="increase" value="increase" onClick={() => this.increaseButton()}>+</button>
                        <button className="decrButton" name="decrease" value="decrease" onClick={() => this.decreaseButton()}>-</button>
                    </div>
                    <div className="counterInfo">
                        <button className="ok" id="ok" name="ok" value="ok">OK</button>
                        <button className="cancel" id="cancel" name="cancel" onClick={() => this.cancelButton()} value="cancel">CANCEL</button>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}