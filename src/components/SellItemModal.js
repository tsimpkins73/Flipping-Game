import React from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import '../css/Gameview-Modals.css'

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
  this.resetCount();

}

handleOnChange = (value) => {
    this.setState({
        count: value
    })
}

handleChangeStart = () => {

  };

  handleChangeComplete = () => {

  };

    sellItem = (quantity, totalPrice) => {
        let itemToSell = this.state.item;
           this.props.sellItem(itemToSell, totalPrice, quantity);
        this.resetCount();
    };

    cancelButton = () => {
             this.props.cancelButton();
        this.resetCount();
    };

    resetCount = () => {
        this.setState({
            count: 0
        })
    };



    render() {
            let item = this.state.item;
        let newTotal = this.state.item.price * this.state.count;
        let maxAmount = this.state.item.quantity;
        let { count } = this.state;
        
        return (<div className={(this.props.isActive) ? 'itemInfo' : 'hidden'}><h2 className="itemName">{this.state.item.name} Price: ${this.state.item.price}</h2>
            <section className="counter">How many do you want to sell?
               <div className="counterInfo">
               <Slider min={0} max={maxAmount} value={count} orientation="horizontal" step={1} onChangeStart={this.handleChangeStart} onChange={this.handleOnChange} onChangeComplete={this.handleChangeComplete} handleLabel={count}  />
                    <h1>Total: {newTotal}</h1>
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