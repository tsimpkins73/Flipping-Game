import React from 'react'

export default class BuyItemModal extends React.Component {

    constructor(props)  {
        super(props);

        this.state = {
            count: 0,
            item: {}
        };;

    }

    componentWillReceiveProps(nextProps){
              this.setState({
      item: nextProps.itemToBuy
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

    addItem = (item, quantity, totalPrice) => {
        console.log('ADD ITEM ' + item + " "  + quantity + " " + totalPrice);
        this.props.addItem(item, quantity, totalPrice);
    };

    cancelButton = () => {
        console.log('CANCEL');
        this.props.cancelButton();
    };



    render() {
        console.log(this.props.itemToBuy);
        console.log(this.state.item);
        let newTotal = this.state.item.price * this.state.count;
        
        return (<div className={(this.props.isActive) ? 'itemInfo' : 'hidden'}><h2 className="itemName">{this.state.item.name} Price:${this.state.item.price}</h2>
            <section className="counter">How many do you want?
               <div className="counterInfo">
                    <div className="counterWindow">{this.state.count}</div><div className="counterButtons">
                        <button className={(newTotal + this.state.item.price < this.props.funds) ? "incrButton" : 'hidden'} name="increase" value="increase" onClick={() => this.increaseButton()}>+</button>
                        <button className={(this.state.count > 0) ? "decrButton" : 'hidden'} name="decrease" value="decrease" onClick={() => this.decreaseButton()}>-</button>
                    </div>
                    Total: {newTotal}
                    <div className="counterInfo">
                        <button className="ok" id="ok" name="ok" value="ok" onClick={() => this.addItem(this.state.item, this.state.count, newTotal)}>OK</button>
                        <button className="cancel" id="cancel" name="cancel" onClick={() => this.cancelButton()} value="cancel">CANCEL</button>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}