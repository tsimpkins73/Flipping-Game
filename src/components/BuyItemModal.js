import React from 'react'

export default class BuyItemModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            item: {}
        };;

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            item: nextProps.itemToBuy
        });
this.resetCount();
    }



    increaseButton = () => {
        console.log('INCREASE');
        this.setState(({ count }) => ({
            count: count + 1
        }));
    };

    decreaseButton = () => {
        console.log('DECREASE');
        this.setState(({ count }) => ({
            count: count - 1
        }));
    };

    addItem = (quantity, totalPrice) => {
        let itemToBuy = this.state.item;
        console.log('ADD ITEM ' + itemToBuy + " " + quantity + " " + totalPrice);
        this.props.addItem(itemToBuy, quantity, totalPrice);
        this.resetCount();
    };

    cancelButton = () => {
        console.log('CANCEL');
        this.props.cancelButton();
        this.resetCount();
    };

    resetCount = () => {
        this.setState({
            count: 0
        })
    };


    render() {
        console.log(this.props.itemToBuy);
        let item = this.state.item;
        let newTotal = this.state.item.price * this.state.count;
        let maxAmount = this.state.item.price / this.props.funds;

        return (<div className={(this.props.isActive) ? 'itemInfo' : 'hidden'}><h2 className="itemName">{this.state.item.name} Price:${this.state.item.price}</h2>
            <section className="counter">How many do you want?
               <div className="counterInfo">
                    <div className="counterWindow">{this.state.count}</div><div className="counterButtons">
                        <input type="range" name="quantity" min="1" max={maxAmount}></input>
                            <button className={(newTotal + this.state.item.price < this.props.funds) ? "incrButton" : 'hidden'} name="increase" value="increase" onClick={() => this.increaseButton()}>+</button>
                            <button className={(this.state.count > 0) ? "decrButton" : 'hidden'} name="decrease" value="decrease" onClick={() => this.decreaseButton()}>-</button>
                    </div>
                        <h1> Total: {newTotal} </h1>
                        <div className="counterInfo">
                            <button className="ok" id="ok" name="ok" value="ok" onClick={() => this.addItem(this.state.count, newTotal)}>OK</button>
                            <button className="cancel" id="cancel" name="cancel" onClick={() => this.cancelButton()} value="cancel">CANCEL</button>
                        </div>
                    </div>
            </section>
        </div>
        )
    }
}