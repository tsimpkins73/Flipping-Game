import React from 'react'

export default class SellItemModal extends React.Component {

    constructor(props)  {
        super(props);

        this.state = {
            count: 0,
            item: {}
        };;

    }

    componentWillReceiveProps(nextProps){
              this.setState({
      item: nextProps.itemToSell
  });

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

    sellItem = (quantity, totalPrice) => {
        let itemToSell = this.state.item;
        console.log('ADD ITEM ' + itemToSell + " "  + quantity + " " + totalPrice);
        this.props.sellItem(itemToSell, totalPrice, quantity);
    };

    cancelButton = () => {
        console.log('CANCEL');
        this.props.cancelButton();
    };



    render() {
        console.log(this.props.itemToSell);
        let item = this.state.item;
        let newTotal = this.state.item.price * this.state.count;
        
        return (<div className={(this.props.isActive) ? 'itemInfo' : 'hidden'}><h2 className="itemName">{this.state.item.name} Price:${this.state.item.price}</h2>
            <section className="counter">How many do you want to sell?
               <div className="counterInfo">
                    <div className="counterWindow">{this.state.count}</div><div className="counterButtons">
                        <button className={(this.state.count < item.quantity) ? "incrButton" : 'hidden'} name="increase" value="increase" onClick={() => this.increaseButton()}>+</button>
                        <button className={(this.state.count > 0) ? "decrButton" : 'hidden'} name="decrease" value="decrease" onClick={() => this.decreaseButton()}>-</button>
                    </div>
                    Total: {newTotal}
                    <div className="counterInfo">
                        <button className="ok" id="ok" name="ok" value="ok" onClick={() => this.sellItem(this.state.count, newTotal)}>OK</button>
                        <button className="cancel" id="cancel" name="cancel" onClick={() => this.cancelButton()} value="cancel">CANCEL</button>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}